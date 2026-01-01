import type { MetadataRoute } from "next";

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.seiring.xyz";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
    ];
}