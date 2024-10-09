import React from "react";

const workExperienceData = [
  {
    startDate: "May 2024",
    endDate: "August 2024",
    companyName: "GSSoC",
    jobTitle: "Program Manager",
    description: [
      "Strategic Coordination: Lead planning efforts, aligning timelines and goals with stakeholders.",
      "Team Leadership: Guide contributors, fostering collaboration and providing support.",
      "Quality Assurance: Ensure documentation meets standards, iterating for improvement"
    ],
  },
  {
    startDate: "July 2023",
    endDate: "April 2024",
    companyName: "Google",
    jobTitle: "Club President",
    description: [
      "Facilitate event organization and coordination among student leaders.",
      "Foster an inclusive and engaged community within GDSC chapters.",
      "Support skills development through workshops and networking opportunities",
    ],
  },
];

const WorkExperience = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <h1 className="text-2xl font-bold mb-2 text-green-600 mt-1">Work Experience</h1>

      <ol className="relative border-l border-gray-200">
        {workExperienceData.map((item, index) => (
          <li
            key={index}
            className={`mb-12 pl-8 ${
              index === workExperienceData.length - 1 ? "mb-0" : ""
            }`}
          >
            <div className="absolute w-4 h-4 bg-gray-200 rounded-full -left-2 border border-white"></div>
            <time className="mb-2 text-lg font-medium text-gray-600 dark:text-gray-400">
              {item.startDate} - {item.endDate || "Present"}
            </time>
            <h3 className="text-xl font-semibold text-green-600">
              {item.jobTitle} at {item.companyName}
            </h3>
            <div className="mb-4 text-base text-white-700 dark:text-gray-400">
              <ul className="list-disc ml-6 space-y-2">
                {item.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
            {item.companyLink && (
              <a
                href={item.companyLink}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Learn more{" "}
                <svg
                  className="w-4 h-4 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default WorkExperience;
