import { Quote } from "lucide-react";

export function AboutSection() {
    return (
        <section id="about" className="py-24 md:py-32">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-px bg-primary" />
                    <span className="text-primary text-sm tracking-widest uppercase">About Us</span>
                </div>

                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 max-w-2xl">
                    Tentang Seiring
                </h2>

                <div className="grid md:grid-cols-5 gap-12 lg:gap-20">
                    {/* Left Column: Introduction */}
                    <div className="md:col-span-3 space-y-6 text-muted-foreground leading-relaxed">
                        <p>
                            <b>Seiring</b> berarti berjalan selaras, berdampingan dalam proses, dan tumbuh dengan ritme yang sama. Bagi kami, perjalanan bukan tentang siapa yang paling cepat atau paling unggul, melainkan tentang menjaga arah, niat, dan ketenangan saat melangkah.
                        </p>
                        <p>
                            <b>PT Seiring Technology</b> lahir dari keyakinan bahwa teknologi seharusnya dibangun dengan kerendahan hati. Kami hadir sebagai ruang untuk belajar bersama, bertumbuh secara jujur, dan menyelesaikan masalah dengan kejernihan pikiran serta hati yang tenang.
                        </p>
                    </div>

                    {/* Right Column: Vision & Mission */}
                    <div className="md:col-span-2 space-y-8">
                        <div>
                            <h3 className="font-serif text-2xl text-foreground mb-4">Visi</h3>
                            <p className="text-muted-foreground leading-relaxed italic">
                                Membangun solusi teknologi digital yang inovatif, bersih, dan profesional — diciptakan dari kejujuran,
                                ketulusan, serta hati yang tenang.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-serif text-2xl text-foreground mb-4">Misi</h3>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                    <span>Membangun aplikasi sederhana & teknologi yang terus berkembang.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                    <span>Menyediakan layanan digital terjangkau untuk UMKM.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                    <span>Menciptakan ruang untuk kolaborasi dan belajar teknologi.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Final Quote */}
                <div className="mt-16 md:mt-20 max-w-3xl mx-auto text-center">
                    <Quote className="w-8 h-8 text-primary/30 mx-auto mb-4" />
                    <p className="text-muted-foreground leading-relaxed text-lg italic">
                        "Teknologi yang kami bangun berangkat dari kolaborasi, belajar bersama, dan proses yang dijalani dengan tenang."
                    </p>
                </div>
            </div>
        </section>
    )
}