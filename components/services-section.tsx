import { Code2, Database, Brain, Shield, Smartphone, Globe, Bot, Lock } from "lucide-react";

// Services data with categories and items
const services = [
    {
        category: "Digital Solutions",
        icon: Code2,
        color: "primary",
        items: [
            { name: "Full-stack Website Development", icon: Globe },
            { name: "Backend API Development", icon: Database },
            { name: "Machine Learning Services", icon: Brain },
            { name: "Web/Data Scraping & Automation", icon: Bot },
        ],
    },
    {
        category: "UMKM Technology",
        icon: Smartphone,
        color: "accent",
        items: [
            { name: "Mini Website / Business Landing Page", icon: Globe },
            { name: "Basic Management System for Small Businesses", icon: Database },
        ],
    },
    {
        category: "Cybersecurity",
        icon: Shield,
        color: "blue-pastel",
        items: [
            { name: "App Security Hardening", icon: Lock },
            { name: "Vulnerability Analysis", icon: Shield },
        ],
    },
];

export function ServicesSection() {
    return (
        <section id="services" className="py-24 md:py-32 bg-card/30">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-px bg-primary" />
                    <span className="text-primary text-sm tracking-widest uppercase">Services</span>
                </div>

                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-16 max-w-xl">
                    Solusi digital yang kami hadirkan dengan <span className="text-primary">ketulusan</span>
                </h2>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.category}
                            className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-500"
                        >
                            {/* Glow Effect */}
                            <div
                                className={`absolute inset-0 bg-${service.color}/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                            />

                            <div className="relative">
                                {/* Service category icon */}
                                <div className={`w-12 h-12 rounded-xl bg-${service.color}/10 flex items-center justify-center mb-6`}>
                                    <service.icon className={`w-6 h-6 text-${service.color}`} />
                                </div>

                                <h3 className="font-serif text-lg md:text-xl text-foreground mb-6">{service.category}</h3>

                                {/* Service items list */}
                                <ul className="space-y-4">
                                    {service.items.map((item) => (
                                        <li key={item.name} className="flex items-start gap-3 text-muted-foreground text-sm">
                                            <item.icon className="w-4 h-4 mt-0.5 shrink-0 text-muted-foreground/50" />
                                            <span>{item.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Coming Soon */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-3 bg-card/50 border border-border rounded-full px-6 py-3">
                        <Smartphone className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground text-sm">
                            <span className="text-primary">Coming Soon:</span> Android Development
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
