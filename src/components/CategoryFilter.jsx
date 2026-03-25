import { motion, AnimatePresence } from 'framer-motion';

export function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2 px-4 scrollbar-hide">
      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelectCategory(category)}
          className={`px-6 py-3 rounded-full font-semibold text-sm whitespace-nowrap transition-all border-2 ${
            selectedCategory === category
              ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/30'
              : 'bg-slate-900/50 text-amber-400 hover:bg-slate-900/70 shadow-md border-amber-500/30'
          }`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
}