export default function Experience() {
  const experience = [
    {
      company: "BJIT Limited",
      period: "March, 2025 - June, 2025",
      role: "Intern IT",
      location: "Dhaka",
      responsibilities:
        "Provided IT support with a focus on system reliability and data integrity. Troubleshot hardware/software issues, and installed, configured, and maintained operating systems, VPNs, email services, and remote servers. Managed network infrastructure and CCTV server operations to ensure secure, stable connectivity. Supported employee onboarding through credential setup and biometric access configuration, emphasizing secure data access and system efficiency.",
    },
    {
      company: "BRAC University",
      period: "July, 2023 - January, 2025",
      role: "Teaching Assistant",
      location: "Dhaka",
      responsibilities:
        "Mentored students in Data Structures, Algorithms, Object-Oriented Programming, and Pattern Recognition with an emphasis on analytical thinking and problem-solving. Delivered 12 hours/week of individual and group consultations to enhance student understanding of computational and data-centric concepts. Conducted lab sessions, evaluated coding assignments, and supervised examinations. Collaborated with faculty to ensure effective course delivery and uphold academic and technical standards aligned with data-driven learning objectives.",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen px-6 py-16"
      style={{ backgroundColor: "var(--dim-white)", color: "var(--black)" }}
    >
      <div className="max-w-6xl mx-auto">
        <section className="mb-12 p-6 md:p-8 bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-[rgba(237,91,45,0.15)]">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[var(--orange)] border-b border-[var(--orange)] pb-2">
            Experience
          </h2>
          <div className="pt-10 pb-10 mt-6 space-y-10 text-black text-sm font-medium max-w-4xl mx-auto">
            {experience.map(
              (
                { company, period, role, location, responsibilities },
                index
              ) => (
                <div
                  key={index}
                  className="p-4 md:p-6 border  rounded-lg bg-white/60 dark:bg-zinc-700/40 backdrop-blur-sm shadow-sm"
                >
                  <h3 className="text-base font-semibold text-zinc-700 dark:text-gray-200 mb-1">
                    {company}{" "}
                    <span className="text-gray-500 font-normal">{period}</span>
                  </h3>
                  <p className="text-zinc-800 dark:text-gray-300 mb-2 font-semibold">
                    {role} — {location}
                  </p>
                  <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                    {responsibilities}
                  </p>
                </div>
              )
            )}
          </div>
        </section>
      </div>
    </section>
  );
}
