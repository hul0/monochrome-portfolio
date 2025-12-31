import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import projectsData from '../../data/projects.json';
import { ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'Projects | Portfolio',
  description: 'A showcase of my recent work in Web Development, Mobile Apps, and Cybersecurity.',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-transparent text-foreground pb-20">
        <div className="text-center space-y-4 pt-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            My Projects
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of my work, ranging from web applications to security tools.
          </p>
        </div>

      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className="group relative border border-border/50 rounded-xl bg-card/30 backdrop-blur-md overflow-hidden hover:border-primary/50 transition-colors"
            >
              <div className="aspect-video relative bg-muted/50">
                 <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-muted/20">
                    <span className="text-sm">Image Preview</span>
                 </div>
                 {/* Uncomment below when you have real images */}
                 {/* <Image 
                   src={project.image} 
                   alt={project.title} 
                   fill 
                   className="object-cover transition-transform duration-300 group-hover:scale-105"
                 /> */}
              </div>
              
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <a 
                      href={project.link} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </a>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}