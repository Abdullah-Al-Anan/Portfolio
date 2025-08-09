import React from "react";

const projects = [
  {
    title: "Heart Disease Prediction",
    description:
      "Developed machine learning models to predict heart disease risks, aiding early diagnosis and improving healthcare outcomes. Used SVM, Decision Tree, KNN, and Logistic Regression to compare accuracy and performance.",
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    demoLink: null,
    gitLink: "https://github.com/Abdullah-Al-Anan/Disease_Prediction-ML.git",
    image: null,
  },
  {
    title: "Movie Sentiment Analysis",
    description:
      "Built a sentiment analysis system using IMDB movie reviews. Applied NLP techniques with NLTK and built classifiers like Naive Bayes and KNN for opinion mining.",
    techStack: ["Python", "Pandas", "Scikit-learn", "NLTK", "NumPy"],
    demoLink: null,
    gitLink: "https://github.com/Abdullah-Al-Anan/Sentiment_analysis-ML.git",
    image: null,
  },
  {
    title: "Job Market Intelligence & Hiring Trends Analysis ",
    description:
      "Developed a comprehensive job market intelligence report in Power BI, analyzing multi-year job posting data to identify high-demand roles, emerging skill sets, and salary trends. Leveraged DAX calculations and interactive visuals to highlight applicant behavior, industry growth, and geographic hotspots—providing actionable insights for recruiters, HR leaders, and job seekers.",
    techStack: ["Power BI", "DAX","Power Query", "Data Visualization"],
    demoLink:
      "https://app.powerbi.com/groups/me/reports/3f97f347-e138-4be7-8377-3c72521552f9/1cf9a9a000b2ef7b82ee?experience=power-bi",
    gitLink:
      "https://github.com/Abdullah-Al-Anan/Job-Market-Analysis-Using-Power-BI.git",
    image: null,
  },
  {
    title: "Hospital Management Analysis Using Power BI",
    description:
      "Designed an interactive healthcare performance analysis using Power BI to evaluate patient admissions, billing patterns, and length-of-stay trends across multiple hospitals. Integrated dynamic filters by medical condition, admission type, and demographics to uncover revenue drivers, seasonal variations, and cost efficiencies—empowering decision-makers to enhance hospital operations and patient care.",
    techStack: ["Power BI", "DAX", "Power Query", "Data Visualization"],
    demoLink:
      "https://app.powerbi.com/view?r=eyJrIjoiN2QzOTdiNjAtYmZkMC00ZTMxLWE3ZWYtN2NjY2RhMTNlNTIxIiwidCI6IjVmYjk2NTQ0LWNkYTYtNDdiNC1hMmQ1LWE0MGE3NGZkMjg5NiJ9",
    gitLink:
      "https://github.com/Abdullah-Al-Anan/Hospital-Management-Dashboard-Using-Power-BI.git",
    image: null,
  },
  {
    title: "Dengue  Outbreak Epidemiological Analysis With Excel",
    description:
      "Produced a two-page epidemiological analysis in Excel to study dengue case distribution across demographics, geographies, and diagnostic results. Identified high-risk zones, vulnerable age groups, and the most reliable test indicators. Presented public health recommendations to improve detection, prevention, and targeted intervention in outbreak-prone areas.",
    techStack: ["Microsoft Excel", "PivotTables", "PivotCharts", "Data Visualization"],
    demoLink: null,
    gitLink:
      "https://github.com/Abdullah-Al-Anan/Dengue-Report-Analysis-Dashboard.git",
    image: null,
  },
  {
    title: "Exploring Data Analysis of Hotel Management",
    description:
      "Crafted a hospitality performance analysis in Excel using PivotTables, PivotCharts, and slicers to evaluate bookings, seasonal revenue fluctuations, and cancellation trends across global markets. Revealed the impact of distribution channels and booking lead times on revenue loss, offering targeted recommendations to maximize occupancy and reduce cancellations.",
    techStack: ["Microsoft Excel", "PivotTables", "Power Query", "Data Visualization"],
    demoLink:null,
    gitLink:
      "https://github.com/Abdullah-Al-Anan/Hotel-Management-Dashboard.git",
    image: null,
  },
  {
    title: "Travel Management System",
    description:
      "A web app that helps users plan trips, book hotels, and arrange guided tours. Built using the MERN stack with RESTful APIs and dynamic UI components.",
    techStack: ["React.js", "Express.js", "MongoDB", "Node.js", "JavaScript"],
    demoLink: null,
    gitLink:
      "https://github.com/Abdullah-Al-Anan/Tour_Management_System-MERN.git",
    image: null,
  },
  {
    title: "Real-Time Multiplayer Tic-Tac-Toe",
    description:
      "A live multiplayer Tic-Tac-Toe game with matchmaking and disconnection handling. Built using Socket.IO and Node.js, including an admin panel for game tracking.",
    techStack: ["JavaScript", "Node.js", "Express.js", "Socket.IO"],
    demoLink: null,
    gitLink:
      "https://github.com/Abdullah-Al-Anan/tic-tac-toe_Multiplayer.git",
    image: null,
  },
  {
    title: "Enhanced Signboard Detection",
    description:
      "Applied YOLOv5 with custom dataset augmentation and fine-tuning for high-precision signboard detection. Achieved strong precision and recall, highlighting suitability for smart city surveillance and autonomous navigation.",
    techStack: ["Python", "YOLOv5", "OpenCV"],
    demoLink: null,
    gitLink:
      "https://github.com/Abdullah-Al-Anan/SignBoard_Detection-_YOLOv5.git",
    image: null,
  },
];

const theses = [
  {
    title:
      "Blockchain-backed SSI: Empowering Travelers with a Secure Platform for Digitalized Travel Information",
    description:
      "Blockchain-based SSI systems offer a secure, privacy-focused travel pass, letting users store credentials on one platform. This reduces data exposure, physical document use, and simplifies verification across transport modes.",
    techStack: [
      "Blockchain",
      "Self-Sovereign Identity",
      "SSI",
      "Verifiable Credentials",
    ],
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

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="min-h-screen px-4 sm:px-6 lg:px-8 py-16"
      style={{ backgroundColor: "var(--dim-white)", color: "var(--black)" }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[var(--orange)] border-b border-[var(--orange)] pb-2">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md border border-[rgba(237,91,45,0.2)] hover:border-[var(--orange)] transition-all duration-300"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
              )}
              <h3
                className="text-2xl font-semibold mb-3"
                style={{ color: "var(--black)" }}
              >
                {project.title}
              </h3>
              <p className="text-[rgba(0,0,0,0.75)] text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[var(--orange)]/20 text-[var(--orange)] px-3 py-1 rounded-full text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-[var(--orange)] text-white rounded-full text-sm font-semibold hover:bg-blue-400 transition"
                  >
                    Live 
                  </a>
                )}
                {project.gitLink && (
                  <a
                    href={project.gitLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-[var(--orange)] text-white rounded-full text-sm font-semibold hover:bg-blue-400 transition"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="mt-10 text-2xl md:text-3xl font-bold text-center mb-6 text-[var(--orange)] border-b border-[var(--orange)] pb-2">
          Research
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
                  className="px-4 py-2 bg-[var(--orange)] text-white rounded-lg text-sm font-semibold hover:bg-orange-600 transition"
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
