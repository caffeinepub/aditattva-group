import { Link, useRouterState } from "@tanstack/react-router";
import {
  BarChart3,
  ChevronDown,
  Code2,
  Cpu,
  FlaskConical,
  Menu,
  X,
} from "lucide-react";
import { useRef, useState } from "react";
import { useScrolled } from "../hooks/useScrolled";

const MEGA_MENU = [
  {
    title: "Technology Services",
    icon: Code2,
    items: [
      "Software Development",
      "AI & Data Analytics",
      "Cloud & Infrastructure",
      "Cybersecurity",
      "IoT & Blockchain",
    ],
  },
  {
    title: "Engineering Services",
    icon: Cpu,
    items: [
      "Mechanical & Manufacturing",
      "Electrical & Electronics",
      "Automation & Robotics",
      "Civil & Infrastructure",
    ],
  },
  {
    title: "R&D & Innovation",
    icon: FlaskConical,
    items: [
      "Prototyping",
      "Research Labs",
      "IP & Patent Strategy",
      "Testing & Certification",
    ],
  },
  {
    title: "Consulting & Strategy",
    icon: BarChart3,
    items: [
      "Digital Transformation",
      "Business Consulting",
      "Innovation Strategy",
    ],
  },
];

const NAV_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services", hasMega: true },
  { label: "Industries", href: "/industries" },
  { label: "Solutions", href: "/solutions" },
  { label: "Why Us", href: "/why-us" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const scrolled = useScrolled(80);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const handleMegaEnter = () => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
    setMegaOpen(true);
  };

  const handleMegaLeave = () => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 150);
  };

  const navBg = scrolled
    ? "bg-navy-dark shadow-lg"
    : "bg-navy-dark/90 backdrop-blur-sm";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      style={{ height: "72px" }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 shrink-0"
          data-ocid="nav.link"
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            role="img"
            aria-label="Aditattva Group logo"
          >
            <polygon
              points="18,2 34,28 2,28"
              stroke="oklch(var(--gold))"
              strokeWidth="2"
              fill="none"
            />
            <polygon
              points="18,9 28,26 8,26"
              fill="oklch(var(--gold))"
              fillOpacity="0.15"
            />
            <circle cx="18" cy="18" r="4" fill="oklch(var(--teal))" />
          </svg>
          <div>
            <div className="text-white font-bold text-base tracking-wider leading-tight">
              ADITATTVA GROUP
            </div>
            <div
              className="text-xs tracking-widest leading-tight"
              style={{ color: "oklch(var(--gold))" }}
            >
              TECHNOCRATS PVT. LTD.
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden lg:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) =>
            link.hasMega ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={handleMegaEnter}
                onMouseLeave={handleMegaLeave}
              >
                <Link
                  to={link.href}
                  data-ocid="services.link"
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded transition-colors ${
                    currentPath === link.href
                      ? "text-teal"
                      : "text-brand-light hover:text-white"
                  }`}
                >
                  {link.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </Link>

                {megaOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] rounded-xl shadow-card-hover border border-white/10 p-6 grid grid-cols-4 gap-6"
                    style={{ background: "oklch(var(--navy-mid))" }}
                    onMouseEnter={handleMegaEnter}
                    onMouseLeave={handleMegaLeave}
                    data-ocid="services.dropdown_menu"
                  >
                    {MEGA_MENU.map((col) => (
                      <div key={col.title}>
                        <div className="flex items-center gap-2 mb-3">
                          <div
                            className="w-7 h-7 rounded flex items-center justify-center"
                            style={{ background: "oklch(var(--teal))" }}
                          >
                            <col.icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-white text-xs font-semibold uppercase tracking-wide">
                            {col.title}
                          </span>
                        </div>
                        <ul className="space-y-1.5">
                          {col.items.map((item) => (
                            <li key={item}>
                              <Link
                                to="/services"
                                className="text-brand-muted hover:text-teal text-xs transition-colors block"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                data-ocid="nav.link"
                className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                  currentPath === link.href
                    ? "text-teal"
                    : "text-brand-light hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            data-ocid="nav.primary_button"
            className="hidden lg:inline-flex items-center px-5 py-2 rounded-full text-white text-sm font-semibold uppercase tracking-wide transition-all hover:scale-105 hover:shadow-lg"
            style={{ background: "oklch(var(--teal))" }}
          >
            Get In Touch
          </Link>
          <button
            type="button"
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="lg:hidden border-t border-white/10 px-6 py-4 space-y-2"
          style={{ background: "oklch(var(--navy-dark))" }}
          data-ocid="nav.panel"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              data-ocid="nav.link"
              className="block py-2.5 text-brand-light hover:text-white text-sm font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            data-ocid="nav.primary_button"
            className="mt-3 flex items-center justify-center px-5 py-2.5 rounded-full text-white text-sm font-semibold uppercase tracking-wide"
            style={{ background: "oklch(var(--teal))" }}
            onClick={() => setMenuOpen(false)}
          >
            Get In Touch
          </Link>
        </div>
      )}
    </header>
  );
}
