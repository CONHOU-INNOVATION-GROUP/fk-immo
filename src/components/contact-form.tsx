"use client";

import { contact } from "@/lib/data";
import { PropertyType } from "@/types/site";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface ContactFormProps {
  property: PropertyType;
}

export const ContactForm = ({ property }: ContactFormProps) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      property,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      e.currentTarget.reset();
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
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
              rows={4}
              className="w-full"
              defaultValue={field.name === "message" ? defaultMessage : ""}
            />
          ) : (
            <Input
              type={field.type}
              id={field.name}
              name={field.name}
              className="w-full"
            />
          )}
        </div>
      ))}
      <Button type="submit" className="w-full bg-[#DC2626] hover:bg-red-700">
        {contact.form.submitLabel}
      </Button>
    </form>
  );
};
