import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <div className="space-y-2">
            <p className="text-muted-foreground">© 2024 Portfolio. All rights reserved.</p>
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
