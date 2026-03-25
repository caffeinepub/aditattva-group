import { ArrowRight, Bot, Building2, Cpu, TrendingUp } from "lucide-react";
import { useFadeIn } from "../hooks/useFadeIn";

const SOLUTIONS = [
  {
    icon: TrendingUp,
    title: "Digital Transformation",
    desc: "We partnered with a leading PSU to digitize 200+ core processes, reducing operational costs by 35% and improving service delivery turnaround by 60% through an integrated ERP and workflow automation platform.",
    tag: "Case Study",
    outcome: "35% Cost Reduction",
  },
  {
    icon: Bot,
    title: "AI-powered Solutions",
    desc: "Deployed an AI-based predictive analytics platform for a major infrastructure company, enabling real-time anomaly detection across 500+ assets and preventing unplanned downtime with 92% accuracy.",
    tag: "Case Study",
    outcome: "92% Accuracy",
  },
  {
    icon: Cpu,
    title: "Engineering Innovation",
    desc: "Designed and implemented a next-generation automation system for a manufacturing plant in Jharkhand, boosting production efficiency by 40% and reducing manual errors by 70% through smart robotics integration.",
    tag: "Case Study",
    outcome: "40% Efficiency Gain",
  },
  {
    icon: Building2,
    title: "Smart Infrastructure",
    desc: "Built an integrated smart city command center for a tier-2 city, integrating traffic management, surveillance, utilities monitoring, and citizen services — serving 1.2 million citizens.",
    tag: "Case Study",
    outcome: "1.2M Citizens Served",
  },
];

export default function Solutions() {
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
            Impact Stories
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Solutions & Case Studies
          </h1>
        </div>
      </section>

      <section className="py-20 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-7">
            {SOLUTIONS.map((s, i) => (
              <div
                key={s.title}
                className="rounded-xl p-8 card-hover cursor-default fade-in"
                style={{
                  background: "oklch(var(--navy-mid))",
                  transitionDelay: `${i * 80}ms`,
                }}
                data-ocid={`solutions.card.${i + 1}`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: "oklch(var(--teal))" }}
                  >
                    <s.icon className="w-6 h-6 text-white" />
                  </div>
                  <span
                    className="text-xs font-bold uppercase px-3 py-1 rounded-full"
                    style={{
                      background: "oklch(var(--gold) / 0.15)",
                      color: "oklch(var(--gold))",
                    }}
                  >
                    {s.tag}
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{s.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-5">
                  {s.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className="text-sm font-bold"
                    style={{ color: "oklch(var(--gold))" }}
                  >
                    ✦ {s.outcome}
                  </span>
                  <button
                    type="button"
                    className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide transition-colors hover:opacity-80"
                    style={{ color: "oklch(var(--teal))" }}
                    data-ocid={`solutions.button.${i + 1}`}
                  >
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
