export function Footer() {
    return (
        <footer className="py-12 border-t border-border">
            <div className="max-w-6xl mx-auto px-6">
                {/* Main footer content container */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        {/* Company logo with gradient background */}
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                            <span className="text-primary-foreground font-serif font-bold text-sm">S</span>
                        </div>
                        <span className="font-serif text-foreground">Seiring Technology</span>
                    </div>

                    {/* Copyright */}
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <span>© 2025 PT Seiring Technology</span>
                        <span>—</span>
                        <span>
                            Crafted with Clarity & Heart
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}