"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePropertiesParams } from "@/hooks/use-properties-params";
import { PropertyType } from "@/types/site";

export const SearchFilter = ({
  properties,
}: {
  properties: PropertyType[];
}) => {
  const { searchTerm, setSearchTerm } = usePropertiesParams({ properties });

  return (
    <div className="max-w-md w-full">
      <Label htmlFor="search">Rechercher</Label>
      <Input
        id="search"
        type="text"
        placeholder="Rechercher une propriété..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        className={`mt-1`}
      />
    </div>
  );
};
