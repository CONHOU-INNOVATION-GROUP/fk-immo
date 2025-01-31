import { Button } from "@/components/ui/button";
import { usePropertiesParams } from "@/hooks/use-properties-params";
import { useTransition } from "react";

export const Pagination = () => {
  const { page, setPage, totalPages } = usePropertiesParams();
  const [isPending, startTransition] = useTransition();

  const handlePageChange = (newPage: number) => {
    startTransition(() => {
      setPage(newPage);
      // Scroll to top of the properties section
      document
        .getElementById("properties")
        ?.scrollIntoView({ behavior: "smooth" });
    });
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      <Button
        variant="outline"
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1 || isPending}
        className={isPending ? "opacity-50" : ""}
      >
        Précédent
      </Button>

      <div className="flex gap-2">
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          // Show first page, last page, current page, and pages around current page
          if (
            pageNumber === 1 ||
            pageNumber === totalPages ||
            (pageNumber >= page - 1 && pageNumber <= page + 1)
          ) {
            return (
              <Button
                key={pageNumber}
                variant={page === pageNumber ? "default" : "outline"}
                onClick={() => handlePageChange(pageNumber)}
                disabled={isPending}
                className={isPending ? "opacity-50" : ""}
              >
                {pageNumber}
              </Button>
            );
          } else if (pageNumber === page - 2 || pageNumber === page + 2) {
            return (
              <span key={pageNumber} className="px-2">
                ...
              </span>
            );
          }
          return null;
        })}
      </div>

      <Button
        variant="outline"
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages || isPending}
        className={isPending ? "opacity-50" : ""}
      >
        Suivant
      </Button>
    </div>
  );
};
