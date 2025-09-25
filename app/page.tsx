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
        <div className="container flex h-16 items-center justify-between px-10">
          <div className="font-bold text-xl font-[Inter]">Philemon KOMVUGA NDAYISHIMIYE</div>
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
      <section className="py-20 px-4 bg-gradient-to-r from-[#ffffff] to-[#CFDCEA]">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-8 flex items-center justify-center overflow-hidden">
            <img
              src="/images/philemon-profile.png"
              alt="Philemon Ndayishimiye"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h1 className="font-[Inter]  font-black text-4xl md:text-6xl mb-6">Web Developer</h1>
          <p className=" font-[Inter] text-md md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Passionate about creating seamless user experiences with modern JavaScript frameworks like React,Using TypeScript . Building responsive, high-performance web applications with clean, maintainable code.
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
      <section id="about" className="py-20 px-4 bg-muted/30 bg-gradient-to-r from-[#ffffff] to-[#CFDCEA] ">
        <div className="container max-w-4xl mx-auto">
          <h2 className="font-[Inter] font-bold text-4xl md:text-4xl mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 ">
            <div>
              <p className="text-md  mb-6 font-[Inter]">
               I'm a Senior Frontend Developer with extensive experience in building responsive, high-performance web applications. Over the years, I’ve held impactful roles at Risemotive Ltd, Ishyiga, and Solvit, where I honed my expertise in modern frontend technologies and delivering exceptional user experiences.

              Alongside my frontend specialization, I am also a Junior Node.js Developer, actively expanding my backend skills to build scalable and efficient server-side applications. This full-stack perspective allows me to contribute across the development cycle and craft more robust, end-to-end solutions.
                 </p>
                       <p className="text-lg mb-6 font-[Inter]">
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
                  <CardTitle className="text-lg font-[Inter]">Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 font-[Inter]">
                    <div>
                      <div className="font-medium">Bachelor of Information Systems</div>
                      <div className="text-sm text-muted-foreground">University of Rwanda • 2022-2025</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 font-[Inter] ">
                    <div>
                      <div className="font-medium">Frontend Developer Intern</div>
                      <div className="text-sm text-muted-foreground">Solvit • july , 2025</div>
                    </div>
                    <div>
                      <div className="font-medium">Java Programming Intern</div>
                      <div className="text-sm text-muted-foreground">Ishyiga • April ,2025</div>
                    </div>

                     <div>
                      <div className="font-medium">Academic Internership</div>
                      <div className="text-sm text-muted-foreground">Dynasoft •january , 2025</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 font-[Inter] ">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-bold text-3xl md:text-4xl mb-12 text-center font-[Inter]">Featured Projects</h2>
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
                    src="/images/commerce.png"
                    alt="E-commerce platform screenshot"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Postgres</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                 During my academic internship, I contributed to building a full-stack e-commerce platform that featured user authentication, payment processing, inventory management, shopping cart, order tracking, and an admin dashboard. My primary focus was on the backend, where I implemented authentication, registration, and login functionalities, designed database models with Sequelize, and developed CRUD operations to manage core entities. This experience not only strengthened my skills in Node.js and relational databases but also gave me valuable hands-on exposure to collaborative, real-world application development.
                </p>
              </CardContent>
            </Card>

            {/* Calculator App */}

            {/* To-Do App */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Inzozi School</CardTitle>
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href="https://github.com/Solvit-Africa-Training-Center/InzoziSchool_Frontend"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <CardDescription>Full frontend with integration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img src="/images/inzozi.png" alt="Todo app" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Typescript</Badge>
                  <Badge variant="outline">Redux</Badge>
                  <Badge variant="outline">Storage Api</Badge>
                  <Badge variant="outline">Api Integration</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  During my internship at Solvit, I worked as a Frontend Developer on Inzozi School, a platform designed to strengthen communication between parents and schools while also supporting students who wish to transfer between schools. Within our group, I took full ownership of the student transfer feature, applying the skills I had developed both independently and under mentorship.
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
                  I developed a Task Manager application designed to help users efficiently organize and track their daily activities. The app allows users to create, update, and delete tasks, set priorities, and monitor progress in a clean, intuitive interface. On the frontend, I used React with Tailwind CSS to build reusable, responsive components, while managing state and data flow with Redux Toolkit. For backend integration, I implemented RESTful APIs to handle task operations and ensure smooth data persistence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-muted/30 bg-gradient-to-r from-[#ffffff] to-[#CFDCEA]">
        <div className="container max-w-4xl mx-auto">
          <h2 className=" font-bold text-3xl md:text-4xl mb-12 text-center font-[inter]">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Code className="h-12 w-12 mx-auto text-accent mb-4" />
                <CardTitle className="text-lg">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="secondary">React</Badge>
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
                  <Badge variant="secondary">Node.js && express</Badge>
                  <Badge variant="secondary">Postgres</Badge>
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
          <h2 className="font-[inter] font-bold text-3xl md:text-4xl mb-8">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-12 font-[inter]">
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
                <a href="https://www.linkedin.com/in/PhilemonKOMVUGANDAYISHIMIYE/" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
               
              </a>
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4 font-[inter]">
        <div className="container max-w-4xl mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Philemon Ndayishimiye. All rights reserved.</p>
        </div>
      </footer>

      <Chatbot />
    </div>
  )
}
