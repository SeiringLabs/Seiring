import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
})

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
})

export const metadata: Metadata = {
    title: "PT Seiring Technology | Full-Stack & Machine Learning Studio",
    description:
        "PT Seiring Technology is a learning-driven technology studio specializing in full-stack development, backend systems, machine learning, and automation engineering.",
    openGraph: {
        title: "PT Seiring Technology",
        description:
            "Full-Stack & Machine Learning Technology Studio from Indonesia",
        url: "https://www.seiring.xyz",
        siteName: "PT Seiring Technology",
        locale: "en_US",
        type: "website",
        generator: 'v0.app'
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="id" className="scroll-smooth">
        <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
            {children}
            <Analytics />
        </body>
        </html>
    )
}
