import { motion, AnimatePresence } from "framer-motion";

export default function SectionWrapper({ children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={children.type.name}         // unique per section
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.4 }}
        className="section-container"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
