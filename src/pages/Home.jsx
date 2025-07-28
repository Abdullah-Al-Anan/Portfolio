import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 py-20"
      style={{ backgroundColor: "var(--dim-white)", color: "var(--black)" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left: Intro */}
        <div className="text-center md:text-left space-y-6">
          <h3
            className="text-xl font-medium"
            style={{ color: "rgba(0, 0, 0, 0.6)" }}
          >
            Hello, I'm
          </h3>

          <h1
            className="text-4xl md:text-5xl font-extrabold leading-tight"
            style={{ color: "var(--black)" }}
          >
            Abdullah Al <span style={{ color: "var(--orange)" }}>Anan</span>
          </h1>

          <h2 className="text-2xl font-semibold text-[var(--orange)] tracking-wide">
            <ReactTyped
              strings={["Data Scientist", "Web Developer", "Teacher"]}
              typeSpeed={100}
              backSpeed={60}
              loop
            />
          </h2>

          <p className="text-base leading-relaxed text-[rgba(0,0,0,0.7)] max-w-xl">
            Detail-oriented Computer Science graduate with hands-on experience
            in data analysis, visualization, and research-driven problem
            solving. Proficient in Python, SQL, data visualization tools, and
            cloud data platforms, with the ability to build insightful
            dashboards and extract actionable intelligence using statistical
            methods and machine learning. Experienced in both academic research
            and practical projects, with a solid foundation in full-stack
            development (Django, Node.js). Passionate about leveraging data
            science, business intelligence, and AI to drive strategic
            decision-making and deliver impactful solutions. Committed to
            continuous learning and collaborating with teams that prioritize
            analytical thinking and data-driven growth.
          </p>

          <a
            href="/MD_REHMAN_TOUFIQUE_CV.pdf"
            download="MD_REHMAN_TOUFIQUE_CV.pdf"
            className="inline-block px-6 py-3 rounded-md font-medium transition"
            style={{
              backgroundColor: "var(--orange)",
              color: "var(--dim-white)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#d1491a")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--orange)")
            }
          >
            RESUME
          </a>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <img
            src="pic.jpg" // Replace with your image path
            alt="Anan"
            className="w-full max-w-sm rounded-xl shadow-lg border border-[rgba(237,91,45,0.2)]"
          />
        </div>
      </div>
    </section>
  );
}
