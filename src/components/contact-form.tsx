/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { contact } from "@/lib/data";
import { PropertyType } from "@/types/site";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface ContactFormProps {
  property: PropertyType;
}

export const ContactForm = ({ property }: ContactFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { currentTarget } = e;

    const resetable = currentTarget;

    const formData = new FormData(currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      property,
    };
    console.log(data);

    if (!data.firstName || !data.lastName || !data.email || !data.phone) {
      toast.error("Veuillez remplir tous les champs");
      return;
    }
    setIsLoading(true);

    try {
      const res = await axios.post("/api/contact", data);

      if (res.data.success) {
        resetable.reset();
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error: any) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Erreur lors de l'envoi du message"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const defaultMessage = property
    ? `Je suis intéressé(e) par la propriété: ${property.metadata.title}`
    : "";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {contact.form.fields.map((field, index) => (
        <div key={index} className="space-y-2">
          <Label htmlFor={field.name}>{field.label}</Label>
          {field.type === "textarea" ? (
            <Textarea
              id={field.name}
              name={field.name}
              className="w-full h-24"
              defaultValue={field.name === "message" ? defaultMessage : ""}
              disabled={isLoading}
            />
          ) : (
            <Input
              type={field.type}
              id={field.name}
              name={field.name}
              className="w-full"
              disabled={isLoading}
            />
          )}
        </div>
      ))}
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          contact.form.submitLabel
        )}
      </Button>
    </form>
  );
};
