import React from 'react';
import { UserCheck, ShieldCheck, HeartHandshake } from 'lucide-react';

const WhyUs: React.FC = () => {
  return (
    <section id="diferenciais" className="py-20 bg-white" aria-labelledby="why-us-heading">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Static Image Column */}
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              {/* Image Display */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl rotate-2 group-hover:rotate-0 transition-all duration-500 w-full aspect-[4/3] bg-gray-100">
                 <img 
                    src="https://eletrovibez.com/wp-content/uploads/2025/01/Lollapalooza-Brasil-2025-anuncia-line-up-dividido-por-dia-e-e-inicia-vendas-do-Lolla-Double-e-Lolla-Day-1155x770.jpg" 
                    alt="Multidão feliz em um festival de música com confetes e luzes" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-anhanga-darkBlue/80 via-transparent to-transparent opacity-60"></div>
                  
                  <div className="absolute bottom-6 left-6 text-white max-w-xs">
                     <p className="font-bold text-lg mb-1">A vibe é sua.</p>
                     <p className="text-sm text-gray-200">A logística é nossa.</p>
                  </div>
              </div>
              
              {/* Decorative blob behind */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-anhanga-yellow rounded-3xl opacity-20 transform rotate-6 transition-transform group-hover:rotate-3"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 id="why-us-heading" className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              Por que viajar com a <span className="text-anhanga-blue">Anhangá Viagens</span>?
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4 group">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-yellow-100 group-hover:bg-anhanga-yellow transition-colors duration-300 rounded-full flex items-center justify-center text-anhanga-darkBlue">
                    <UserCheck size={24} aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Atendimento Personalizado</h3>
                  <p className="text-gray-600">Não somos robôs. Você fala com especialistas reais que entendem suas necessidades e montam o pacote ideal.</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-blue-100 group-hover:bg-anhanga-blue transition-colors duration-300 rounded-full flex items-center justify-center text-anhanga-blue group-hover:text-white">
                    <ShieldCheck size={24} aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Experiência e Segurança</h3>
                  <p className="text-gray-600">Curadoria profissional de hotéis e transportes. Monitoramos tudo para garantir sua segurança em São Paulo.</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-green-100 group-hover:bg-green-500 transition-colors duration-300 rounded-full flex items-center justify-center text-green-600 group-hover:text-white">
                    <HeartHandshake size={24} aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Acompanhamento Completo</h3>
                  <p className="text-gray-600">Desde o planejamento até o retorno para casa, estamos ao seu lado garantindo que tudo saia perfeito.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;