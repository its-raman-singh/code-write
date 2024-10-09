import React from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

function Projects() {
  return (
    <div> 

      {/* Full Stack Projects Section || json file is in componets>json>data! */}
      <div>
        <h2 className="text-2xl font-bold mb-2 text-green-600 mt-1">Full Stack Projects</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Fullstack.map((project,index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              liveLink={project.liveLink}
            />
          ))}
        </div>
      </div>

{/* Frontend Projects Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-green-600 mt-4">Frontend Projects</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Frontend.map((project,index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              liveLink={project.liveLink}
            />
          ))}
        </div>
      </div>

    </div>



  );
}

export default Projects;

function ProjectCard({ title, description, image, tags, liveLink }) {

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden bg-opacity-30 backdrop-blur-full">
     
      <div className="p-3">
        <h3 className="text-md font-semibold mb-1">{title}</h3>
        <p className="text-gray-400 text-xs mb-2">{description}</p>
        <div className="flex flex-wrap gap-1 mb-2">
          {tags.map((tag, index) => (
            <span key={index} className="bg-gray-800 text-xs px-1.5 py-0.5 rounded">{tag}</span>
          ))}
        </div>
        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-sm flex items-center">
          Live <ExternalLink className="w-3 h-3 ml-1" />
        </a>
      </div>
    </div>
  );
}
