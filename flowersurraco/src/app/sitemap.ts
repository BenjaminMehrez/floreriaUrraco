import { MetadataRoute } from "next";
import { bestFlowers } from "../data/flowers";

export default async function sitemap() {
  const flowers = bestFlowers.map(flower => ({
    url: `${process.env.URL}/${flower.id}`,
    lastModified: new Date(),
  }))

  return [
    {
      url: `${process.env.URL}`,
      lastModified: new Date(),
    },
    ...flowers
  ]
}