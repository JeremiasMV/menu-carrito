import { Pizza, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const phones = [
  { label: "+56 9 44424094", number: "+56944424094" },
  { label: "+56 9 75976976", number: "+56975976976" }
];

export function MenuHeader({ selectedPhone, onPhoneChange }) {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 shadow-2xl border-b border-amber-500/20"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }}>
            <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-full p-3 shadow-lg">
              <Pizza className="size-8 text-slate-950" />
            </div>

            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                Las Supremas Mal Lea
              </h1>
              <p className="text-amber-200/70 text-sm">Pizza casera auténtica</p>
            </div>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center gap-2">
            <span className="text-amber-400 text-sm font-medium flex items-center gap-2">
              <Phone className="size-4" />
              Llama ya:
            </span>

            <div className="flex gap-2">
              {phones.map((phone) => (
                <button
                  key={phone.number}
                  onClick={() => onPhoneChange(phone.number)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedPhone === phone.number
                      ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-lg shadow-amber-500/30'
                      : 'bg-slate-800/50 text-amber-400 hover:bg-slate-800 border border-amber-500/30'
                  }`}
                >
                  {phone.label}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </motion.header>
  );
}