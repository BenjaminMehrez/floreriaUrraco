import { bestFlowers } from "@/src/data/flowers"
import FlowerDetail from "./page";
import { Metadata } from "next"


export async function generateMetadata({
  params: { flowerId },
 }: { params: { flowerId: string } }) : Promise<Metadata> {
  const flower = bestFlowers.find(f => f.id === Number(flowerId))

  const metadata: Metadata = {
    title: flower?.name,
    description: flower?.description,
    openGraph: {
      images: [
        {
          url: flower?.image || '',
        }
      ]
    }
  };
  return metadata;
}

function layout() {
  return (
    <FlowerDetail />
  )
}

export default layout