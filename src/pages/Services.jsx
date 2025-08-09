export default function Services() {
  const services = [
    {
      icon: "fa-chart-line",
      title: "Data Analysis & Visualization",
      desc: "Transforming raw data into actionable insights using Python, Power BI, Metabase and Google BigQuery.",
    },
    {
      icon: "fa-database",
      title: "Database & Cloud Services",
      desc: "Designing and managing relational and NoSQL databases with MySQL, PostgreSQL, and BigQuery cloud warehouse.",
    },
    {
      icon: "fa-laptop-code",
      title: "Full-Stack Web Development",
      desc: "Developing full-stack web applications using Django and React with clean, scalable code and intuitive interfaces.",
    },
    {
      icon: "fa-brain",
      title: "Machine Learning Projects",
      desc: "Building ML models for real-world predictions using Scikit-learn, TensorFlow, and PyTorch with a focus on healthcare and NLP.",
    },

    {
      icon: "fa-code-branch",
      title: "Version Control & Collaboration",
      desc: "Experienced in Git, GitHub, and team collaboration practices for efficient versioning, branching, and code reviews.",
    },
    {
      icon: "fa-lightbulb",
      title: "Problem Solving & Mentoring",
      desc: "200+ problems solved on platforms and 1.5+ years teaching experience in algorithms, OOP, and pattern recognition at university level.",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen px-6 py-16"
      style={{ backgroundColor: "var(--dim-white)", color: "var(--black)" }}
    >
      <div className="max-w-6xl mx-auto">
        <section className="mb-12 p-6 md:p-8 bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-[rgba(237,91,45,0.15)]">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[var(--orange)] border-b border-[var(--orange)] pb-2">
            Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md border border-[rgba(237,91,45,0.2)] hover:shadow-lg hover:border-[var(--orange)] transition-all duration-300 hover:scale-100"
              >
                <div className="text-[var(--orange)] text-3xl mb-4">
                  <i className={`fa ${service.icon}`}></i>
                </div>
                <h4
                  className="text-xl font-semibold mb-2"
                  style={{ color: "var(--black)" }}
                >
                  {service.title}
                </h4>
                <p className="text-[rgba(0,0,0,0.7)] text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
