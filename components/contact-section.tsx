import { Mail, MessageCircle, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
    return (
        <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

            <div className="relative max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-px bg-primary" />
                    <span className="text-primary text-sm tracking-widest uppercase">Contact</span>
                </div>

                {/* Main */}
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-16 max-w-xl">
                    Mari <span className="text-primary">terhubung</span> dengan kami
                </h2>

                {/* Contact options grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Email */}
                    <a
                        href="mailto:rozhakdev6@gmail.com"
                        className="group bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-500"
                    >
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-serif text-lg text-foreground mb-2">Email</h3>
                        <p className="text-muted-foreground text-sm">rozhakdev6@gmail.com</p>
                    </a>

                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/6283847921480"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-accent/50 transition-all duration-500"
                    >
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <MessageCircle className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="font-serif text-lg text-foreground mb-2">WhatsApp</h3>
                        <p className="text-muted-foreground text-sm">Chat langsung dengan kami</p>
                    </a>

                    {/* Location */}
                    <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-blue-pastel/10 flex items-center justify-center mb-6">
                            <MapPin className="w-6 h-6 text-blue-pastel" />
                        </div>
                        <h3 className="font-serif text-lg text-foreground mb-2">Lokasi</h3>
                        <p className="text-muted-foreground text-sm">Purbalingga, Jawa Tengah</p>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <Button
                        asChild
                        className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 px-8 py-5 md:px-10 md:py-6 text-sm tracking-wide"
                    >
                        <a href="mailto:rozhakdev6@gmail.com">
                            <Send className="mr-2 h-4 w-4" />
                            Kirim Pesan
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}