import React from "react";
import { ExternalLink } from 'lucide-react';

const projectsData = [
  {
    title: "Algo Visualizer",
    description:
      "Visualize Sorting Algorithms in real time built using NextJS, Typescript",
    link: "https://algo-visualizer-phi.vercel.app/",
    code: "https://github.com/Its-Aman-Yadav/Algo-Visualizer",
    previewVideo: "./videos/AlgoVis.mp4",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Net Code",
    description:
      "A NextJS'14 and Tailwind CSS based online code editor which supports downloading code",
    link: "https://net-code-ashen.vercel.app/",
    code: "https://github.com/Its-Aman-Yadav/Net-Code",
    previewVideo: "/videos/NetCode.mp4",
    technologies: ["NextJS", "Tailwind", "MongoDB"],
  },
  {
    title: "AI Assist",
    description:
      "ReactJS and Gemini API based project which answers to all your queries",
    link: "https://ai-assist.vercel.app/",
    code: "https://github.com/Its-Aman-Yadav/AI-Assist",
    previewVideo: "/videos/Assist.mp4",
    technologies: [
      "React", "Gemini API", "Tailwind"
    ],
  },
];

function frontend() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="text-2xl text-green-600 font-bold">Frontend Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col border rounded-md dark:border-gray-700"
          >
            <video
              src={project.previewVideo}
              autoPlay
              muted
              loop
              className="rounded-t-md"
            />
            <div className="flex flex-col gap-3 p-4 grow">
              <h2 className="text-lg font-bold">{project.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-[4px]">
                {project.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 text-xs px-1.5 py-0.5 rounded"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-auto">
               <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-sm flex items-center">
          Live <ExternalLink className="w-3 h-3 ml-1" />
        </a>
        <a href={project.code} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-sm flex items-center">
          Code <ExternalLink className="w-3 h-3 ml-1" />
        </a>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default frontend;
