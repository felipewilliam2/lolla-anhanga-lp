import React, { useState } from 'react';
import { BedDouble, BusFront, Headset, Map, Wand2, Backpack, ChevronDown, Plus } from 'lucide-react';
import Button from './Button';

interface FeatureCardProps {
  icon: any;
  title: string;
  description: string;
  details: {
    title: string;
    items: string[];
  };
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  const cardId = `feature-card-${title.replace(/\s+/g, '-').toLowerCase()}`;
  const contentId = `content-${title.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div 
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      aria-controls={contentId}
      aria-labelledby={`${cardId}-title`}
      onClick={() => setIsOpen(!isOpen)}
      onKeyDown={handleKeyDown}
      className={`bg-white p-8 rounded-2xl shadow-xl transition-all duration-300 cursor-pointer border relative overflow-hidden group outline-none focus:ring-4 focus:ring-anhanga-blue/50
        ${isOpen 
          ? 'border-anhanga-blue ring-2 ring-anhanga-blue/20 -translate-y-2' 
          : 'border-gray-100 hover:shadow-2xl hover:-translate-y-1 hover:border-anhanga-yellow'
        }`}
    >
      <div className="flex justify-between items-start">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${isOpen ? 'bg-anhanga-blue text-white' : 'bg-anhanga-light text-anhanga-blue'}`}>
          <Icon size={32} strokeWidth={2} aria-hidden="true" />
        </div>
        <div className={`p-2 rounded-full transition-transform duration-300 ${isOpen ? 'rotate-180 bg-gray-100' : 'bg-transparent text-gray-400'}`}>
          <ChevronDown size={20} aria-hidden="true" />
        </div>
      </div>

      <h3 id={`${cardId}-title`} className="text-xl font-bold text-gray-900 mb-3 group-hover:text-anhanga-blue transition-colors">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>

      {/* Área Expandível */}
      <div 
        id={contentId}
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-80 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="pt-4 border-t border-gray-100">
          <h4 className="font-bold text-sm text-anhanga-darkBlue mb-3 flex items-center gap-2">
            <Plus size={14} className="text-anhanga-yellow" aria-hidden="true" />
            {details.title}
          </h4>
          <ul className="space-y-2">
            {details.items.map((item, idx) => (
              <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-anhanga-blue rounded-full mt-1.5 flex-shrink-0" aria-hidden="true"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {!isOpen && (
        <p className="text-xs text-anhanga-blue font-bold mt-2 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wide" aria-hidden="true">
          Ver detalhes
        </p>
      )}
    </div>
  );
};

const PackageFeatures: React.FC = () => {
  const features = [
    {
      icon: BedDouble,
      title: "Hospedagem Estratégica",
      description: "Hotéis selecionados com conforto e localização facilitada para o acesso ao festival.",
      details: {
        title: "Destaques e Upgrades:",
        items: [
          "Hotéis 4 estrelas na região da Berrini ou Paulista",
          "Café da manhã estendido (até 11h)",
          "Late checkout na segunda-feira (opcional)",
          "Opção de quarto Single, Duplo ou Triplo"
        ]
      }
    },
    {
      icon: BusFront,
      title: "Transporte Confortável",
      description: "Transfer ida e volta exclusivo para o evento. Chegue descansado e volte com segurança.",
      details: {
        title: "Logística Completa:",
        items: [
          "Ônibus executivo com ar-condicionado",
          "Embarque e desembarque dentro do hotel",
          "Horários flexíveis de ida",
          "Água a bordo no retorno"
        ]
      }
    },
    {
      icon: Headset,
      title: "Suporte Dedicado",
      description: "Grupo exclusivo no WhatsApp para suporte antes e durante toda a viagem.",
      details: {
        title: "Nossa Assistência:",
        items: [
          "Monitores Anhangá presencialmente no hotel",
          "Canal de emergência 24h durante o festival",
          "Dicas em tempo real sobre o evento",
          "Ajuda com check-in e orientações locais"
        ]
      }
    },
    {
      icon: Map,
      title: "Roteiros em SP",
      description: "Curadoria de locais para comer, passear e aproveitar o melhor de São Paulo nos horários livres.",
      details: {
        title: "Experiências Sugeridas:",
        items: [
          "Guia gastronômico (bares e restaurantes próximos)",
          "Roteiro cultural para a manhã pré-festival",
          "Indicação de after-parties oficiais",
          "Dicas de transporte público e segurança"
        ]
      }
    },
    {
      icon: Wand2,
      title: "Personalização",
      description: "Roteiros adaptados para famílias, casais ou grupos de amigos. Sua viagem, seu jeito.",
      details: {
        title: "Para cada perfil:",
        items: [
          "Família: Logística simplificada e quartos conjugados",
          "Grupos: Descontos progressivos acima de 4 pessoas",
          "Casal: Upgrade para Suíte Luxo disponível",
          "Solo: Opção de 'Match de Quarto' para economizar"
        ]
      }
    },
    {
      icon: Backpack,
      title: "Kit Conforto",
      description: "Mimos exclusivos Anhangá: água, snacks e itens essenciais para o festival.",
      details: {
        title: "O que vem no Kit:",
        items: [
          "Bag oficial Anhangá (Mochila saco)",
          "Capa de chuva reforçada (item essencial!)",
          "Snacks energéticos e água",
          "Protetor auricular e porta-documentos"
        ]
      }
    }
  ];

  return (
    <section id="pacote" className="py-24 bg-anhanga-light" aria-labelledby="features-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="features-heading" className="text-4xl font-black text-anhanga-darkBlue mb-4">
            Seu Pacote Completo para o Lolla 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cuidamos de toda a logística. Clique nos cards abaixo para ver os detalhes exclusivos de cada serviço.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 items-start">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="text-center">
          <Button text="Personalize sua experiência agora" />
        </div>
      </div>
    </section>
  );
};

export default PackageFeatures;