"use client";

import { sendForm } from "@/app/kontakt/actions";
import Button from "../ui/button";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { inter } from "@/assets/font/monument-extended";

export default function Form() {
  const [isPending, startTransition] = useTransition();
  return (
    <form
      action={(e) =>
        startTransition(async () => {
          const { error } = await sendForm(e);
          if (error) {
            toast.error(error);
          } else {
            toast.success("Dziękujemy za przesłanie wiadomości!");
          }
        })
      }
    >
      <div className="flex flex-col gap-4 sm:grid grid-cols-2">
        <input
          type="text"
          name="first-name"
          className={`${inter.className} border-[1px] border-white/20 rounded py-3 px-6 text-[12px] bg-background text-white placeholder:text-white/80`}
          placeholder="Imię"
        />
        <input
          type="email"
          name="email"
          className={`${inter.className} border-[1px] border-white/20 rounded py-3 px-6 text-[12px] bg-background text-white placeholder:text-white/80`}
          placeholder="E-mail"
        />
        <textarea
          className={`${inter.className} border-[1px] border-white/20 rounded py-3 px-6 text-[12px] bg-background text-white placeholder:text-white/80 min-h-[8rem] col-span-2`}
          name="message"
          placeholder="Treść wiadomości"
        />
        <Button disabled={isPending} className="mt-2">
          Wyślij
        </Button>
      </div>
    </form>
  );
}
