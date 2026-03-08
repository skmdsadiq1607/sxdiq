import { motion } from "framer-motion";
import { Trophy, Zap, Code, Star } from "lucide-react";

const items = [
  { icon: Zap, title: "AgentX Hackathon", org: "Dept of IT & Salesforce", gradient: "from-amber-500 to-orange-400", description: "Built AI agents for smart city management" },
  { icon: Trophy, title: "Data Dynamo 2.0", org: "Dept of Data Science", gradient: "from-purple-500 to-pink-400", description: "Competed in data science challenges" },
  { icon: Code, title: "Web Dev Workshops", org: "Coding competitions", gradient: "from-blue-500 to-cyan-400", description: "Participated in web development events" },
];

const Hackathons = () => (
  <section className="section-padding bg-secondary/20 mesh-bg relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-heading">
        <p className="subtitle">Competitions</p>
        <h2 className="text-4xl md:text-5xl font-bold gradient-text">Hackathons</h2>
      </motion.div>
      <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
            whileHover={{ y: -10, scale: 1.03 }}
            className="glass-card rounded-3xl p-8 text-center elevated-shadow group relative overflow-hidden"
          >
            {/* Top accent */}
            <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            <div className={`absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-gradient-to-br ${item.gradient} rounded-full opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700`} />
            
            <div className="relative z-10">
              <div className={`w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                <item.icon size={32} className="text-white" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{item.org}</p>
              <p className="text-xs text-muted-foreground/70">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Hackathons;
