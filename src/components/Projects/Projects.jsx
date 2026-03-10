import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../../data/projects";

export default function Projects() {
  return (
    <section>
      {PROJECTS.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </section>
  );
}
