import type { MouseEvent } from "react";
import "../styles/ProjectCard.css";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
}

function ProjectCard({
  title,
  description,
  tech,
  github,
}: ProjectCardProps) {
  const handleGithubClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    console.log(`Project ${title} GitHub link clicked`);
  };

  return (
    <div className="project-card">
      <h3>{title}</h3>

      <p>{description}</p>

      <div className="tech-stack">
        {tech.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>

      <a href={github} target="_blank" rel="noreferrer" onClick={handleGithubClick}>
        View Project →
      </a>
    </div>
  );
}

export default ProjectCard;