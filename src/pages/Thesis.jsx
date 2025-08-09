import React from "react";

const theses = [
  {
    title:
      "Blockchain-backed SSI: Empowering Travelers with a Secure Platform for Digitalized Travel Information",
    description:
      "Blockchain-based SSI systems offer a secure, privacy-focused travel pass, letting users store credentials on one platform. This reduces data exposure, physical document use, and simplifies verification across transport modes.",
    techStack: ["Blockchain", "Self-Sovereign Identity", "SSI", "Verifiable Credentials"],
    link: null,
    image: null,
  },
  {
    title:
      "A Secure and Trustworthy Digital Passport System Using Self-Sovereign Identity and Blockchain",
    description:
      "This study proposes a blockchain-based digital passport using SSI and Verifiable Credentials for secure, privacy-preserving identity verification. A Proof-of-Concept (PoC) was implemented to assess feasibility and address security threats.",
    techStack: ["Blockchain", "SSI", "Digital Passport", "Proof-of-Concept"],
    link: null,
    image: null,
  },
];

export default function Thesis() {
  return (
    <section
      id="thesis"
      className="min-h-screen px-4 sm:px-6 lg:px-8 py-16"
      style={{ backgroundColor: "var(--dim-white)", color: "var(--black)" }}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-2xl md:text-3xl font-bold text-center mb-6 text-[var(--orange)] border-b border-[var(--orange)] pb-2"
        >
          Undergraduate Thesis Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {theses.map((thesis, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md border border-[rgba(237,91,45,0.2)] hover:border-[var(--orange)] transition-all duration-300"
            >
              {thesis.image && (
                <img
                  src={thesis.image}
                  alt={thesis.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
              )}
              <h3
                className="text-2xl font-semibold mb-3"
                style={{ color: "var(--black)" }}
              >
                {thesis.title}
              </h3>
              <p className="text-[rgba(0,0,0,0.75)] text-sm mb-4 leading-relaxed">
                {thesis.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {thesis.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[var(--orange)]/20 text-[var(--orange)] px-3 py-1 rounded-full text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {thesis.link && (
                <a
                  href={thesis.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[var(--orange)] underline"
                >
                  View Thesis
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
