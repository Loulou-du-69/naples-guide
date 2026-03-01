import { useState } from "react";

const places = [
  {
    id: 1,
    name: "Museo Archeologico Nazionale",
    category: "Musée",
    emoji: "🏛️",
    duration: "3h",
    price: "€12",
    address: "Piazza Museo, 19",
    hours: "9h–18h30 (fermé mar.)",
    rating: 4.6,
    lat: 40.8535,
    lng: 14.2505,
    color: "#C8A97E",
    description: "L'un des plus grands musées archéologiques du monde. Abriteles trésors de Pompéi et Herculanum — mosaïques, fresques, statues de la collection Farnèse. Un incontournable absolu pour comprendre l'Antiquité napolitaine.",
    tips: ["Réservez en avance (très fréquenté)", "Prévoir 2h30 minimum", "Le « Cabinet secret » (art érotique romain) nécessite une demande spéciale"],
    highlight: "Les fresques et mosaïques de Pompéi, conservées depuis 2000 ans",
  },
  {
    id: 2,
    name: "Cappella Sansevero",
    category: "Art & histoire",
    emoji: "⛪",
    duration: "1h",
    price: "€8",
    address: "Via Francesco de Sanctis, 19/21",
    hours: "9h–19h (fermé mar.)",
    rating: 4.7,
    lat: 40.8493,
    lng: 14.2549,
    color: "#8B7355",
    description: "Petite chapelle baroque renfermant l'un des chefs-d'œuvre de la sculpture mondiale : le « Cristo Velato » de Sanmartino (1753). Le voile de marbre qui recouvre le Christ est d'un réalisme saisissant — une prouesse technique incompréhensible.",
    tips: ["Photos interdites à l'intérieur", "Réservation obligatoire en ligne", "Petite salle, mais chaque cm² est extraordinaire"],
    highlight: "Le Cristo Velato — un voile de marbre d'un réalisme stupéfiant",
  },
  {
    id: 3,
    name: "Parc Archéologique de Pompéi",
    category: "Site archéologique",
    emoji: "🌋",
    duration: "4h",
    price: "€16",
    address: "80045 Pompei (30 min en train)",
    hours: "9h–17h tous les jours",
    rating: 4.7,
    lat: 40.7512,
    lng: 14.4887,
    color: "#A0522D",
    description: "La cité romaine ensevelie par le Vésuve en 79 apr. J.-C., figée pour l'éternité. Arpentez les rues pavées, entrez dans les maisons, contemplez les moulages des victimes. Une expérience hors du temps, unique au monde.",
    tips: ["Partez tôt le matin (foule l'après-midi)", "Prenez le train Circumvesuviana depuis Gare Centrale", "Portez des chaussures confortables — terrain irrégulier"],
    highlight: "Les moulages des victimes et la Maison des Vettii",
  },
  {
    id: 4,
    name: "Duomo di Napoli",
    category: "Architecture",
    emoji: "⛩️",
    duration: "1h",
    price: "Gratuit",
    address: "Via Duomo, 147",
    hours: "8h30–19h30 tous les jours",
    rating: 4.7,
    lat: 40.8525,
    lng: 14.2593,
    color: "#6B5344",
    description: "La cathédrale gothique de Naples, dédiée à San Gennaro, patron de la ville. Son trésor renferme l'ampoule du sang du saint, qui se liquéfie trois fois par an — un miracle attendu avec ferveur par les Napolitains.",
    tips: ["Ne pas manquer la Chapelle Carafa et ses fresques", "La crypte est accessible librement", "Ambiance particulièrement belle en lumière du matin"],
    highlight: "La Chapelle de San Gennaro et son trésor baroque",
  },
  {
    id: 5,
    name: "Palazzo Reale",
    category: "Palais royal",
    emoji: "👑",
    duration: "2h",
    price: "€10",
    address: "Piazza del Plebiscito, 1",
    hours: "9h–20h (fermé mer.)",
    rating: 4.6,
    lat: 40.8362,
    lng: 14.2494,
    color: "#9B7E6E",
    description: "L'ancien palais des rois de Naples, dominant la majestueuse Piazza del Plebiscito. Appartements royaux somptueux, bibliothèque historique et théâtre de cour. La terrasse offre un panorama exceptionnel sur le golfe.",
    tips: ["L'entrée est gratuite le 1er dimanche du mois", "Le guide audio QR est disponible gratuitement", "Possibilité de visiter la terrasse sur certains créneaux horaires"],
    highlight: "Les appartements royaux et la vue sur la Piazza del Plebiscito",
  },
  {
    id: 6,
    name: "Certosa di San Martino",
    category: "Monastère & musée",
    emoji: "🏰",
    duration: "2h",
    price: "€6",
    address: "Largo S. Martino, 5 (Colline du Vomero)",
    hours: "8h30–16h (fermé mer.)",
    rating: 4.5,
    lat: 40.8436,
    lng: 14.2408,
    color: "#7A6252",
    description: "Ancien monastère charteux perché sur la colline du Vomero, offrant le plus beau panorama de Naples. Le musée abrite une extraordinaire collection de crèches napolitaines (presepi) et d'art baroque. Vue imprenable sur le Vésuve et le golfe.",
    tips: ["Montez en funiculaire depuis Toledo ou Montesanto", "La vue au coucher du soleil est magique", "La collection de presepi (crèches) est unique au monde"],
    highlight: "Le panorama sur Naples, le Vésuve et le golfe depuis la terrasse",
  },
  {
    id: 7,
    name: "Castel dell'Ovo",
    category: "Château",
    emoji: "🏯",
    duration: "1h",
    price: "Gratuit",
    address: "Via Eldorado, 3",
    hours: "Variable (en travaux partiels)",
    rating: 4.6,
    lat: 40.8283,
    lng: 14.2476,
    color: "#556B7D",
    description: "Le plus ancien château de Naples, posé sur son îlot dans le golfe. Fondé par les Normands au XIIe siècle, il offre une promenade au bord de l'eau et une vue magnifique sur le front de mer. Le quartier de Borgo Marinaro tout autour regorge de restaurants.",
    tips: ["Travaux de rénovation en cours — l'intérieur peut être limité", "Idéal pour une promenade en soirée", "Le Borgo Marinaro adjacent est parfait pour dîner face à la mer"],
    highlight: "La promenade sur l'îlot et la vue sur le golfe au coucher du soleil",
  },
  {
    id: 8,
    name: "L'Antica Pizzeria da Michele",
    category: "Gastronomie",
    emoji: "🍕",
    duration: "45min",
    price: "€6–8",
    address: "Via Cesare Sersale, 1",
    hours: "10h30–23h tous les jours",
    rating: 4.3,
    lat: 40.8498,
    lng: 14.2633,
    color: "#B5451B",
    description: "La pizzeria la plus légendaire de Naples, fondée en 1870. Menu minimaliste : Margherita ou Marinara. La pâte fine et moelleuse cuite au feu de bois est simplement parfaite. Rendue célèbre par le film « Mange, prie, aime ». File d'attente quasi assurée.",
    tips: ["Arrivez tôt ou en dehors des heures de pointe", "Seulement 2 pizzas au menu — choisissez Margherita", "Comptez 10–15 min d'attente en semaine"],
    highlight: "La Margherita à 6€ — la pizza napolitaine dans sa forme la plus pure",
  },
];

const categoryColors = {
  "Musée": "#C8A97E",
  "Art & histoire": "#8B7355",
  "Site archéologique": "#A0522D",
  "Architecture": "#6B5344",
  "Palais royal": "#9B7E6E",
  "Monastère & musée": "#7A6252",
  "Château": "#556B7D",
  "Gastronomie": "#B5451B",
};

function StarRating({ rating }) {
  return (
    <span style={{ color: "#C8A97E", fontSize: "0.8rem", letterSpacing: "0.05em" }}>
      {"★".repeat(Math.floor(rating))}{"☆".repeat(5 - Math.floor(rating))}
      <span style={{ color: "#999", marginLeft: 4, fontFamily: "'Crimson Text', serif" }}>{rating}</span>
    </span>
  );
}

export default function NaplesGuide() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("Tous");

  const categories = ["Tous", ...new Set(places.map(p => p.category))];
  const filtered = filter === "Tous" ? places : places.filter(p => p.category === filter);

  const place = selected ? places.find(p => p.id === selected) : null;

  return (
    <div style={{
      fontFamily: "'Crimson Text', Georgia, serif",
      background: "#1A1610",
      minHeight: "100vh",
      color: "#E8DCC8",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,500;0,600;1,300;1,500&display=swap');
        
        * { box-sizing: border-box; }
        
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #1A1610; }
        ::-webkit-scrollbar-thumb { background: #4A3A28; border-radius: 2px; }
        
        .place-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(200,169,126,0.15);
          border-radius: 2px;
          padding: 16px 18px;
          cursor: pointer;
          transition: all 0.25s ease;
          position: relative;
          overflow: hidden;
        }
        .place-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: transparent;
          transition: background 0.25s;
        }
        .place-card:hover {
          background: rgba(200,169,126,0.06);
          border-color: rgba(200,169,126,0.35);
          transform: translateX(2px);
        }
        .place-card:hover::before {
          background: #C8A97E;
        }
        .place-card.active {
          background: rgba(200,169,126,0.08);
          border-color: rgba(200,169,126,0.4);
        }
        .place-card.active::before {
          background: #C8A97E;
        }
        .filter-btn {
          background: transparent;
          border: 1px solid rgba(200,169,126,0.2);
          color: #A89070;
          padding: 5px 14px;
          border-radius: 20px;
          cursor: pointer;
          font-family: 'Crimson Text', serif;
          font-size: 0.85rem;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .filter-btn:hover, .filter-btn.active {
          background: rgba(200,169,126,0.12);
          border-color: #C8A97E;
          color: #C8A97E;
        }
        .tip-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          padding: 6px 0;
          border-bottom: 1px solid rgba(200,169,126,0.08);
          font-size: 0.9rem;
          color: #B8A888;
          line-height: 1.5;
        }
        .tip-item:last-child { border-bottom: none; }
        .back-btn {
          background: transparent;
          border: 1px solid rgba(200,169,126,0.25);
          color: #C8A97E;
          padding: 6px 16px;
          cursor: pointer;
          font-family: 'Crimson Text', serif;
          font-size: 0.9rem;
          border-radius: 1px;
          transition: all 0.2s;
          letter-spacing: 0.05em;
        }
        .back-btn:hover {
          background: rgba(200,169,126,0.1);
        }
        .badge {
          display: inline-block;
          padding: 2px 10px;
          border-radius: 1px;
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in { animation: fadeIn 0.3s ease forwards; }
        
        @media (max-width: 768px) {
          .main-layout { flex-direction: column !important; }
          .right-panel { position: relative !important; width: 100% !important; }
        }
      `}</style>

      {/* Background texture */}
      <div style={{
        position: "fixed", inset: 0, opacity: 0.03,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8A97E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* Header */}
      <div style={{
        borderBottom: "1px solid rgba(200,169,126,0.2)",
        padding: "24px 32px 20px",
        position: "relative", zIndex: 1,
        background: "linear-gradient(180deg, rgba(200,169,126,0.05) 0%, transparent 100%)",
      }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 300,
            color: "#E8DCC8",
            margin: 0,
            letterSpacing: "0.05em",
            fontStyle: "italic",
          }}>Napoli</h1>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.1rem",
            color: "#C8A97E",
            fontWeight: 300,
            letterSpacing: "0.1em",
          }}>— 5 au 8 mars 2025</span>
        </div>
        <p style={{
          color: "#7A6A58",
          fontSize: "0.85rem",
          margin: "6px 0 0",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}>
          {places.length} lieux · Culture & Histoire
        </p>
      </div>

      {/* Main layout */}
      <div className="main-layout" style={{ display: "flex", height: "calc(100vh - 100px)", position: "relative", zIndex: 1 }}>

        {/* Left panel — list */}
        <div style={{
          width: "min(420px, 100%)",
          overflowY: "auto",
          padding: "20px 20px",
          borderRight: "1px solid rgba(200,169,126,0.1)",
          flexShrink: 0,
        }}>
          {/* Filters */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20, paddingBottom: 16, borderBottom: "1px solid rgba(200,169,126,0.1)" }}>
            {categories.map(cat => (
              <button key={cat} className={`filter-btn ${filter === cat ? "active" : ""}`} onClick={() => setFilter(cat)}>
                {cat}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filtered.map(p => (
              <div
                key={p.id}
                className={`place-card ${selected === p.id ? "active" : ""}`}
                onClick={() => setSelected(selected === p.id ? null : p.id)}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <span style={{ fontSize: "1.1rem" }}>{p.emoji}</span>
                      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", fontWeight: 500, color: "#EAD8BC" }}>{p.name}</span>
                    </div>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                      <span className="badge" style={{ background: `${p.color}20`, color: p.color, border: `1px solid ${p.color}40` }}>
                        {p.category}
                      </span>
                      <span style={{ color: "#7A6A58", fontSize: "0.8rem" }}>{p.duration}</span>
                      <span style={{ color: "#C8A97E", fontSize: "0.8rem" }}>{p.price}</span>
                    </div>
                  </div>
                  <span style={{ color: selected === p.id ? "#C8A97E" : "#4A3A28", fontSize: "1.2rem", flexShrink: 0, marginTop: 2 }}>
                    {selected === p.id ? "−" : "+"}
                  </span>
                </div>

                {/* Expanded detail inline */}
                {selected === p.id && (
                  <div className="fade-in" style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid rgba(200,169,126,0.12)" }}>
                    <p style={{ color: "#C0A880", fontSize: "0.92rem", lineHeight: 1.65, margin: "0 0 12px" }}>{p.description}</p>
                    <div style={{
                      background: `${p.color}10`,
                      border: `1px solid ${p.color}25`,
                      borderRadius: 2,
                      padding: "10px 12px",
                      marginBottom: 12,
                    }}>
                      <p style={{ color: "#7A6A58", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 4px" }}>À ne pas manquer</p>
                      <p style={{ color: p.color, fontSize: "0.88rem", margin: 0, fontStyle: "italic" }}>{p.highlight}</p>
                    </div>
                    <div style={{ marginBottom: 10 }}>
                      <p style={{ color: "#7A6A58", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>Conseils pratiques</p>
                      {p.tips.map((t, i) => (
                        <div key={i} className="tip-item">
                          <span style={{ color: "#C8A97E", flexShrink: 0 }}>›</span>
                          {t}
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                      <div>
                        <p style={{ color: "#7A6A58", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 2px" }}>Adresse</p>
                        <p style={{ color: "#B8A888", fontSize: "0.85rem", margin: 0 }}>{p.address}</p>
                      </div>
                      <div>
                        <p style={{ color: "#7A6A58", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 2px" }}>Horaires</p>
                        <p style={{ color: "#B8A888", fontSize: "0.85rem", margin: 0 }}>{p.hours}</p>
                      </div>
                    </div>
                    <div style={{ marginTop: 10 }}>
                      <StarRating rating={p.rating} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div style={{ marginTop: 24, padding: "16px", borderTop: "1px solid rgba(200,169,126,0.1)", textAlign: "center" }}>
            <p style={{ color: "#4A3A28", fontSize: "0.75rem", letterSpacing: "0.08em", margin: 0, fontStyle: "italic" }}>
              Clique sur un lieu pour voir le détail
            </p>
          </div>
        </div>

        {/* Right panel — map placeholder & summary */}
        <div className="right-panel" style={{
          flex: 1,
          padding: "28px 32px",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}>

          {/* Map embed via Google Maps Static-style */}
          <div style={{
            borderRadius: 2,
            overflow: "hidden",
            border: "1px solid rgba(200,169,126,0.15)",
            position: "relative",
          }}>
            <iframe
              title="Naples Map"
              width="100%"
              height="340"
              style={{ display: "block", filter: "grayscale(30%) sepia(20%)" }}
              src={`https://maps.google.com/maps?q=${selected ? places.find(p=>p.id===selected)?.lat+","+places.find(p=>p.id===selected)?.lng : "40.8518,14.2681"}&z=${selected ? 15 : 13}&output=embed&hl=fr`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div style={{
              position: "absolute", top: 12, left: 12,
              background: "rgba(26,22,16,0.85)",
              backdropFilter: "blur(8px)",
              padding: "6px 12px",
              borderRadius: 2,
              border: "1px solid rgba(200,169,126,0.2)",
            }}>
              <span style={{ fontSize: "0.75rem", color: "#C8A97E", letterSpacing: "0.1em" }}>
                {selected ? places.find(p => p.id === selected)?.name : "NAPOLI — VUE D'ENSEMBLE"}
              </span>
            </div>
          </div>

          {/* Selected place highlight OR overview */}
          {place ? (
            <div className="fade-in" style={{
              background: `linear-gradient(135deg, ${place.color}12, transparent)`,
              border: `1px solid ${place.color}30`,
              borderRadius: 2,
              padding: "24px",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 16 }}>
                <div>
                  <span style={{ fontSize: "2rem" }}>{place.emoji}</span>
                  <h2 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.6rem", fontWeight: 500,
                    color: "#EAD8BC", margin: "8px 0 4px",
                    fontStyle: "italic",
                  }}>{place.name}</h2>
                  <StarRating rating={place.rating} />
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: "1.4rem", color: "#C8A97E", fontFamily: "'Cormorant Garamond', serif" }}>{place.price}</div>
                  <div style={{ color: "#7A6A58", fontSize: "0.8rem" }}>{place.duration}</div>
                </div>
              </div>
              <div style={{
                background: `${place.color}15`,
                borderLeft: `3px solid ${place.color}`,
                padding: "12px 16px",
                marginBottom: 16,
              }}>
                <p style={{ color: "#7A6A58", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 4px" }}>À ne pas manquer</p>
                <p style={{ color: place.color, fontStyle: "italic", margin: 0, lineHeight: 1.5 }}>{place.highlight}</p>
              </div>
              <p style={{ color: "#B8A888", lineHeight: 1.7, fontSize: "0.95rem", margin: 0 }}>{place.description}</p>
            </div>
          ) : (
            <div>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.2rem", fontWeight: 300,
                color: "#7A6A58", margin: "0 0 16px",
                letterSpacing: "0.1em", textTransform: "uppercase",
              }}>Votre séjour en un coup d'œil</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12 }}>
                {[
                  { label: "Jours", value: "4", sub: "Jeu 5 → Dim 8 mars" },
                  { label: "Lieux", value: places.length.toString(), sub: "sélectionnés pour vous" },
                  { label: "Budget moyen", value: "~€52", sub: "entrées + repas" },
                  { label: "Incontournables", value: "3", sub: "Musée · Pompéi · Sansevero" },
                ].map(stat => (
                  <div key={stat.label} style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(200,169,126,0.12)",
                    borderRadius: 2,
                    padding: "16px",
                    textAlign: "center",
                  }}>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", color: "#C8A97E", fontWeight: 300 }}>{stat.value}</div>
                    <div style={{ color: "#EAD8BC", fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 2 }}>{stat.label}</div>
                    <div style={{ color: "#4A3A28", fontSize: "0.75rem", fontStyle: "italic" }}>{stat.sub}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 20, padding: "16px 20px", background: "rgba(200,169,126,0.04)", border: "1px solid rgba(200,169,126,0.1)", borderRadius: 2 }}>
                <p style={{ color: "#7A6A58", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 8px" }}>Conseil du jour</p>
                <p style={{ color: "#B8A888", fontStyle: "italic", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
                  Commencez par la Cappella Sansevero et le musée archéologique le même jour — ils sont proches dans le centro storico. Réservez Pompéi pour le samedi matin, dès l'ouverture.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
