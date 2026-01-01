import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.seiring.xyz";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
    ];
}