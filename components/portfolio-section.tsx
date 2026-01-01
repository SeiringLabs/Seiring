import { ExternalLink, Github } from "lucide-react";

// Portfolio projects data
const projects = [
    {
        name: "KeluhKesahNgampus.id",
        description:
            "Diary digital yang aman untuk semua keluh kesah, keresahan, dan drama dunia ngampus.",
        tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
        category: "Web Application",
    },
];

export function PortfolioSection() {
    return (
        <section id="portfolio" className="py-24 md:py-32 bg-card/30">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-px bg-blue-pastel" />
                    <span className="text-blue-pastel text-sm tracking-widest uppercase">Portfolio</span>
                </div>

                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-10 md:mb-16 max-w-xl">
                    Proyek yang telah kami <span className="text-blue-pastel">wujudkan</span>
                </h2>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={project.name}
                            className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-500"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            {/* Category Badge */}
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs mb-4">
                                {project.category}
                            </div>

                            <h3 className="font-serif text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                                {project.name}
                            </h3>

                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Hover Icon */}
                            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ExternalLink className="w-4 h-4 text-primary" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More */}
                <div className="mt-12 text-center">
                    <a
                        href="https://github.com/RozhakDev"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                        <Github className="w-4 h-4" />
                        <span>Lihat lebih banyak di GitHub</span>
                    </a>
                </div>
            </div>
        </section>
    )
}