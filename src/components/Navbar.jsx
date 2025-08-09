import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Navbar() {
  const links = [
    { href: "#home", label: "Home", icon: "fa-home" },
    { href: "#about", label: "About", icon: "fa-user" },
    { href: "#experience", label: "Experience", icon: "fa-briefcase" },
    { href: "#portfolio", label: "Projects", icon: "fa-folder-open" },
    { href: "#services", label: "Services", icon: "fa-list" },
    { href: "#contact", label: "Contact", icon: "fa-comments" },

  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 h-16 bg-[var(--dim-white)] shadow-md flex items-center justify-between z-50"
      style={{
        color: "var(--black)",
        paddingLeft: "160px",
        paddingRight: "50px",
      }}
    >
      {/* Nav Links */}
      <ul className="hidden md:flex space-x-6">
        {links.map(({ href, label, icon }) => (
          <li key={href}>
            <a
              href={href}
              className="flex items-center space-x-2 px-3 py-2 rounded-md transition-colors duration-200 hover:bg-[#7aa9e6] hover:text-[var(--black)] text-[var(--black)]"
            >
              <i className={`fas ${icon} w-5 text-center`}></i>
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>

      {/* Social Links */}
      <div className="flex items-center space-x-4">
        <a
          href="https://www.linkedin.com/in/abdullah-al-anan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--black)] hover:text-[var(--orange)] text-xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Abdullah-Al-Anan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--black)] hover:text-[var(--orange)] text-xl"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
}
