"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, User } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Glow Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-pastel/10 rounded-full blur-3xl" />
            </div>

            {/* Halo Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] border border-primary/20 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[550px] md:h-[550px] border border-accent/15 rounded-full" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                {/* Company Name */}
                <h1 className="font-serif text-3xl md:text-6xl lg:text-7xl font-light text-foreground mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
                    PT Seiring <span className="text-primary">Technology</span>
                </h1>

                {/* Tagline */}
                <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light italic animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                    &ldquo;Teknologi yang dibangun secara jujur, jernih, dan selaras dalam proses.&rdquo;
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                    <Button
                        asChild
                        className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-sm tracking-wide"
                    >
                        <a href="#services">
                            Explore Services
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        className="border-primary/50 text-foreground hover:bg-primary/10 px-8 py-6 text-sm tracking-wide bg-transparent"
                    >
                        <a href="#founder">
                            <User className="mr-2 h-4 w-4" />
                            Profile of the Founder
                        </a>
                    </Button>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    {/* Animated scroll indicator */}
                    <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
                        <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
                    </div>
                </div>
            </div>
        </section>
    )
}