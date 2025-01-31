import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { usePropertiesParams } from "@/hooks/use-properties-params";
import { getProperties } from "@/lib/properties";
import { useTransition } from "react";

export const FeaturesFilter = () => {
  const properties = getProperties(["src", "app", "properties", "contents"]);
  const { selectedFeatures, setSelectedFeatures } = usePropertiesParams();
  const [isPending, startTransition] = useTransition();

  const toggleFeature = (feature: string) => {
    startTransition(() => {
      if (selectedFeatures.includes(feature)) {
        setSelectedFeatures(selectedFeatures.filter((f) => f !== feature));
      } else {
        setSelectedFeatures([...selectedFeatures, feature]);
      }
    });
  };

  return (
    <div className="space-y-2" id="features">
      <Label>Caractéristiques</Label>
      <div className="flex flex-wrap gap-2">
        {Array.from(
          new Set(properties.flatMap((p) => p.metadata?.features || []))
        ).map((feature) => (
          <Button
            key={feature}
            variant={selectedFeatures.includes(feature) ? "default" : "outline"}
            onClick={() => toggleFeature(feature)}
            className={`text-sm ${isPending ? "opacity-50" : ""}`}
          >
            {feature}
          </Button>
        ))}
      </div>
    </div>
  );
};
