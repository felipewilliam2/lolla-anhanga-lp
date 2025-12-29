import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { MapPin, Navigation, Bus, AlertTriangle } from 'lucide-react';

const VenueMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapContainerRef.current && !mapInstanceRef.current) {
      // Coordenadas
      const interlagosCoords: [number, number] = [-23.701186, -46.697076];
      // Coordenada aproximada da região da Berrini (Hotel sugerido)
      const hotelCoords: [number, number] = [-23.6096, -46.6968];

      // Inicializar mapa
      const map = L.map(mapContainerRef.current, {
        center: interlagosCoords,
        zoom: 13,
        scrollWheelZoom: false, // Desabilitar zoom com scroll para não atrapalhar a navegação da página
        zoomControl: true,
        // Melhora a acessibilidade do teclado
        keyboard: true,
        keyboardPanDelta: 80
      });

      // Adicionar camada de tiles (OpenStreetMap - Estilo Clean)
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
      }).addTo(map);

      // Acessibilidade dos controles de Zoom (Injetando labels em português)
      const zoomInBtn = mapContainerRef.current.querySelector('.leaflet-control-zoom-in');
      const zoomOutBtn = mapContainerRef.current.querySelector('.leaflet-control-zoom-out');

      if (zoomInBtn) {
        zoomInBtn.setAttribute('aria-label', 'Aumentar zoom do mapa');
        zoomInBtn.setAttribute('title', 'Aumentar zoom');
      }
      if (zoomOutBtn) {
        zoomOutBtn.setAttribute('aria-label', 'Diminuir zoom do mapa');
        zoomOutBtn.setAttribute('title', 'Diminuir zoom');
      }

      // Ícone do Autódromo (Interlagos)
      const customIcon = L.divIcon({
        className: 'custom-pin',
        html: `<div role="img" aria-label="Pino pulsante indicando localização do Autódromo" style="position: relative; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;">
                 <div class="pin-pulse" style="position: absolute; inset: -10px;"></div>
                 <div style="background-color: #0056D2; border: 3px solid #FFD600; border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; z-index: 10; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                 </div>
               </div>`,
        iconSize: [40, 40],
        iconAnchor: [20, 20]
      });

      // Marcador do Autódromo
      const marker = L.marker(interlagosCoords, { 
        icon: customIcon,
        title: "Localização do Autódromo de Interlagos", // Tooltip nativo
        alt: "Marcador no mapa mostrando o Autódromo de Interlagos", // Texto alternativo
        keyboard: true // Permite focar no marcador
      })
        .addTo(map)
        .bindPopup(`
          <div style="text-align: center; font-family: 'Outfit', sans-serif;">
            <strong style="color: #003B8E; font-size: 14px;">Autódromo de Interlagos</strong><br/>
            <span style="font-size: 12px; color: #666;">Palco do Lollapalooza 2026</span>
          </div>
        `);
      
      // Ícone do Hotel (Berrini)
      const hotelIcon = L.divIcon({
        className: 'custom-hotel-pin',
        html: `<div role="img" aria-label="Ícone de Hotel" style="background-color: white; border: 3px solid #0056D2; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0056D2" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V7l8-4 8 4v14"/></svg>
               </div>`,
        iconSize: [40, 40],
        iconAnchor: [20, 20]
      });

      // Marcador do Hotel
      L.marker(hotelCoords, { 
        icon: hotelIcon,
        title: "Hotel Selecionado (Região Berrini)",
        alt: "Localização do Hotel na região da Berrini",
        keyboard: true
      })
      .addTo(map)
      .bindPopup(`
          <div style="text-align: center; font-family: 'Outfit', sans-serif;">
            <strong style="color: #0056D2; font-size: 14px;">Hotel & Ponto de Encontro</strong><br/>
            <span style="font-size: 12px; color: #666;">Região da Berrini</span>
          </div>
      `);

      // Linha da Rota
      const routePath = L.polyline([hotelCoords, interlagosCoords], {
        color: '#0056D2',
        weight: 5,
        opacity: 0.7,
        dashArray: '10, 15',
        lineCap: 'round',
        className: 'route-line'
      }).addTo(map);

      // Ajustar visualização para incluir rota completa
      const bounds = L.latLngBounds([hotelCoords, interlagosCoords]);
      map.fitBounds(bounds, { padding: [50, 50] });

      mapInstanceRef.current = map;
    }

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section className="relative z-20 -mt-10 mb-10 px-4 pointer-events-none md:pointer-events-auto" aria-label="Mapa da localização do evento">
      <div className="container mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row pointer-events-auto">
          
          {/* Informações */}
          <div className="w-full md:w-1/3 p-8 md:p-12 bg-white flex flex-col justify-center border-r border-gray-100">
            <div className="inline-flex items-center gap-2 text-anhanga-blue font-bold uppercase tracking-wider text-sm mb-4">
              <MapPin size={18} aria-hidden="true" /> Localização
            </div>
            
            <h3 className="text-3xl font-black text-anhanga-darkBlue mb-4 leading-tight">
              Autódromo de <br/><span className="text-anhanga-yellow">Interlagos</span>
            </h3>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              O lendário templo da música e velocidade em São Paulo. Um espaço gigante com mais de 600 mil m², onde a magia acontece.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-red-50 rounded-xl border border-red-100">
                <AlertTriangle className="text-red-500 shrink-0 mt-1" size={20} aria-hidden="true" />
                <div>
                  <h4 className="font-bold text-red-700 text-sm mb-1">O desafio logístico</h4>
                  <p className="text-xs text-red-600/80">
                    Interlagos fica a cerca de 25km do centro hoteleiro. Trens costumam lotar e apps de transporte têm preços exorbitantes na saída.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border border-green-100">
                <Bus className="text-green-600 shrink-0 mt-1" size={20} aria-hidden="true" />
                <div>
                  <h4 className="font-bold text-green-700 text-sm mb-1">A solução Anhangá</h4>
                  <p className="text-xs text-green-600/80">
                    Nosso transfer executivo te deixa e busca com conforto, ar-condicionado e segurança. Sem stress na volta pra casa.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-gray-400 text-sm">
              <span className="flex items-center gap-2">
                <Navigation size={14} aria-hidden="true" /> Av. Sen. Teotônio Vilela, 261
              </span>
              <span>São Paulo - SP</span>
            </div>
          </div>

          {/* Mapa */}
          <div className="w-full md:w-2/3 h-[400px] md:h-auto relative bg-gray-200">
            <div 
              ref={mapContainerRef} 
              className="w-full h-full z-0" 
              role="region" 
              aria-label="Mapa interativo mostrando o Autódromo de Interlagos e a rota do hotel"
              tabIndex={0}
            />
            
            {/* Overlay Gradient for seamless integration */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none hidden md:block z-[400]" aria-hidden="true"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default VenueMap;