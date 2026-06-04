"use client";

import { useState } from "react";
import type { ProjectFilter } from "@/data/projects";
import FeaturedProjects from "./FeaturedProjects";
import ProjectMap from "./ProjectMap";

export default function ProjectsExplorer() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");

  return (
    <>
      <ProjectMap
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      <FeaturedProjects activeFilter={activeFilter} />
    </>
  );
}
