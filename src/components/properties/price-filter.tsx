import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePropertiesParams } from "@/hooks/use-properties-params";
import { useTransition } from "react";

export const PriceFilter = () => {
  const { minPrice, maxPrice, setMinPrice, setMaxPrice } =
    usePropertiesParams();
  const [isPending, startTransition] = useTransition();

  return (
    <div className="space-y-2">
      <Label>Prix (FCFA)</Label>
      <div className="flex items-center gap-2">
        <Input
          type="number"
          value={minPrice || ""}
          onChange={(e) => {
            startTransition(() => {
              setMinPrice(Number(e.target.value));
            });
          }}
          className={`w-32 ${isPending ? "opacity-50" : ""}`}
          placeholder="Min"
          min="0"
        />
        <span>-</span>
        <Input
          type="number"
          value={maxPrice || ""}
          onChange={(e) => {
            startTransition(() => {
              setMaxPrice(Number(e.target.value));
            });
          }}
          className={`w-32 ${isPending ? "opacity-50" : ""}`}
          placeholder="Max"
          min="0"
        />
      </div>
    </div>
  );
};
