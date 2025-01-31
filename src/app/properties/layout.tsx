import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Nos propriétés",
    description: "Trouvez la propriété de vos rêves",
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
