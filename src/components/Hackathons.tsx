import { motion } from "framer-motion";
import { Trophy, Zap, Code } from "lucide-react";

const items = [
  { icon: Zap, title: "AgentX Hackathon", org: "Dept of IT & Salesforce", color: "from-amber-500/20 to-orange-500/20" },
  { icon: Trophy, title: "Data Dynamo 2.0 Hackathon", org: "Dept of Data Science", color: "from-purple-500/20 to-pink-500/20" },
  { icon: Code, title: "Web Dev Workshops", org: "Coding competitions & workshops", color: "from-blue-500/20 to-cyan-500/20" },
];

const Hackathons = () => (
  <section className="section-padding bg-secondary/20 mesh-bg">
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-heading">
        <p className="subtitle">Competitions</p>
        <h2 className="text-4xl md:text-5xl font-bold gradient-text">Hackathons & Participation</h2>
      </motion.div>
      <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-2xl p-8 text-center elevated-shadow card-hover group relative overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto rounded-2xl gradient-bg flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <item.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-bold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{item.org}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Hackathons;
