import { Heart, Sparkles, Lightbulb, Layers, Flower2 } from "lucide-react";

// Core philosophy data with icons and descriptions
const philosophies = [
    { name: "Honesty", icon: Heart, description: "Kejujuran dalam setiap interaksi" },
    { name: "Purity in Code", icon: Sparkles, description: "Kemurnian dalam setiap baris kode" },
    { name: "Meaningful Technology", icon: Lightbulb, description: "Teknologi yang bermakna" },
    { name: "Calm & Clean Architecture", icon: Layers, description: "Arsitektur yang tenang dan bersih" },
    { name: "Romance-inspired Minimalism", icon: Flower2, description: "Minimalisme terinspirasi romansa" },
];

export function PhilosophySection() {
    return (
        <section id="philosophy" className="py-24 md:py-32 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

            <div className="relative max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-px bg-accent" />
                    <span className="text-accent text-sm tracking-widest uppercase">Core Philosophy</span>
                </div>

                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 max-w-xl">
                    Nilai-nilai yang menjadi <span className="text-accent">fondasi</span> kami
                </h2>

                {/* Philosophy Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
                    {philosophies.map((item, index) => (
                        <div
                            key={item.name}
                            className="group text-center p-6 rounded-2xl border border-border/50 hover:border-primary/30 bg-card/30 backdrop-blur-sm transition-all duration-500"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h4 className="font-medium text-foreground text-sm mb-2">{item.name}</h4>
                            <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Philosophy Description */}
                <div className="max-w-3xl mx-auto text-center">
                    <div className="relative inline-block">
                        {/* Background gradient effect */}
                        <div className="absolute -inset-6 bg-gradient-to-r from-primary/10 via-accent/10 to-blue-pastel/10 rounded-3xl blur-2xl" />
                        {/* Main description container with glassmorphism effect */}
                        <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-10">
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Filosofi ini terinspirasi dari proyek personal pendiri —
                                <span className="text-primary font-medium"> Bidadariku.love</span>, sebuah ruang teks sakral yang berisi
                                perjalanan hati dan dibuat dengan ketulusan penuh.
                            </p>
                            <div className="flex items-center justify-center gap-3">
                                <Heart className="w-4 h-4 text-accent" />
                                <span className="text-foreground/80 text-sm italic">Dibuat dari hati, untuk hati</span>
                                <Heart className="w-4 h-4 text-accent" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}