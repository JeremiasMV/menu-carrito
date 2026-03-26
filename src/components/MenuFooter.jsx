import { Mail, Phone } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

function MenuFooter(){
    return (
        <footer className="bg-slate-950 text-white text-center py-6 border-t border-slate-800">
            <p className="text-sm text-gray-400">
                Desarrollado por <strong>Jeremías Martínez Villamar | .NET & React</strong>
            </p>

           <div className="flex justify-center gap-6 mb-4 mt-4">
            <a href="mailto:jeremias.mv7@gmail.com" className="hover:text-blue-400">
                 <Mail size={20} />
            </a>
            
            <a href="tel:+56987308245" className="hover:text-blue-400">
                 <Phone size={20} />
            </a>

            <a 
              href="https://github.com/JeremiasMV/menu-carrito"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
              >
                <FiGithub size={20} />
            </a>

            <a 
              href="https://www.linkedin.com/in/jeremias-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
              >
                <FiLinkedin size={20} />
            </a>
            
            </div>

        <p className="text-xs text-gray-500">
        © {new Date().getFullYear()} - Todos los derechos reservados
        </p>

        </footer>
    );
}

export default MenuFooter;