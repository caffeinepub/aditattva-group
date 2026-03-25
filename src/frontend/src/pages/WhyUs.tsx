import { Award, Cpu, Globe, Leaf, Lightbulb } from "lucide-react";
import { useFadeIn } from "../hooks/useFadeIn";

const REASONS = [
  {
    icon: Cpu,
    title: "Integrated Expertise",
    desc: "Aditattva brings together technology, engineering, R&D, and strategic consulting under one roof. This integrated model eliminates silos, accelerates delivery, and ensures every solution is coherent across its technical and business dimensions. Our clients benefit from a single partner who understands the full picture.",
    highlights: [
      "Multi-disciplinary teams",
      "Single point accountability",
      "Cross-domain delivery",
    ],
  },
  {
    icon: Globe,
    title: "Global Delivery Model",
    desc: "Our delivery network spans India and multiple international markets, with centers of excellence designed to serve clients wherever they operate. We combine global best practices with local domain expertise, ensuring culturally and contextually relevant solutions at world-class quality standards.",
    highlights: [
      "India HQ + global reach",
      "Local expertise, global standards",
      "24/7 delivery capability",
    ],
  },
  {
    icon: Lightbulb,
    title: "Innovation-led Approach",
    desc: "Innovation is not a department at Aditattva — it is our operating model. Our dedicated R&D labs, technology partnerships, and internal innovation programs ensure we always bring the most current, most effective solutions to client challenges. We invest heavily in emerging technologies before they become mainstream.",
    highlights: [
      "Dedicated R&D labs",
      "Emerging tech early adoption",
      "IP creation & patents",
    ],
  },
  {
    icon: Leaf,
    title: "Sustainability Focus",
    desc: "Environmental and social sustainability are embedded in our project methodology. We assess, measure, and optimize the environmental footprint of every engagement — from energy-efficient system architectures to sustainable infrastructure design — helping clients meet ESG commitments and regulatory requirements.",
    highlights: [
      "ESG-aligned solutions",
      "Green engineering practices",
      "Carbon impact assessments",
    ],
  },
  {
    icon: Award,
    title: "Quality & Certifications",
    desc: "Our quality management systems are built on internationally recognized frameworks. From ISO-certified processes to industry-specific compliance and rigorous testing protocols, we ensure every deliverable meets or exceeds the standards our clients and regulators expect — with full traceability and documentation.",
    highlights: [
      "ISO-aligned processes",
      "Rigorous QA/QC frameworks",
      "Full audit traceability",
    ],
  },
];

export default function WhyUs() {
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
            Our Advantage
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Why Choose Us
          </h1>
        </div>
      </section>

      <section className="py-20 bg-white" ref={ref}>
        <div className="max-w-5xl mx-auto px-6 space-y-14">
          {REASONS.map((r, i) => (
            <div
              key={r.title}
              className={`flex flex-col md:flex-row gap-10 items-start fade-in ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
              data-ocid={`whyus.card.${i + 1}`}
            >
              <div
                className="w-full md:w-1/3 rounded-xl p-8 flex flex-col items-center text-center shrink-0"
                style={{ background: "oklch(var(--navy-mid))" }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: "oklch(var(--teal))" }}
                >
                  <r.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-white font-bold text-sm uppercase tracking-wide">
                  {r.title}
                </h3>
              </div>
              <div className="flex-1">
                <p className="text-gray-600 leading-relaxed mb-5">{r.desc}</p>
                <ul className="space-y-2">
                  {r.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "oklch(var(--teal))" }}
                      />
                      <span className="text-navy-dark font-medium">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
