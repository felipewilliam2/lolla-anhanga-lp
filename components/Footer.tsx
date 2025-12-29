import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
             <img 
                src="https://anhanga.tur.br/assets/anhanga-viagens-logo-header-DRYQTLeK.svg" 
                alt="Anhangá Viagens" 
                className="h-20 w-auto brightness-0 invert opacity-90"
             />
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-anhanga-yellow transition-colors" aria-label="Visite nosso Instagram"><Instagram size={24} aria-hidden="true" /></a>
            <a href="#" className="hover:text-anhanga-yellow transition-colors" aria-label="Visite nosso Facebook"><Facebook size={24} aria-hidden="true" /></a>
            <a href={WHATSAPP_LINK} className="hover:text-anhanga-yellow transition-colors" aria-label="Entre em contato por e-mail ou WhatsApp"><Mail size={24} aria-hidden="true" /></a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center md:text-left text-sm">
          <p className="mb-2">© {new Date().getFullYear()} Anhangá Viagens. Todos os direitos reservados.</p>
          <p>
            Anhangá Viagens - Especialistas em experiências. 
            <br className="md:hidden" />
             Pacotes de viagem para eventos e festivais.
          </p>
          <p className="mt-4 text-xs opacity-50">
            Nota: Este site comercializa pacotes de viagem (hospedagem, transporte e turismo). Ingressos para o evento não estão inclusos no pacote base.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;