import React from 'react';
import { Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0f1624] border-t border-[#2563eb]/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="text-2xl font-bold text-[#3b82f6]">OptimizApp</span>
            <p className="text-gray-400 mt-2">Solutions SAS</p>
          </div>
          
          <div>
            <span className="text-sm font-semibold text-gray-300 mb-4 block">Legal</span>
            <nav className="space-y-2">
              <a
                href="https://optimizapp.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-[#3b82f6] transition-colors text-sm"
              >
                Política de privacidad
              </a>
              <a
                href="https://optimizapp.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-[#3b82f6] transition-colors text-sm"
              >
                Términos y condiciones
              </a>
            </nav>
          </div>
          
          <div>
            <span className="text-sm font-semibold text-gray-300 mb-4 block">Síguenos</span>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/optimizapp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#3b82f6] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/optimizapp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#3b82f6] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com/optimizapp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#3b82f6] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#2563eb]/20 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 OptimizApp Solutions SAS. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;