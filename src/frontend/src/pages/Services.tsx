import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart3,
  Beaker,
  Bot,
  Cloud,
  Code2,
  Cog,
  Cpu,
  FileText,
  FlaskConical,
  Shield,
  TrendingUp,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import { useFadeIn } from "../hooks/useFadeIn";

const SERVICE_CATEGORIES = [
  {
    id: "technology",
    label: "Technology",
    icon: Code2,
    heading: "Technology Services",
    desc: "Cutting-edge digital solutions to accelerate your technology journey.",
    services: [
      {
        icon: Code2,
        title: "Software Development",
        desc: "Custom enterprise software, web platforms, and mobile applications engineered for scale and performance.",
      },
      {
        icon: Bot,
        title: "AI & Data Analytics",
        desc: "Machine learning, predictive analytics, NLP, and data engineering solutions that turn data into competitive advantage.",
      },
      {
        icon: Cloud,
        title: "Cloud & Infrastructure",
        desc: "End-to-end cloud strategy, migration, architecture design, and managed services across AWS, Azure, and GCP.",
      },
      {
        icon: Shield,
        title: "Cybersecurity",
        desc: "Comprehensive security assessments, SOC operations, threat intelligence, and zero-trust architecture.",
      },
      {
        icon: Cpu,
        title: "IoT & Blockchain",
        desc: "Connected device ecosystems, edge computing, and distributed ledger solutions for industrial and enterprise use cases.",
      },
    ],
  },
  {
    id: "engineering",
    label: "Engineering",
    icon: Cpu,
    heading: "Engineering Services",
    desc: "Precision engineering solutions across mechanical, electrical, automation, and civil domains.",
    services: [
      {
        icon: Cog,
        title: "Mechanical & Manufacturing",
        desc: "Product design, simulation, prototyping, and manufacturing process optimization for industrial applications.",
      },
      {
        icon: Cpu,
        title: "Electrical & Electronics",
        desc: "Power systems design, embedded electronics, PCB layout, and electrical infrastructure engineering.",
      },
      {
        icon: Bot,
        title: "Automation & Robotics",
        desc: "Industrial automation, robotic process engineering, PLC/SCADA systems, and smart factory transformation.",
      },
      {
        icon: Wrench,
        title: "Civil & Infrastructure",
        desc: "Structural design, urban infrastructure planning, construction management, and sustainability assessment.",
      },
    ],
  },
  {
    id: "rnd",
    label: "R&D & Innovation",
    icon: FlaskConical,
    heading: "R&D & Innovation",
    desc: "Driving breakthrough innovations from concept to commercialization.",
    services: [
      {
        icon: Beaker,
        title: "Prototyping",
        desc: "Rapid prototyping, proof-of-concept development, and iterative engineering for new product development.",
      },
      {
        icon: FlaskConical,
        title: "Research Labs",
        desc: "Dedicated R&D facilities and specialized research teams for advanced technology exploration and development.",
      },
      {
        icon: FileText,
        title: "IP & Patent Strategy",
        desc: "Intellectual property management, patent filing strategy, and technology licensing advisory services.",
      },
      {
        icon: Shield,
        title: "Testing & Certification",
        desc: "Comprehensive testing frameworks, quality certification support, and regulatory compliance validation.",
      },
    ],
  },
  {
    id: "consulting",
    label: "Consulting",
    icon: BarChart3,
    heading: "Consulting & Strategy",
    desc: "Strategic advisory services to navigate complexity and accelerate transformation.",
    services: [
      {
        icon: TrendingUp,
        title: "Digital Transformation",
        desc: "Enterprise-wide digital transformation roadmaps, change management, and technology adoption strategies.",
      },
      {
        icon: BarChart3,
        title: "Business Consulting",
        desc: "Operational excellence, process reengineering, performance management, and growth strategy development.",
      },
      {
        icon: Cpu,
        title: "Innovation Strategy",
        desc: "Innovation ecosystem design, technology scouting, startup engagement, and future-readiness assessments.",
      },
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState("technology");
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <div>
      <section
        className="pt-[72px] pb-16 flex items-end min-h-[280px]"
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
            What We Offer
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Our Services
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-6">
          <Tabs value={active} onValueChange={setActive}>
            <TabsList
              className="mb-10 flex flex-wrap gap-2 bg-transparent p-0 h-auto"
              data-ocid="services.tab"
            >
              {SERVICE_CATEGORIES.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  data-ocid="services.tab"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all data-[state=active]:text-white data-[state=active]:border-transparent"
                  style={{
                    borderColor:
                      active === cat.id
                        ? "transparent"
                        : "oklch(var(--navy-mid))",
                    background:
                      active === cat.id ? "oklch(var(--teal))" : "transparent",
                    color:
                      active === cat.id ? "white" : "oklch(var(--navy-dark))",
                  }}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {SERVICE_CATEGORIES.map((cat) => (
              <TabsContent key={cat.id} value={cat.id}>
                <div className="mb-8 fade-in">
                  <h2 className="text-2xl font-bold text-navy-dark mb-2">
                    {cat.heading}
                  </h2>
                  <p className="text-gray-500 text-sm">{cat.desc}</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {cat.services.map((s, i) => (
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
                      <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-3">
                        {s.title}
                      </h3>
                      <p className="text-brand-muted text-xs leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
}
