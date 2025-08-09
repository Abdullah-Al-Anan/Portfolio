import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 py-20"
      style={{ backgroundColor: "var(--dim-white)", color: "var(--black)" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left: Intro */}
        <div className="text-center md:text-left space-y-6 ">
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

          {/* <div className=" flex items-center rounded-2xl justify-center bg-gradient-to-br from-slate-600 to-slate-800 px-1 py-1">
  <div className="px-6 py-4 rounded-2xl shadow-xl border border-white/30 backdrop-blur-[10px] bg-gradient-to-br from-blue-200/20 to-blue-400/10 max-w-xl w-full">
    <div className="flex flex-wrap items-center gap-2 text-base sm:text-lg md:text-xl font-medium">
      <span className="text-white whitespace-nowrap">I have expertise in</span>
      <span className="text-gray-100 font-semibold tracking-wide">
        <ReactTyped
          strings={[
            "Data Science",
            "Data Engineering",
            "Data Analysis",
            "Web Developing",
          ]}
          typeSpeed={100}
          backSpeed={60}
          loop
        />
      </span>
    </div>
  </div>
</div> */}
          <div className="px-6 py-4 rounded-2xl shadow-sm border border-white/30 backdrop-blur-[8px] bg-gradient-to-br from-blue-200/20 to-blue-400/10 max-w-xl mx-auto">
            <div className="flex flex-wrap items-center gap-2 text-base sm:text-lg md:text-xl font-medium">
              <span className="text-black whitespace-nowrap">
                I have expertise in
              </span>
              <span className="text-[var(--orange)] font-semibold tracking-wide">
                <ReactTyped
                  strings={[
                    "Data Science",
                    "Data Engineering",
                    "Data Analysis",
                    "Web Developing",
                  ]}
                  typeSpeed={100}
                  backSpeed={60}
                  loop
                />
              </span>
            </div>
          </div>

          <p
            className="text-base leading-relaxed text-[rgba(0,0,0,0.7)] min-w-xl"
            style={{ textAlign: "justify" }}
          >
            Detail-oriented data professional with a strong focus on data
            workflows, automation, visualization, and analytics-driven
            decision-making. Experienced in designing data pipelines,
            integrating systems, and transforming complex datasets into
            actionable insights using statistical techniques and machine
            learning. With a solid foundation in computer science and hands-on
            experience in building end-to-end data solutions, I bring a
            problem-solving mindset and a results-driven approach to every task.
            Passionate about using data to drive strategic impact, streamline
            operations, and support scalable, insight-driven applications.
            Committed to continuous learning, innovation, and contributing to
            data-centric environments that value clarity, efficiency, and
            measurable outcomes.
          </p>

          <a
            href="/Abdullah Al Anan_Resume.pdf"
            download="Abdullah Al Anan_Resume.pdf"
            className="inline-block px-6 py-3 rounded-md font-medium transition"
            style={{
              backgroundColor: "var(--orange)",
              color: "var(--dim-white)",
            }}
            onMouseEnter={(e) =>
							(e.currentTarget.style.backgroundColor = "rgba(21, 24, 70, 0.88)")
						}
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--orange)")
            }
          >
            RESUME
          </a>
        </div>

        {/* Right: Image */}
        <div className="flex justify-end">
          <img
            src="pic.jpg" // Replace with your image path
            alt="Anan"
            className="justify-end w-full max-w-sm rounded-xl shadow-lg border border-[rgba(237,91,45,0.2)]"
          />
        </div>
      </div>
    </section>
  );
}
