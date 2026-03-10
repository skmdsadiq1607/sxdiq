import { motion } from "framer-motion";
import { Trophy, Zap, Code, ArrowUpRight } from "lucide-react";

const items = [
  { icon: Zap, title: "AgentX Hackathon", org: "Dept of IT & Salesforce", color: "hsl(30 100% 55%)", description: "Built AI agents for smart city management", emoji: "⚡" },
  { icon: Trophy, title: "Data Dynamo 2.0", org: "Dept of Data Science", color: "hsl(280 80% 60%)", description: "Competed in data science challenges", emoji: "🏆" },
  { icon: Code, title: "Web Dev Workshops", org: "Coding competitions", color: "hsl(170 80% 50%)", description: "Participated in web development events", emoji: "🚀" },
];

const Hackathons = () => (
  <section className="section-padding relative overflow-hidden" style={{ background: 'var(--section-hackathons-bg)' }}>
    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(30 100% 55% / 0.3), transparent)' }} />
    <div className="absolute top-[40%] left-[5%] w-[300px] h-[300px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, hsl(30 100% 55% / 0.08), transparent 70%)' }} />

    <div className="container mx-auto relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-heading">
        <p className="text-sm font-mono mb-3 tracking-wider uppercase" style={{ color: 'hsl(30 100% 60%)' }}>Competitions</p>
        <h2 className="text-4xl md:text-5xl font-bold" style={{ background: 'linear-gradient(135deg, hsl(30 100% 60%), hsl(45 100% 55%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Hackathons</h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Competitive events where I pushed my limits</p>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
            whileHover={{ y: -12, scale: 1.03 }}
            className="rounded-3xl p-8 text-center group relative overflow-hidden border border-border/20 bg-card/30 backdrop-blur-sm cursor-default"
            style={{ boxShadow: `0 10px 40px -15px ${item.color}10` }}
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}60)` }} />
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700" style={{ background: item.color }} />
            
            <div className="relative z-10">
              <motion.div
                whileHover={{ rotate: 12 }}
                className="w-20 h-20 mx-auto rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 text-3xl"
                style={{ background: item.color, boxShadow: `0 12px 32px ${item.color}40` }}
              >
                {item.emoji}
              </motion.div>
              <h3 className="font-bold text-foreground text-lg mb-1">{item.title}</h3>
              <p className="text-sm font-mono mb-3" style={{ color: item.color }}>{item.org}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Hackathons;
