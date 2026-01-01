import { Code2, Brain, Shield, Globe, Award, Clock } from "lucide-react";

// Founder's technical skills data
const skills = [
    { name: "Backend Development", icon: Code2, level: 95 },
    { name: "Machine Learning", icon: Brain, level: 90 },
    { name: "Cybersecurity", icon: Shield, level: 60 },
    { name: "Full-stack Web Dev", icon: Globe, level: 92 },
];

// Founder's achievements and highlights
const highlights = [
  { icon: Clock, text: "200+ hours of structured Machine Learning & Deep Learning training" },
  { icon: Brain, text: "Hands-on experience in ML pipelines, model training, and evaluation" },
  { icon: Award, text: "Multiple academic & personal project deliveries" },
];

export function FounderProfileSection() {
    return (
        <section id="founder" className="py-24 md:py-32 bg-card/30">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-10 md:mb-16">
                    <div className="w-16 h-px bg-accent" />
                    <span className="text-accent text-sm tracking-widest uppercase">Founder Profile</span>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
                    {/* Profile Info */}
                    <div>
                        {/* Founder's profile header with name and title */}
                        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-6 mb-8">
                            {/* Founder's profile image with gradient border */}
                            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-primary via-accent to-blue-pastel p-1 flex-shrink-0">
                                <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                                    <span className="font-serif text-3xl text-primary">R</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-serif text-2xl sm:text-3xl text-foreground">Rozhak</h3>
                                <p className="text-primary text-base sm:text-lg">CEO & Lead Developer</p>
                            </div>
                        </div>

                        {/* Founder's introduction */}
                        <p className="text-muted-foreground leading-relaxed mb-8">
                            Seorang developer dengan passion mendalam dalam menciptakan solusi teknologi yang bermakna. Dengan latar
                            belakang kuat di backend development, machine learning, dan cybersecurity, setiap proyek dibangun dengan
                            standar kualitas tinggi dan ketulusan penuh.
                        </p>

                        {/* Highlights */}
                        <div className="space-y-4">
                            {highlights.map((item) => (
                                <div key={item.text} className="flex items-center gap-4">
                                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <item.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="text-foreground text-sm">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="space-y-6">
                        <h4 className="font-serif text-lg md:text-xl text-foreground mb-6">Technical Expertise</h4>

                        {skills.map((skill) => (
                            <div key={skill.name} className="group">
                                <div className="flex items-center gap-4">
                                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <skill.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div className="w-full">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-foreground text-sm">{skill.name}</span>
                                            <span className="text-muted-foreground text-sm">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                                                style={{ width: `${skill.level}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}