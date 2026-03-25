import {
  Award,
  Globe,
  Layers,
  Leaf,
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import { useFadeIn } from "../hooks/useFadeIn";

const CORE_VALUES = [
  {
    icon: Lightbulb,
    label: "Innovation",
    desc: "We constantly push boundaries and embrace emerging technologies to solve complex challenges.",
  },
  {
    icon: ShieldCheck,
    label: "Integrity",
    desc: "Transparency, ethics, and accountability guide every relationship and deliverable.",
  },
  {
    icon: Leaf,
    label: "Sustainability",
    desc: "Embedding long-term environmental responsibility into every project we undertake.",
  },
  {
    icon: Award,
    label: "Excellence",
    desc: "Uncompromising quality standards across all engagements, globally.",
  },
];

const DELIVERY_MODEL = [
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Offices and delivery centers strategically positioned to serve clients across Asia, Middle East, and beyond.",
  },
  {
    icon: Users,
    title: "Expert Teams",
    desc: "Multi-disciplinary specialists in technology, engineering, R&D, and consulting.",
  },
  {
    icon: Target,
    title: "Outcome-driven",
    desc: "Every engagement is benchmarked against measurable business outcomes.",
  },
  {
    icon: Layers,
    title: "Integrated Model",
    desc: "Seamless collaboration across service lines ensures unified, coherent solutions.",
  },
];

export default function About() {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <div>
      {/* Hero banner */}
      <section
        className="pt-[72px] pb-24 flex items-end min-h-[320px]"
        style={{
          background:
            "linear-gradient(135deg, oklch(var(--navy-dark)) 0%, oklch(0.22 0.06 230) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "oklch(var(--teal))" }}
          >
            Who We Are
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            About Aditattva Group
          </h1>
        </div>
      </section>

      {/* Company overview */}
      <section className="py-20 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 fade-in">
            <h2 className="text-2xl font-bold text-navy-dark mb-5">
              Aditattva Technocrats Private Limited
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Aditattva Group is a next-generation integrated firm combining
              technology, engineering, R&D, and strategic consulting
              capabilities. Headquartered in Ranchi, Jharkhand, we serve
              government, PSU, enterprise, and infrastructure clients with a
              focus on delivering tangible, scalable, and sustainable outcomes.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our cross-functional teams leverage deep domain knowledge and
              proprietary frameworks to tackle the most complex challenges
              across industries — from digital transformation and smart
              infrastructure to advanced manufacturing and emerging technology
              adoption.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div
              className="rounded-xl p-8 fade-in"
              style={{ background: "oklch(var(--navy-mid))" }}
              data-ocid="about.panel"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                style={{ background: "oklch(var(--teal))" }}
              >
                <Target className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                To be the most trusted integrated technology and engineering
                partner for enterprises and governments worldwide — recognized
                for innovation, integrity, and lasting impact.
              </p>
            </div>
            <div
              className="rounded-xl p-8 fade-in"
              style={{ background: "oklch(var(--navy-mid))" }}
              data-ocid="about.panel"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                style={{ background: "oklch(var(--gold))" }}
              >
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                To deliver scalable, intelligent, and sustainable solutions by
                combining world-class expertise across technology, engineering,
                and consulting — enabling our clients to lead in a rapidly
                evolving world.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-6 fade-in">
            <h2 className="text-2xl font-bold text-navy-dark uppercase tracking-wide mb-8">
              Core Values
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {CORE_VALUES.map((v) => (
                <div
                  key={v.label}
                  className="rounded-xl p-6 text-center card-hover cursor-default fade-in"
                  style={{ background: "oklch(var(--navy-mid))" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: "oklch(var(--teal))" }}
                  >
                    <v.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-2">
                    {v.label}
                  </h3>
                  <p className="text-brand-muted text-xs leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership philosophy */}
      <section
        className="py-20"
        style={{ background: "oklch(var(--navy-dark))" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl fade-in">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "oklch(var(--teal))" }}
            >
              Leadership Philosophy
            </p>
            <h2 className="text-2xl font-bold text-white mb-5">
              Lead with Purpose, Deliver with Precision
            </h2>
            <p className="text-brand-light leading-relaxed mb-4">
              Our leadership team embodies a philosophy of servant leadership —
              empowering teams, fostering a culture of continuous learning, and
              ensuring every client engagement is driven by genuine partnership
              and shared accountability.
            </p>
            <p className="text-brand-muted leading-relaxed">
              We believe great outcomes are built on trust, transparency, and
              the relentless pursuit of excellence. Our leaders bring decades of
              combined expertise from government projects, Fortune 500
              engagements, and cutting-edge research — ensuring Aditattva
              remains at the forefront of innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Global delivery model */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 fade-in">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "oklch(var(--teal))" }}
            >
              How We Deliver
            </p>
            <h2 className="text-2xl font-bold text-navy-dark uppercase tracking-wide">
              Global Delivery Model
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DELIVERY_MODEL.map((d, i) => (
              <div
                key={d.title}
                className="fade-in"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "oklch(var(--navy-mid))" }}
                >
                  <d.icon
                    className="w-6 h-6"
                    style={{ color: "oklch(var(--teal))" }}
                  />
                </div>
                <h3 className="font-bold text-sm text-navy-dark uppercase tracking-wide mb-2">
                  {d.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
