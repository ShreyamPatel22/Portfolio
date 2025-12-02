import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send, Linkedin, Github } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 px-6 bg-muted/10 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="text-glow-red">Get</span>{" "}
            <span className="text-glow-purple">In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
          <p className="text-center text-muted-foreground font-body text-lg mb-16 max-w-2xl mx-auto">
            Looking for internship opportunities or want to collaborate? Let's connect!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            className="md:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a 
              href="mailto:spate301@charlotte.edu"
              className="flex items-start gap-4 group"
            >
              <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-1">Email</h4>
                <p className="text-muted-foreground font-body text-sm group-hover:text-primary transition-colors">
                  spate301@charlotte.edu
                </p>
              </div>
            </a>

            <a 
              href="tel:+19197208091"
              className="flex items-start gap-4 group"
            >
              <div className="p-3 bg-secondary/20 rounded-lg group-hover:bg-secondary/30 transition-colors">
                <Phone className="text-secondary" size={24} />
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-1">Phone</h4>
                <p className="text-muted-foreground font-body text-sm group-hover:text-secondary transition-colors">
                  (919) 720-8091
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/20 rounded-lg">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-1">Location</h4>
                <p className="text-muted-foreground font-body text-sm">Charlotte, NC</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-border">
              <h4 className="font-display font-semibold text-foreground mb-4">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/shreyam-patel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-muted rounded-lg hover:bg-secondary/20 transition-colors group"
                >
                  <Linkedin className="text-muted-foreground group-hover:text-secondary" size={20} />
                </a>
                <a
                  href="https://github.com/shreyam-patel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-muted rounded-lg hover:bg-primary/20 transition-colors group"
                >
                  <Github className="text-muted-foreground group-hover:text-primary" size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="md:col-span-3 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubmit}
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-6 py-4 bg-card border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-6 py-4 bg-card border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-6 py-4 bg-card border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-display font-semibold tracking-wider uppercase rounded-lg hover:shadow-[0_0_30px_hsl(0_100%_50%/0.3),0_0_30px_hsl(270_70%_55%/0.3)] transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Send size={20} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
