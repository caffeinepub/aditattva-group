import {
  ArrowRight,
  Clock,
  Lightbulb,
  MapPin,
  TrendingUp,
  Users,
} from "lucide-react";
import { useFadeIn } from "../hooks/useFadeIn";

const CULTURE = [
  {
    icon: Users,
    title: "Collaborative Culture",
    desc: "Work alongside brilliant minds across technology, engineering, and consulting disciplines in a culture that values diverse perspectives and shared success.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    desc: "We invest in our people's growth. Access to R&D projects, innovation labs, patent programs, and cutting-edge technology keeps you at the forefront.",
  },
  {
    icon: TrendingUp,
    title: "Accelerated Growth",
    desc: "Structured career paths, mentorship from industry veterans, and performance-driven advancement ensure your career grows as fast as our company.",
  },
];

const POSITIONS = [
  {
    title: "Senior Software Engineer — Full Stack",
    location: "Ranchi, Jharkhand",
    type: "Full-time",
    dept: "Technology",
  },
  {
    title: "AI/ML Research Scientist",
    location: "Ranchi, Jharkhand / Remote",
    type: "Full-time",
    dept: "R&D",
  },
  {
    title: "Project Manager — Infrastructure",
    location: "Ranchi, Jharkhand",
    type: "Full-time",
    dept: "Engineering",
  },
  {
    title: "Business Development Manager",
    location: "New Delhi / Ranchi",
    type: "Full-time",
    dept: "Consulting",
  },
];

export default function Careers() {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <div>
      <section
        className="pt-[72px] pb-16 min-h-[280px] flex items-end"
        style={{
          background:
            "linear-gradient(135deg, oklch(var(--navy-dark)) 0%, oklch(0.22 0.06 230) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-14">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "oklch(var(--teal))" }}
          >
            Work With Us
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Join Our Team
          </h1>
          <p className="text-brand-light mt-3 max-w-xl">
            Shape the future of technology and engineering. Join a team that
            engineers solutions for tomorrow's challenges.
          </p>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 fade-in">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "oklch(var(--teal))" }}
            >
              Life at Aditattva
            </p>
            <h2 className="text-2xl font-bold text-navy-dark uppercase tracking-wide">
              Our Culture
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {CULTURE.map((c, i) => (
              <div
                key={c.title}
                className="rounded-xl p-7 card-hover cursor-default fade-in"
                style={{
                  background: "oklch(var(--navy-mid))",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "oklch(var(--teal))" }}
                >
                  <c.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-3">
                  {c.title}
                </h3>
                <p className="text-brand-muted text-xs leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Open positions */}
          <div className="mb-8 fade-in">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "oklch(var(--teal))" }}
            >
              Opportunities
            </p>
            <h2 className="text-2xl font-bold text-navy-dark uppercase tracking-wide">
              Open Positions
            </h2>
          </div>
          <div className="space-y-4">
            {POSITIONS.map((pos, i) => (
              <div
                key={pos.title}
                className="rounded-xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 fade-in"
                style={{
                  background: "oklch(var(--navy-mid))",
                  transitionDelay: `${i * 80}ms`,
                }}
                data-ocid={`careers.item.${i + 1}`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-xs font-bold uppercase px-2 py-0.5 rounded"
                      style={{
                        background: "oklch(var(--teal) / 0.15)",
                        color: "oklch(var(--teal))",
                      }}
                    >
                      {pos.dept}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2">
                    {pos.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 text-xs text-brand-muted">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {pos.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {pos.type}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white font-semibold text-xs uppercase tracking-wide transition-all hover:scale-105 shrink-0"
                  style={{ background: "oklch(var(--teal))" }}
                  data-ocid={`careers.button.${i + 1}`}
                >
                  Apply Now <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
