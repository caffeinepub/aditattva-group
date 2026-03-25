import {
  Building2,
  Cpu,
  Globe,
  Heart,
  Lightbulb,
  TrendingUp,
  Zap,
} from "lucide-react";
import { useFadeIn } from "../hooks/useFadeIn";

const INDUSTRIES = [
  {
    icon: Heart,
    name: "Healthcare",
    desc: "Digital health platforms, telemedicine, hospital management systems, and medical device integration solutions for modern healthcare delivery.",
  },
  {
    icon: Globe,
    name: "Telecom",
    desc: "Network infrastructure modernization, BSS/OSS transformation, 5G readiness, and digital experience platforms for telecom operators.",
  },
  {
    icon: TrendingUp,
    name: "FinTech",
    desc: "Secure banking platforms, payment gateways, RegTech solutions, and AI-driven financial analytics for banks and NBFCs.",
  },
  {
    icon: Zap,
    name: "Energy & Utilities",
    desc: "Smart grid solutions, energy management systems, renewable integration, and SCADA/DCS solutions for power and utilities.",
  },
  {
    icon: Building2,
    name: "Infrastructure",
    desc: "EPC project management, civil engineering, project monitoring dashboards, and GIS-based infrastructure planning.",
  },
  {
    icon: Cpu,
    name: "Manufacturing",
    desc: "Industry 4.0 adoption, smart factory transformation, predictive maintenance, and supply chain optimization.",
  },
  {
    icon: Lightbulb,
    name: "Smart Cities",
    desc: "Integrated command centers, IoT-enabled urban services, traffic management, and citizen engagement platforms.",
  },
];

export default function Industries() {
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
            Sectors
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Industries We Serve
          </h1>
        </div>
      </section>

      <section className="py-20 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind, i) => (
              <div
                key={ind.name}
                className="rounded-xl overflow-hidden card-hover cursor-default fade-in"
                style={{
                  background: "oklch(var(--navy-mid))",
                  transitionDelay: `${i * 80}ms`,
                }}
                data-ocid={`industries.card.${i + 1}`}
              >
                <div
                  className="h-24 flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, oklch(var(--navy-dark)) 0%, oklch(0.28 0.06 ${188 + i * 10}) 100%)`,
                  }}
                >
                  <ind.icon
                    className="w-10 h-10"
                    style={{ color: "oklch(var(--gold))" }}
                  />
                </div>
                <div className="p-6">
                  <h3
                    className="text-white font-bold uppercase tracking-wide text-sm mb-3"
                    style={{ color: "oklch(var(--gold))" }}
                  >
                    {ind.name}
                  </h3>
                  <p className="text-brand-muted text-xs leading-relaxed">
                    {ind.desc}
                  </p>
                  <p
                    className="mt-4 text-xs font-semibold uppercase tracking-wider cursor-pointer transition-colors hover:opacity-80"
                    style={{ color: "oklch(var(--gold))" }}
                  >
                    Learn More →
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
