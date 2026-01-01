import { Quote } from "lucide-react";

export function FounderMessageSection() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            {/* Soft Glow Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-4xl mx-auto px-6">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-16 justify-center">
                    <div className="w-16 h-px bg-primary" />
                    <span className="text-primary text-sm tracking-widest uppercase">Founder Message</span>
                    <div className="w-16 h-px bg-primary" />
                </div>

                {/* Quote Card */}
                <div className="relative">
                    {/* Background gradient effect */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/10 to-blue-pastel/20 rounded-3xl blur-2xl" />

                    {/* Main quote card container with glassmorphism effect */}
                    <div className="relative bg-card/60 backdrop-blur-md border border-border rounded-3xl p-8 md:p-12">
                        <Quote className="w-12 h-12 text-primary/30 mb-6" />

                        {/* Founder's message */}
                        <blockquote className="font-serif text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-light">
                            &ldquo;Perusahaan ini saya bangun dari tempat paling pribadi dalam hidup saya—ruang di mana kejujuran,
                            ketenangan, dan rasa ingin menciptakan sesuatu yang bermakna tumbuh bersama. Setiap solusi yang kami
                            hadirkan bukan hanya tentang teknologi, tetapi tentang
                            <span className="text-primary"> ketulusan</span> dan <span className="text-accent">nilai</span> yang ingin
                            dibagikan kepada orang lain.&rdquo;
                        </blockquote>

                        {/* Founder identification */}
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                <span className="text-primary-foreground font-serif font-bold">R</span>
                            </div>
                            <div>
                                <p className="text-foreground font-medium">Rozhak</p>
                                <p className="text-muted-foreground text-sm">CEO & Lead Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}