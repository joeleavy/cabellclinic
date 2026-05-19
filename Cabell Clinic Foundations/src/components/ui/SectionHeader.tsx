import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string | ReactNode;
  align?: "left" | "center";
  className?: string;
}

const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <span className="inline-block text-xs uppercase tracking-widest text-gold font-semibold mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-display text-navy mb-6">{title}</h2>
      {description && (
        <p className="text-muted-foreground text-lg leading-relaxed font-body">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
