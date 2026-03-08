import { motion } from "framer-motion";
import { Trophy, Zap, Code } from "lucide-react";

const items = [
  { icon: Zap, title: "AgentX Hackathon", org: "Dept of IT & Salesforce" },
  { icon: Trophy, title: "Data Dynamo 2.0 Hackathon", org: "Dept of Data Science" },
  { icon: Code, title: "Web Development Workshops", org: "Coding competitions & workshops" },
];

const Hackathons = () => (
  <section className="section-padding bg-secondary/30">
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-primary font-mono text-sm mb-2">Competitions</p>
        <h2 className="text-3xl md:text-4xl font-bold gradient-text">Hackathons & Participation</h2>
      </motion.div>
      <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass-card rounded-xl p-6 text-center glow-shadow"
          >
            <div className="w-12 h-12 mx-auto rounded-full gradient-bg flex items-center justify-center mb-4">
              <item.icon size={20} className="text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
            <p className="text-xs text-muted-foreground mt-1">{item.org}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Hackathons;
