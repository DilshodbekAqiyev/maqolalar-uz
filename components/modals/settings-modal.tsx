"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useSettings } from "@/hooks/use-settings";
import { ModeToggle } from "../shared/mode-toggle";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Settings } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { useUser } from "@clerk/clerk-react";
import { Loader } from "../ui/loader";

const SettingsModal = () => {
  const settings = useSettings();
  const { user } = useUser();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { isOpen, onClose, onToggle } = settings;

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onToggle();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [onToggle]);

  const onSubmit = async () => {
    setIsSubmitting(true);

    try {
      const { data } = await axios.post("/api/stripe/manage", {
        email: user?.emailAddresses[0].emailAddress,
      });
      if (!data.status) {
        setIsSubmitting(false);
        toast.error("Siz hech qanday tarif rejasiga obuna bo'lmagansiz.");
        return;
      }
      window.open(data.url, "_self");
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
      toast.error(
        "Nimadir noto'g'ri bajarildi. Iltimos, yana bir bor urinib ko'ring."
      );
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium">Sozlamalarim</h2>
        </DialogHeader>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <Label>Ko`rinish</Label>
            <span className="text-[0.8rem] text-muted-foreground">
              Maqolalar qurilmangizda qanday ko‘rinishini moslashtiring
            </span>
          </div>
          <ModeToggle />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <Label>To`lovlar</Label>
            <span className="text-[0.8rem] text-muted-foreground">
              Obuna va toʻlov maʼlumotlarini boshqaring
            </span>
          </div>
          <Button size={"sm"} onClick={onSubmit}>
            {isSubmitting ? <Loader /> : <Settings size={16} />}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsModal;
