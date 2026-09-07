import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NytKode — Operational Software",
    short_name: "NytKode",
    description: "Systems that generate more revenue in less time. Custom operational software and automation workflows.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/nytkode.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
