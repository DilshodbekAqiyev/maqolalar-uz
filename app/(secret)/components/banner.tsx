import ConfirmModal from "@/components/modals/confirm-modal";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import useSubscription from "@/hooks/use-subscription";
import { useUser } from "@clerk/clerk-react";
import { useMutation, useQuery } from "convex/react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

interface BannerProps {
  documentId: Id<"documents">;
}

export const Banner = ({ documentId }: BannerProps) => {
  const router = useRouter();
  const { user } = useUser();

  const remove = useMutation(api.document.remove);
  const restore = useMutation(api.document.restore);

  const allDocuments = useQuery(api.document.getAllDocuments);
  const { isLoading, plan } = useSubscription(
    user?.emailAddresses[0]?.emailAddress!
  );

  const onRemove = () => {
    const promise = remove({ id: documentId });

    toast.promise(promise, {
      loading: "Hujjat olib tashlanmoqda...",
      success: "Hujjat olib tashlandi!",
      error: "Hujjatni olib tashlab bo‘lmadi",
    });

    router.push("/documents");
  };

  const onRestore = () => {
    if (allDocuments?.length && allDocuments.length >= 3 && plan === "Free") {
      toast.error(
        "Sizda allaqachon 3 ta qayd bor. Iltimos, ushbu qaydni tiklash uchun bittasini oʻchirib tashlang."
      );
      return;
    }

    const promise = restore({ id: documentId });

    toast.promise(promise, {
      loading: "Hujjat tiklanmoqda...",
      success: "Hujjat tiklandi!",
      error: "Hujjatni tiklab bo‘lmadi",
    });
  };

  return (
    <div className="w-full bg-red-500 text-center text-sm p-2 text-white flex items-center gap-x-2 justify-center">
      <p>Bu sahifa chiqitdonda.</p>

      <Button
        className="border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto font-normal"
        size={"sm"}
        variant={"outline"}
        onClick={onRestore}
      >
        Hujjatni tiklash
      </Button>
      <ConfirmModal onConfirm={() => onRemove()}>
        <Button
          className="border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto font-normal"
          size={"sm"}
          variant={"outline"}
        >
          Abadiy o`chirish
        </Button>
      </ConfirmModal>
    </div>
  );
};
