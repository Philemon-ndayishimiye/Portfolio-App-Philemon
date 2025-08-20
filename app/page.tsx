"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Database, Palette, Globe } from "lucide-react"
import Chatbot from "@/components/chatbot"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-serif font-bold text-xl">Philemon Ndayishimiye</div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">
              About
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-accent transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-sm font-medium hover:text-accent transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-8 flex items-center justify-center overflow-hidden">
            <img
              src="/images/philemon-profile.png"
              alt="Philemon Ndayishimiye"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h1 className="font-serif font-black text-4xl md:text-6xl mb-6">Senior Frontend Developer</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Passionate about creating seamless user experiences with modern JavaScript frameworks like React, Vue, and
            Angular. Building responsive, high-performance web applications with clean, maintainable code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/Philemon-ndayishimiye" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">
                I'm a Senior Frontend Developer with extensive experience in building responsive, high-performance web
                applications. My journey includes impactful roles at Risemotive Ltd, Ishyiga, and Solvit, where I've
                honed my skills in modern web technologies.
              </p>
              <p className="text-lg mb-6">
                I specialize in React, Vue, and Angular, with a passion for creating seamless user experiences and
                implementing best practices in frontend architecture. I thrive in collaborative environments and enjoy
                tackling complex technical challenges.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  Kigali, Rwanda
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="h-4 w-4" />
                  0785436374
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <div className="font-medium">Bachelor of Information Systems</div>
                      <div className="text-sm text-muted-foreground">University of Rwanda • 2020-2023</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="font-medium">Frontend Developer Intern</div>
                      <div className="text-sm text-muted-foreground">Solvit • 2024-2025</div>
                    </div>
                    <div>
                      <div className="font-medium">Java Development Intern</div>
                      <div className="text-sm text-muted-foreground">Ishyiga • 2022-2023</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* E-Commerce Platform - Featured */}
            <Card className="md:col-span-2 lg:col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Featured</Badge>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" asChild>
                      <a href="https://dynasoft.render.com" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href="https://github.com/Philemon-ndayishimiye" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-xl">E-Commerce Platform (Dynasoft)</CardTitle>
                <CardDescription>
                  Comprehensive e-commerce solution with modern design and scalable architecture
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/ecommerce-platform.png"
                    alt="E-commerce platform screenshot"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                  <Badge variant="outline">Stripe</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Built a full-stack e-commerce platform with user authentication, payment processing, inventory
                  management, and responsive design. Features include shopping cart, order tracking, and admin
                  dashboard.
                </p>
              </CardContent>
            </Card>

            {/* Calculator App */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Calculator App</CardTitle>
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href="https://github.com/Philemon-ndayishimiye/Calculator-reducer.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <CardDescription>React-based calculator with reducer pattern</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/calculator-app.png"
                    alt="Calculator app"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">useReducer</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Academic project demonstrating React hooks and state management patterns.
                </p>
              </CardContent>
            </Card>

            {/* To-Do App */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">To-Do App</CardTitle>
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href="https://github.com/Philemon-ndayishimiye/Todo-React-App.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <CardDescription>Task management with React</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img src="/images/todo-app.png" alt="Todo app" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Local Storage</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Interactive task management application with CRUD operations.
                </p>
              </CardContent>
            </Card>

            {/* Task Manager */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Task Manager App</CardTitle>
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href="https://github.com/Philemon-ndayishimiye/Task-Management.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <CardDescription>Advanced project management tool</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/task-manager.png"
                    alt="Task manager app"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Context API</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Comprehensive task management with categories and priority levels.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-12 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Code className="h-12 w-12 mx-auto text-accent mb-4" />
                <CardTitle className="text-lg">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Vue.js</Badge>
                  <Badge variant="secondary">Angular</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Palette className="h-12 w-12 mx-auto text-accent mb-4" />
                <CardTitle className="text-lg">UI/UX</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">CSS3</Badge>
                  <Badge variant="secondary">Responsive Design</Badge>
                  <Badge variant="secondary">Figma</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Database className="h-12 w-12 mx-auto text-accent mb-4" />
                <CardTitle className="text-lg">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Java</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">SQL</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Globe className="h-12 w-12 mx-auto text-accent mb-4" />
                <CardTitle className="text-lg">Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">GitHub</Badge>
                  <Badge variant="secondary">VS Code</Badge>
                  <Badge variant="secondary">UML</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="font-serif font-bold text-3xl md:text-4xl mb-8">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-12">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas
            to life.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <Card className="p-6">
              <Mail className="h-8 w-8 mx-auto text-accent mb-4" />
              <div className="font-medium">Email</div>
              <div className="text-sm text-muted-foreground">philemonndayi@gmail.com</div>
            </Card>
            <Card className="p-6">
              <Phone className="h-8 w-8 mx-auto text-accent mb-4" />
              <div className="font-medium">Phone</div>
              <div className="text-sm text-muted-foreground">0785436374</div>
            </Card>
            <Card className="p-6">
              <MapPin className="h-8 w-8 mx-auto text-accent mb-4" />
              <div className="font-medium">Location</div>
              <div className="text-sm text-muted-foreground">Kigali, Rwanda</div>
            </Card>
          </div>

          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
              <a href="mailto:philemonndayi@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/Philemon-ndayishimiye" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub Profile
              </a>
            </Button>
            <Button variant="outline" size="lg">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="container max-w-4xl mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Philemon Ndayishimiye. All rights reserved.</p>
        </div>
      </footer>

      <Chatbot />
    </div>
  )
}
