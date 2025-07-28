import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
} from "react-icons/fa";

import pythonLogo from "../assets/python.svg";
import djangoLogo from "../assets/django.svg";
import nodejsLogo from "../assets/node.svg";
import javacsriptLogo from "../assets/javascript.svg";
import mysqlLogo from "../assets/mysql.svg";
import postgresqlLogo from "../assets/postgresql.svg";
import dockerLogo from "../assets/docker.svg";
import githubLogo from "../assets/github.svg";
import gitLogo from "../assets/git.svg";
import expressLogo from "../assets/express.svg";
import reactLogo from "../assets/react.svg";
import tensorflowLogo from "../assets/tensorflow.svg";
import pytorchLogo from "../assets/pytorch.svg";

export default function About() {
  const technologies = [
    { name: "Python", logo: pythonLogo },
    { name: "JavaScript", logo: javacsriptLogo },
    { name: "Node.js", logo: nodejsLogo },
    { name: "Django", logo: djangoLogo },
    { name: "React.js", logo: reactLogo },
    { name: "Express.js", logo: expressLogo },

    { name: "MySQL", logo: mysqlLogo },
    { name: "PostgreSQL", logo: postgresqlLogo },

    { name: "TensorFlow", logo: tensorflowLogo },
    { name: "PyTorch", logo: pytorchLogo },

    { name: "GitHub", logo: githubLogo },
    { name: "Git", logo: gitLogo },
    { name: "Docker", logo: dockerLogo },
  ];
  const skills = [
    {
      category: "Programming",
      items: ["Python", "JavaScript"],
    },
    {
      category: "Frameworks",
      items: ["Django", "React.js", "Express.js", "Node.js"],
    },
    {
      category: "Database",
      items: ["MySQL", "PostgreSQL"],
    },
    {
      category: "AI/ML",
      items: ["TensorFlow", "PyTorch"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Docker"],
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen px-6 py-16"
      style={{ backgroundColor: "var(--dim-white)", color: "var(--black)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Education Section */}
        <section className="mb-12 p-6 md:p-8 bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-[rgba(237,91,45,0.15)]">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[var(--orange)] border-b border-[var(--orange)] pb-2">
            Education
          </h2>
          <div className="text-center text-[rgba(0,0,0,0.85)] dark:text-gray-200">
            <p className="text-lg font-medium mb-1">
              Bachelor of Science in Computer Science and Engineering (CSE)
            </p>
            <p className="text-base mb-1 text-gray-700 dark:text-gray-300">
              BRAC University, Dhaka
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              2020 – 2025 | CGPA: 3.85/4.00
            </p>
          </div>
        </section>

        {/* Technical Skills Section */}
        {/* <section className="mb-10 p-8 bg-white rounded-xl shadow-md border border-[rgba(237,91,45,0.2)]">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[var(--orange)] border-b border-[var(--orange)] pb-2">
            Technical Skills
          </h2>
          <div className="mt-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/70 backdrop-blur-sm rounded-lg px-3 py-2 shadow hover:shadow-md border border-[#ed5b2d]/30 hover:border-[#ed5b2d] transition duration-200 group"
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-8 h-8 mr-3 object-contain"
                  />
                  <span className="text-black text-sm font-medium group-hover:text-[#ed5b2d]">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        {/* Left side: categorized skill list */}
        <section className="mb-10 p-8 bg-white rounded-xl shadow-md border border-[rgba(237,91,45,0.2)]">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[var(--orange)] border-b border-[var(--orange)] pb-2">
            Technical Skills
          </h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="space-y-6 text-black text-sm font-medium">
              {skills.map((section, index) => (
                <div key={index}>
                  <h3 className="text-base font-semibold text-zinc-700 mb-2">
                    {section.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {section.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-200 rounded-md"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 place-items-center">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center bg-white/70 backdrop-blur-sm rounded-lg p-3 shadow hover:shadow-md border border-[#ed5b2d]/30 hover:border-[#ed5b2d] transition duration-200 group"
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-16 h-10 object-contain mb-2 aspect-square"
                  />
                  <span className="text-black text-xs font-medium group-hover:text-[#ed5b2d] text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
