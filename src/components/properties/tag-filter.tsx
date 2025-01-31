import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { usePropertiesParams } from "@/hooks/use-properties-params";
import { getProperties } from "@/lib/properties";
import { useTransition } from "react";

export const TagFilter = () => {
  const properties = getProperties(["src", "app", "properties", "contents"]);
  const { selectedTag, setSelectedTag } = usePropertiesParams();
  const [isPending, startTransition] = useTransition();

  return (
    <div className="space-y-2">
      <Label>Type de propriété</Label>
      <div className="flex gap-2">
        <Button
          variant={selectedTag === "" ? "default" : "outline"}
          onClick={() => {
            startTransition(() => {
              setSelectedTag("");
            });
          }}
          className={`text-sm ${isPending ? "opacity-50" : ""}`}
        >
          Tous
        </Button>
        {Array.from(new Set(properties.map((p) => p.metadata.tag))).map(
          (tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              onClick={() => {
                startTransition(() => {
                  setSelectedTag(tag);
                });
              }}
              className={`text-sm ${isPending ? "opacity-50" : ""}`}
            >
              {tag}
            </Button>
          )
        )}
      </div>
    </div>
  );
};
