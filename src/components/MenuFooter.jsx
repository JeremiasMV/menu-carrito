import { footer, style } from "framer-motion/client";

function MenuFooter(){
    return (
        <footer className="bg-slate-950 text-white text-center py-6 border-t border-slate-800">
            <p className="text-sm text-gray-400">
                Desarrollado por <strong>Jeremías Martínez Villamar | .NET & React</strong>
            </p>

            <p className="text-sm text-gray-400">
                📧 <a href="mailto:jeremias.mv7@gmail.com" className="hover:text-blue-400">
                    jeremias.mv7@gmail.com
                </a>
            </p>

            <p className="text-sm text-gray-400">
                📱 <a href="tel:+56987308245" className="hover:text-blue-400">
                    +56987308245
                </a>
            </p>

            <p className="text-sm text-gray-400">
                💻{" "}
                <a
                href="https://github.com/JeremiasMV/menu-carrito.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
                >
                 GitHub 
                </a>
            </p>

            <p style={style.text}>
                🔗{" "}
                <a
                href="https://www.linkedin.com/in/jeremias-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400"
                >
                   LinkedIn 
                </a>
            </p>
        </footer>
    );
}

export default MenuFooter;