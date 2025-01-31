"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePropertiesParams } from "@/hooks/use-properties-params";
import { PropertyType } from "@/types/site";
import { useTransition } from "react";

export const SearchFilter = ({
  properties,
}: {
  properties: PropertyType[];
}) => {
  const { searchTerm, setSearchTerm } = usePropertiesParams({ properties });
  const [isPending, startTransition] = useTransition();

  return (
    <div className="max-w-md w-full">
      <Label htmlFor="search">Rechercher</Label>
      <Input
        id="search"
        type="text"
        placeholder="Rechercher une propriété..."
        value={searchTerm}
        onChange={(e) => {
          startTransition(() => {
            setSearchTerm(e.target.value);
          });
        }}
        className={`mt-1 ${isPending ? "opacity-50" : ""}`}
      />
    </div>
  );
};
