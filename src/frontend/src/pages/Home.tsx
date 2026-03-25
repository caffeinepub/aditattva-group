import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BarChart3,
  Building2,
  ChevronRight,
  Code2,
  Cpu,
  FlaskConical,
  Globe,
  Heart,
  Leaf,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";
import { useFadeIn } from "../hooks/useFadeIn";

const STATS = [
  { value: "100+", label: "Services" },
  { value: "15+", label: "Industries" },
  { value: "50+", label: "Partners" },
  { value: "500+", label: "Projects Delivered" },
];

const SERVICES = [
  {
    icon: Code2,
    title: "Technology Services",
    sub: "Cloud, AI, Data Analytics",
  },
  {
    icon: Cpu,
    title: "Engineering Services",
    sub: "Mechanical, Electrical, Civil",
  },
  {
    icon: FlaskConical,
    title: "R&D & Innovation",
    sub: "Prototyping, Research Labs",
  },
  {
    icon: BarChart3,
    title: "Consulting & Strategy",
    sub: "Digital Transformation",
  },
  { icon: Zap, title: "Digital Transformation", sub: "Automation & Process" },
  { icon: Building2, title: "Smart Infrastructure", sub: "IoT, Smart Cities" },
];

const INDUSTRIES = [
  { icon: Heart, name: "Healthcare" },
  { icon: Globe, name: "Telecom" },
  { icon: TrendingUp, name: "FinTech" },
  { icon: Zap, name: "Energy & Utilities" },
  { icon: Building2, name: "Infrastructure" },
  { icon: Cpu, name: "Manufacturing" },
  { icon: Lightbulb, name: "Smart Cities" },
];

const WHY_US = [
  {
    icon: Cpu,
    title: "Integrated Expertise",
    desc: "End-to-end solutions spanning technology, engineering, and consulting under one roof.",
  },
  {
    icon: Globe,
    title: "Global Delivery Model",
    desc: "Seamless delivery across geographies with local expertise and global standards.",
  },
  {
    icon: Lightbulb,
    title: "Innovation-led Approach",
    desc: "Cutting-edge R&D and emerging technology adoption at the core of every solution.",
  },
  {
    icon: Leaf,
    title: "Sustainability Focus",
    desc: "Embedding sustainable practices into every project for long-term environmental value.",
  },
  {
    icon: Award,
    title: "Quality & Certifications",
    desc: "ISO-certified processes and quality frameworks ensuring world-class outcomes.",
  },
];

const CORE_VALUES = [
  { icon: Lightbulb, label: "Innovation" },
  { icon: ShieldCheck, label: "Integrity" },
  { icon: Leaf, label: "Sustainability" },
  { icon: Award, label: "Excellence" },
];

export default function Home() {
  const section1 = useFadeIn<HTMLDivElement>();
  const section2 = useFadeIn<HTMLDivElement>();
  const section3 = useFadeIn<HTMLDivElement>();
  const section4 = useFadeIn<HTMLDivElement>();
  const section5 = useFadeIn<HTMLDivElement>();

  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center pt-[72px]"
        style={{
          background:
            "linear-gradient(135deg, oklch(var(--navy-dark)) 0%, oklch(0.20 0.06 237) 50%, oklch(0.25 0.04 220) 100%)",
        }}
        data-ocid="home.section"
      >
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <svg
            className="absolute right-0 top-0 w-1/2 h-full opacity-10"
            viewBox="0 0 600 700"
            fill="none"
            aria-hidden="true"
          >
            <polygon
              points="100,0 600,0 600,700 0,500"
              fill="oklch(var(--teal))"
            />
            <polygon
              points="200,100 600,0 600,400"
              fill="oklch(var(--navy-mid))"
            />
            <circle
              cx="450"
              cy="200"
              r="180"
              stroke="oklch(var(--gold))"
              strokeWidth="1"
              fill="none"
            />
            <circle
              cx="450"
              cy="200"
              r="120"
              stroke="oklch(var(--teal))"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-8 border border-teal/30"
              style={{
                background: "oklch(var(--teal) / 0.1)",
                color: "oklch(var(--teal))",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              Engineering Tomorrow, Innovating Today
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Engineering the Future.
              <br />
              <span style={{ color: "oklch(var(--gold))" }}>
                Enabling Sustainable
              </span>
              <br />
              Progress.
            </h1>
            <p className="text-base text-brand-light leading-relaxed mb-10 max-w-xl">
              A next-generation integrated technology, engineering, and
              consulting firm delivering scalable, sustainable, and intelligent
              solutions globally.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                data-ocid="hero.primary_button"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white font-semibold text-sm uppercase tracking-wide transition-all hover:scale-105 hover:shadow-xl"
                style={{ background: "oklch(var(--teal))" }}
              >
                Explore Services
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                data-ocid="hero.secondary_button"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white font-semibold text-sm uppercase tracking-wide border border-white/40 hover:bg-white/10 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="relative z-10 -mt-10">
        <div className="max-w-5xl mx-auto px-6">
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            data-ocid="stats.section"
          >
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className="rounded-xl text-center py-7 px-4 shadow-card"
                style={{ background: "oklch(var(--navy-mid))" }}
                data-ocid={`stats.card.${i + 1}`}
              >
                <div
                  className="text-4xl font-extrabold mb-1"
                  style={{ color: "oklch(var(--gold))" }}
                >
                  {s.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-brand-muted">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About snapshot */}
      <section className="py-24 bg-white" ref={section1}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="fade-in">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "oklch(var(--teal))" }}
              >
                About Aditattva
              </p>
              <h2 className="text-3xl font-bold text-navy-dark mb-5 leading-tight">
                Integrated Excellence Across Technology, Engineering &
                Consulting
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Aditattva Technocrats Private Limited is a premier integrated
                solutions provider headquartered in Ranchi, Jharkhand. We
                combine deep technical expertise with strategic consulting to
                deliver transformative outcomes for government, enterprise, and
                infrastructure clients globally.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our multi-disciplinary teams work at the intersection of
                innovation and execution, ensuring every engagement delivers
                measurable, sustainable value.
              </p>
              <Link
                to="/about"
                data-ocid="about.link"
                className="inline-flex items-center gap-2 font-semibold text-sm transition-colors"
                style={{ color: "oklch(var(--teal))" }}
              >
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 fade-in">
              {CORE_VALUES.map((v) => (
                <div
                  key={v.label}
                  className="rounded-xl p-6 flex flex-col items-center text-center gap-3 card-hover cursor-default"
                  style={{ background: "oklch(var(--navy-mid))" }}
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center"
                    style={{ background: "oklch(var(--teal))" }}
                  >
                    <v.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-white uppercase tracking-wide">
                    {v.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-24 bg-gray-50" ref={section2}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 fade-in">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "oklch(var(--teal))" }}
            >
              What We Do
            </p>
            <h2 className="text-3xl font-bold text-navy-dark uppercase tracking-wide">
              Our Services
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                className="rounded-xl p-6 card-hover cursor-default fade-in"
                style={{
                  background: "oklch(var(--navy-mid))",
                  transitionDelay: `${i * 80}ms`,
                }}
                data-ocid={`services.card.${i + 1}`}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                  style={{ background: "oklch(var(--teal))" }}
                >
                  <s.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-bold uppercase text-sm tracking-wide mb-2">
                  {s.title}
                </h3>
                <p className="text-brand-muted text-xs leading-relaxed">
                  {s.sub}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center fade-in">
            <Link
              to="/services"
              data-ocid="services.link"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg text-white font-semibold text-sm uppercase tracking-wide transition-all hover:scale-105"
              style={{ background: "oklch(var(--teal))" }}
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section
        className="py-24"
        style={{ background: "oklch(var(--navy-dark))" }}
        ref={section3}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 fade-in">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "oklch(var(--teal))" }}
            >
              Sectors We Serve
            </p>
            <h2 className="text-3xl font-bold text-white uppercase tracking-wide">
              Industries We Serve
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {INDUSTRIES.map((ind, i) => (
              <div
                key={ind.name}
                className="rounded-xl p-5 flex flex-col items-center text-center gap-3 card-hover cursor-default fade-in"
                style={{
                  background: "oklch(var(--navy-mid))",
                  transitionDelay: `${i * 60}ms`,
                }}
                data-ocid={`industries.card.${i + 1}`}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "oklch(var(--teal) / 0.2)" }}
                >
                  <ind.icon
                    className="w-5 h-5"
                    style={{ color: "oklch(var(--teal))" }}
                  />
                </div>
                <span className="text-xs font-semibold text-white uppercase tracking-wide">
                  {ind.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white" ref={section4}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 fade-in">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "oklch(var(--teal))" }}
            >
              Our Advantage
            </p>
            <h2 className="text-3xl font-bold text-navy-dark uppercase tracking-wide">
              Why Choose Us
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {WHY_US.map((w, i) => (
              <div
                key={w.title}
                className="fade-in"
                style={{ transitionDelay: `${i * 80}ms` }}
                data-ocid={`why.card.${i + 1}`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "oklch(var(--navy-mid))" }}
                >
                  <w.icon
                    className="w-6 h-6"
                    style={{ color: "oklch(var(--teal))" }}
                  />
                </div>
                <h3 className="text-navy-dark font-bold text-sm uppercase tracking-wide mb-2">
                  {w.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(135deg, oklch(var(--navy-mid)) 0%, oklch(0.25 0.07 200) 100%)",
        }}
        ref={section5}
      >
        <div className="max-w-4xl mx-auto px-6 text-center fade-in">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">
            Ready to Engineer Your Future?
          </h2>
          <p className="text-brand-light mb-10 text-base max-w-xl mx-auto">
            Partner with Aditattva Group to unlock transformative solutions that
            drive sustainable growth and lasting impact.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/services"
              data-ocid="cta.primary_button"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-white font-semibold text-sm uppercase tracking-wide transition-all hover:scale-105"
              style={{ background: "oklch(var(--teal))" }}
            >
              Explore Solutions <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              data-ocid="cta.secondary_button"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-white font-semibold text-sm uppercase tracking-wide border border-white/40 hover:bg-white/10 transition-all"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
