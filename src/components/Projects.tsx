import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";

const projects = [
  {
    title: "Vastr",
    description:
      "AI-powered fashion aggregation platform with hybrid search and recommendation system.",
    tech: ["FastAPI", "React", "PostgreSQL"],
    github: "https://github.com/minalkashif1",
  },

  {
    title: "Security Vault",
    description:
      "Secure document management system with authentication and encryption.",
    tech: ["Java", "Spring Boot", "SQL Server"],
    github: "https://github.com/laibakhan11/SecurityVaultProject",
  },

  {
    title: "Football Analytics",
    description:
      "Machine Learning project for predicting football player performance.",
    tech: ["Python", "Pandas", "Scikit-Learn"],
    github: "https://github.com/minalkashif1",
  },

  {
    title: "Portfolio Website",
    description:
      "Responsive portfolio built with React and TypeScript.",
    tech: ["React", "TypeScript", "CSS"],
    github: "https://github.com/minalkashif1",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">

      <h2>My Projects</h2>

      <div className="projects-grid">

        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tech={project.tech}
            github={project.github}
          />
        ))}

      </div>

    </section>
  );
}

export default Projects;