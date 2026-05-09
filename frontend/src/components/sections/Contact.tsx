import { motion } from "motion/react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { PORTFOLIO_DATA } from "../../data/content";

export function Contact() {
  const { contact } = PORTFOLIO_DATA;

  return (
    <section id="contact" className="px-6 md:px-16 max-w-[1440px] mx-auto py-24 md:py-32">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="glass-card p-12 md:p-24 relative overflow-hidden text-center"
      >
        <div className="rim-light absolute inset-0 pointer-events-none opacity-50"></div>
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary-dim/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10">
          <h2 className="font-display text-4xl md:text-6xl mb-6 text-on-surface">
            Initiate Contact
          </h2>
          <p className="font-sans text-lg text-on-surface-variant max-w-2xl mx-auto mb-16 leading-relaxed">
            I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 max-w-4xl mx-auto">
            <motion.a 
              href={`mailto:${contact.email}`}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center gap-4 group"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary-dim transition-colors">
                <Mail className="text-primary-dim w-8 h-8" />
              </div>
              <span className="font-mono text-xs uppercase text-on-surface-variant tracking-wider">Email</span>
              <span className="text-lg md:text-xl font-display group-hover:text-primary-dim transition-colors">{contact.email}</span>
            </motion.a>

            <motion.a 
              href={`tel:${contact.phone}`}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center gap-4 group"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary-dim transition-colors">
                <Phone className="text-primary-dim w-8 h-8" />
              </div>
              <span className="font-mono text-xs uppercase text-on-surface-variant tracking-wider">Phone</span>
              <span className="text-lg md:text-xl font-display">{contact.phone}</span>
            </motion.a>

            <motion.div 
              whileHover={{ y: -5 }}
              className="flex flex-col items-center gap-4 group cursor-default"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary-dim transition-colors">
                <MapPin className="text-primary-dim w-8 h-8" />
              </div>
              <span className="font-mono text-xs uppercase text-on-surface-variant tracking-wider">Location</span>
              <span className="text-lg md:text-xl font-display">{contact.location}</span>
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex justify-center items-center gap-3 bg-white/5 border border-white/10 px-8 py-4 font-mono hover:border-primary-dim hover:bg-primary-dim/5 transition-all duration-300"
            >
              <Github className="w-5 h-5 group-hover:text-primary-dim transition-colors" />
              GITHUB
            </a>
            
            <a 
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex justify-center items-center gap-3 bg-white/5 border border-white/10 px-8 py-4 font-mono hover:border-secondary hover:bg-secondary/5 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 group-hover:text-secondary transition-colors" />
              LINKEDIN
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
