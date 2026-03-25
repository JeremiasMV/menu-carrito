import { ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

export function CartButton({ itemCount, total, onClick }) {
  if (itemCount === 0) return null;

  return (
    <AnimatePresence>
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 px-6 py-4 rounded-full shadow-2xl hover:shadow-amber-500/50 transition-all z-50 flex items-center gap-3"
      >
        <div className="relative">
          <ShoppingCart className="size-6" />
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 bg-slate-950 text-amber-400 size-5 rounded-full flex items-center justify-center text-xs font-bold border border-amber-500/50"
          >
            {itemCount}
          </motion.span>
        </div>
        <div className="hidden sm:block text-left">
          <div className="text-xs opacity-90">Total</div>
          <div className="font-bold text-lg">${total.toLocaleString('es-CL')}</div>
        </div>
      </motion.button>
    </AnimatePresence>
  );
}