import { bestFlowers } from "@/src/data/flowers";
import FlowerDetail from "./page";
import { Metadata } from "next";

export async function generateMetadata({
  params: { flowerId },
}: {
  params: { flowerId: string };
}): Promise<Metadata> {
  const flower = bestFlowers.find((f) => f.id === Number(flowerId));

  return {
    title: flower?.name || "Flor",
    description: flower?.description || "Detalle de flor",
    openGraph: {
      images: [
        {
          url: flower?.image || "",
        },
      ],
    },
  };
}

interface FlowerLayoutProps {
  params: { flowerId: string };
}

export default function Layout({ params }: FlowerLayoutProps) {
  return (
    <div>
      <FlowerDetail flowerId={params.flowerId} />
    </div>
  );
}
