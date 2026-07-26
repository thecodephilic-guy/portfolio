"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { ProjectInterface } from "@/config/projects";

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: cardRef });

  const handleMouseEnter = contextSafe(() => {
    gsap.to(cardRef.current, {
      y: -8,
      scale: 1.02,
      duration: 0.4,
      ease: "power3.out",
      boxShadow: "0 20px 40px -10px rgba(0,0,0,0.2)",
      overwrite: "auto",
    });
  });

  const handleMouseLeave = contextSafe(() => {
    gsap.to(cardRef.current, {
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: "elastic.out(1, 0.7)", // Springy bounce back
      clearProps: "boxShadow", 
      overwrite: "auto",
    });
  });

  return (
    <div 
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative p-6 w-full bg-background/40 backdrop-blur-xl border border-border/50 rounded-lg h-full flex flex-col shadow-lg transition-colors duration-300 hover:bg-background/60"
    >
      <div className="relative w-full h-[200px] flex-shrink-0">
        <Image
          className="rounded-lg border border-border object-cover"
          src={project.companyLogoImg}
          alt="img"
          fill
        />
      </div>
      <div className="pt-5 space-y-3 flex flex-col flex-grow">
        <h5 className="text-2xl font-bold tracking-tight text-foreground">
          {project.companyName}
        </h5>
        <p className="line-clamp-3 font-normal text-muted-foreground flex-grow">
          {project.shortDescription}
        </p>
        <div className="flex gap-2 flex-wrap">
          <ChipContainer textArr={project.category} />
        </div>
        <Link href={`/projects/${project.id}`} className="mt-auto">
          <Button variant={"default"} className="mt-2 w-full sm:w-auto text-foreground font-semibold">
            Read more
            <Icons.chevronRight className="w-4 ml-1" />
          </Button>
        </Link>
      </div>
      <div className="absolute bottom-4 right-4 p-3 rounded-full bg-background/40 backdrop-blur-md border border-border/50 hidden md:block">
        {project.type === "Personal" ? (
          <Icons.userFill className="h-4 w-4" />
        ) : (
          <Icons.work className="h-4 w-4" />
        )}
      </div>
    </div>
  );
}
