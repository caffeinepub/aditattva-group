import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer
      className="text-brand-light"
      style={{ background: "oklch(var(--navy-dark))" }}
    >
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <svg
                width="32"
                height="32"
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
                <circle cx="18" cy="18" r="4" fill="oklch(var(--teal))" />
              </svg>
              <div>
                <div className="text-white font-bold text-sm tracking-wider">
                  ADITATTVA GROUP
                </div>
                <div
                  className="text-xs tracking-widest"
                  style={{ color: "oklch(var(--gold))" }}
                >
                  TECHNOCRATS PVT. LTD.
                </div>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-brand-muted">
              Engineering Tomorrow, Innovating Today.
            </p>
            <p className="text-xs leading-relaxed text-brand-muted">
              A next-generation integrated technology, engineering, and
              consulting firm delivering scalable, sustainable, and intelligent
              solutions globally.
            </p>
            <div className="flex gap-3 pt-1">
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter/X"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors"
              >
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://youtube.com"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors"
              >
                <Youtube className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Industries", href: "/industries" },
                { label: "Solutions", href: "/solutions" },
                { label: "Why Choose Us", href: "/why-us" },
                { label: "Careers", href: "/careers" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.href}
                    className="text-xs text-brand-muted hover:text-teal transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "Technology Services",
                "Engineering Services",
                "R&D & Innovation",
                "Consulting & Strategy",
                "Digital Transformation",
                "Smart Infrastructure",
              ].map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-xs text-brand-muted hover:text-teal transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex gap-2 text-xs text-brand-muted">
                <MapPin
                  className="w-4 h-4 shrink-0 mt-0.5"
                  style={{ color: "oklch(var(--teal))" }}
                />
                <span>Ranchi, Jharkhand, India — 834001</span>
              </li>
              <li className="flex gap-2 text-xs text-brand-muted">
                <Mail
                  className="w-4 h-4 shrink-0"
                  style={{ color: "oklch(var(--teal))" }}
                />
                <a
                  href="mailto:info@aditattva.com"
                  className="hover:text-teal transition-colors"
                >
                  info@aditattva.com
                </a>
              </li>
              <li className="flex gap-2 text-xs text-brand-muted">
                <Phone
                  className="w-4 h-4 shrink-0"
                  style={{ color: "oklch(var(--teal))" }}
                />
                <a
                  href="tel:+919876543210"
                  className="hover:text-teal transition-colors"
                >
                  +91-98765-43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-brand-muted">
            © {year} Aditattva Technocrats Private Limited. All rights reserved.
          </p>
          <p className="text-xs text-brand-muted">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
