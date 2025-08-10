import React, { useState } from 'react';

// --- Inline Styles (Simplified Presentation Style) ---
const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    minHeight: '100vh',
    backgroundColor: '#ffffff', // Clean white background
    color: '#333',
    lineHeight: 1.6,
  },
  header: {
    backgroundColor: '#2c3e50', // Dark blue-grey header
    color: 'white',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '100px', // Set a fixed height for the logo container
  },
  logo: {
    maxHeight: '100%', // Make the logo responsive to the container height
    width: 'auto', // Maintain aspect ratio
  },
  headerTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    margin: 0,
  },
  nav: {
    display: 'flex',
    gap: '1.5rem',
  },
  navLink: {
    color: '#ecf0f1', // Light grey links
    textDecoration: 'none',
    fontSize: '1rem',
    padding: '0.5rem 0',
    transition: 'color 0.2s ease',
  },
  navLinkHover: { // Add hover effect style
    color: '#000000', // Brighter blue on hover
  },
  main: {
    padding: '0', // Remove padding for full-width sections
  },
  heroSection: {
    backgroundColor: '#34495e', // Slightly lighter blue-grey
    color: 'white',
    padding: '4rem 2rem',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '40vh', // Give it some height
  },
  heroTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    maxWidth: '600px',
    marginBottom: '2rem',
    color: '#bdc3c7', // Lighter text color
  },
  modelsSection: {
    padding: '3rem 2rem',
    backgroundColor: '#ecf0f1', // Light grey background for contrast
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '2.5rem',
    color: '#2c3e50',
  },
  modelsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', // Responsive grid for models
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto', // Center the grid
  },
  modelCard: {
    backgroundColor: 'white',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    display: 'flex',
    flexDirection: 'column', // Stack content vertically
  },
  modelCardHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
  },
  modelImage: {
    width: '100%',
    height: '220px',
    objectFit: 'cover',
    display: 'block',
    cursor: 'pointer', // Indicate it's clickable for gallery
  },
  modelContent: {
    padding: '1.5rem',
    flexGrow: 1, // Allow content to fill space
    display: 'flex',
    flexDirection: 'column',
  },
  modelTitle: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: '#34495e',
  },
  modelDescription: {
    fontSize: '0.95rem',
    color: '#555',
    marginBottom: '1rem',
    flexGrow: 1, // Push button to the bottom
  },
  modelPrice: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#27ae60', // Green price
    marginBottom: '1rem',
  },
  contactSection: {
    padding: '3rem 2rem',
    textAlign: 'center',
    backgroundColor: '#f8f9fa', // Very light grey
  },
  contactText: {
    fontSize: '1.1rem',
    marginBottom: '1.5rem',
    color: '#555',
    maxWidth: '600px',
    margin: '0 auto 1.5rem auto',
  },
  button: {
    padding: '0.8rem 1.5rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'background-color 0.2s ease, transform 0.1s ease',
    display: 'inline-flex', // Align icon and text
    alignItems: 'center',
    gap: '0.5rem',
    textDecoration: 'none', // Remove underline from link-like buttons
  },
  whatsappButton: {
    backgroundColor: '#25D366', // WhatsApp green
    color: 'white',
  },
  whatsappButtonHover: {
    backgroundColor: '#1EAE54', // Darker green on hover
    transform: 'scale(1.03)',
  },
  footer: {
    backgroundColor: '#2c3e50',
    color: '#bdc3c7',
    textAlign: 'center',
    padding: '1.5rem',
    marginTop: '0', // Remove margin as sections are full-width
    fontSize: '0.9rem',
  },
  // --- Gallery Styles ---
  galleryOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  galleryImage: {
    maxWidth: '90%',
    maxHeight: '90%',
    objectFit: 'contain',
  },
  closeButton: {
    position: 'absolute',
    top: '20px',
    right: '30px',
    color: 'white',
    fontSize: '2.5rem', // Larger 'x'
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    padding: 0,
    lineHeight: '1', // Ensure vertical centering of 'x'
  },
  galleryNavButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    fontSize: '1.5rem',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'background-color 0.3s ease',
  },
  galleryNavButtonHover: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  prevButton: {
    left: '20px',
  },
  nextButton: {
    right: '20px',
  },
};

// --- Mock Data for Container Home Models (Updated to 2 models) ---
const containerHomeModels = [
  {
    id: 'model-locuinta-premium',
    name: ' Configurație locativă',
    description: `Experimentează viața modernă într-un spațiu optimizat și elegant. Ideală pentru locuințe permanente sau de vacanță, oferind confort și stil într-un design compact. Include finisaje de înaltă calitate și izolație superioară. Confort și stil în spații compacte Structura
Baza structurii stă în combinația inteligentă dintr-un schelet  metalic solid și elemente din lemn, pentru o rezistență optimă și un aspect cald, primitor.
Izolație
Pentru un interior confortabil indiferent de sezon, folosim o varietate de materiale termoizolante: polistiren, spumă poliuretanică, vată minerală și vată bazaltică – astfel adaptăm casa la nevoile tale în funcție de climă și buget.

Finisaje interior
Spațiul interior e finisat cu grijă și atenție la detalii:

rigips pentru suprafețe netede și moderne;

lambriu din lemn pentru o notă rustică și caldă;

lambriu sau panou PVC – opțiuni practice, ușor de întreținut;

izolație la nivelul pardoselii, pentru confort termic;

în final, alegi între parchet clasic sau linoleum, după stil și durabilitate dorită.

Finisaje exterior
Aspectul exterior este la fel de personalizabil:

lambriu din lemn pentru eleganță naturală;

lambriu PVC pentru o opțiune durabilă și fără întreținere;

polistiren acoperit cu plasă și masă de șpaclu, pentru un finisaj uniform și izolator;

sau efecțiune structurată, care adaugă textură și profunzime designului.

Sisteme electrice
Proiectat pentru confort și funcționalitate: iluminat interior și exterior, prize 220 V, toate configurate pentru utilitate maximă și siguranță.

Instalație sanitară
Echipat complet cu cabina de duș, chiuvetă și toaletă, pentru a asigura un spațiu complet și practic, gata de locuit.

Această casuta modulara reprezintă o combinație ideală între rezistenta, izolație performantă, design interior personalizabil și finisaje exterioare estetice – totul integrat armonios pentru confort și funcționalitate.`
    size: 'Casuta de cca. 15 mp','(personalizabil)'
    price: 'Începând de la 12.500 €',
    category: 'locuit',
    images: [ process.env.PUBLIC_URL + '/images/cl1.jpg',
      process.env.PUBLIC_URL + '/images/cl2.jpg',
      process.env.PUBLIC_URL + '/images/cl3.jpg',
      process.env.PUBLIC_URL + '/images/cl4.jpg',
      process.env.PUBLIC_URL + '/images/cl5.jpg',
      process.env.PUBLIC_URL + '/images/cl6.jpg',
      process.env.PUBLIC_URL + '/images/cl7.jpg',
      process.env.PUBLIC_URL + '/images/cl8.jpg',
      process.env.PUBLIC_URL + '/images/cl9.jpg'
      process.env.PUBLIC_URL + '/images/c20.jpg'
    ],
    thumbnail: process.env.PUBLIC_URL + '/images/cl9.jpg'
    },
  {
    id: 'model-comercial-inovativ',
    name: 'Soluția Afacerii Tale',
    description: 'Un spațiu comercial modular, ideal pentru birouri, magazine pop-up, cafenele sau evenimente. Design adaptabil nevoilor tale, cu posibilități multiple de personalizare interioară și exterioară. O soluție rapidă și cost-eficientă pentru extinderea afacerii.',
    size: 'Car vienez  de la 10 mp (personalizabil)',
    price: 'Incepand de la 5.500 €',
    category: 'comercial',
    images: [ process.env.PUBLIC_URL + '/images/cc1.jpg',
      process.env.PUBLIC_URL + '/images/cc2.jpg',
      process.env.PUBLIC_URL + '/images/cc3.jpg',
      process.env.PUBLIC_URL + '/images/cc4.jpg',
      process.env.PUBLIC_URL + '/images/cc5.jpg',
      process.env.PUBLIC_URL + '/images/cc6.jpg',
      process.env.PUBLIC_URL + '/images/cc7.jpg',
      process.env.PUBLIC_URL + '/images/cc8.jpg',
      process.env.PUBLIC_URL + '/images/cc9.jpg',
      process.env.PUBLIC_URL + '/images/cc10.jpg',
      process.env.PUBLIC_URL + '/images/cc11.jpg'
      process.env.PUBLIC_URL + '/images/cc12.jpg'
      process.env.PUBLIC_URL + '/images/cc13.jpg'
    ],
    thumbnail: process.env.PUBLIC_URL + '/images/cc3.jpg'
  },
];


// --- WhatsApp Configuration ---
const WHATSAPP_NUMBER = '+40745813445'; // !! REPLACE WITH YOUR ACTUAL WHATSAPP NUMBER (including country code)
const WHATSAPP_DEFAULT_MESSAGE = "Bună ziua! Sunt interesat să aflu mai multe despre casele container. Vă rog să mă contactați."; // Default message in Romanian

// --- Helper Function to create WhatsApp Link ---
const createWhatsAppLink = (message) => {
    // Basic validation for phone number format (can be improved)
    const phone = WHATSAPP_NUMBER.replace(/[^0-9+]/g, ''); // Keep only digits and +
    if (!phone) {
        console.error("Număr WhatsApp invalid configurat.");
        return '#'; // Return a safe link if number is invalid
    }
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

// --- Simple Link Component for Navigation ---
const NavLink = ({ href, children }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <a
            href={href}
            style={{ ...styles.navLink, ...(isHovered ? styles.navLinkHover : {}) }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
        </a>
    );
};

// --- WhatsApp Button Component ---
const WhatsAppButton = ({ message, children }) => {
    const [isHovered, setIsHovered] = useState(false);
    const link = createWhatsAppLink(message);

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                ...styles.button,
                ...styles.whatsappButton,
                ...(isHovered ? styles.whatsappButtonHover : {})
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Simple SVG for WhatsApp Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            {children}
        </a>
    );
};


// --- Model Card Component ---
const ModelCard = ({ model }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const inquiryMessage = `Bună ziua, sunt interesat de modelul "${model.name}". Puteți să-mi oferiți mai multe detalii?`; // Message in Romanian

  const openGallery = () => {
    if (model.images && model.images.length > 0) {
      setShowGallery(true);
      setCurrentImageIndex(0); // Start from the first image
    }
  };

  const closeGallery = (e) => {
    // Prevent closing if clicking on the image itself or nav buttons
    if (e.target === e.currentTarget) { // Only close if clicking on the overlay background
        setShowGallery(false);
        setCurrentImageIndex(0); // Reset index when closing
    }
  };

  const nextImage = (e) => {
    e.stopPropagation(); // Prevent closing overlay
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % model.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation(); // Prevent closing overlay
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + model.images.length) % model.images.length);
  };

  const [isPrevHovered, setIsPrevHovered] = useState(false);
  const [isNextHovered, setIsNextHovered] = useState(false);


  return (
    <div
      style={{ ...styles.modelCard, ...(isHovered && !showGallery ? styles.modelCardHover : {}) }} // Apply hover only if gallery is NOT open
      onMouseEnter={() => !showGallery && setIsHovered(true)} // Set hovered only if gallery is NOT open
      onMouseLeave={() => !showGallery && setIsHovered(false)} // Set hovered only if gallery is NOT open
    >
      <img
        src={model.thumbnail || (model.images && model.images[0]) || 'https://via.placeholder.com/300x200/cccccc/FFFFFF?text=No+Image'}
        alt={model.name}
        style={styles.modelImage}
        onClick={openGallery}
        onError={(e) => e.target.src = 'https://via.placeholder.com/300x200/cccccc/FFFFFF?text=Image+Error'}
      />
      <div style={styles.modelContent}>
        <h3 style={styles.modelTitle}>{model.name}</h3>
        <p style={styles.modelDescription}>
          <strong>Dimensiune:</strong> {model.size}<br />
          {model.description}
        </p>
        <p style={styles.modelPrice}>{model.price}</p>
        <WhatsAppButton message={inquiryMessage}>
          Întreabă despre acest Model
        </WhatsAppButton>
      </div>

      {/* Image Gallery Overlay */}
      {showGallery && model.images && model.images.length > 0 && (
        <div style={styles.galleryOverlay} onClick={closeGallery}>
          <button style={styles.closeButton} onClick={closeGallery}>&times;</button>

          {/* Previous Button */}
          {model.images.length > 1 && (
            <button
              style={{
                ...styles.galleryNavButton,
                ...styles.prevButton,
                ...(isPrevHovered ? styles.galleryNavButtonHover : {})
              }}
              onClick={prevImage}
              onMouseEnter={() => setIsPrevHovered(true)}
              onMouseLeave={() => setIsPrevHovered(false)}
            >
              &#10094; {/* Left arrow */}
            </button>
          )}

          <img
            src={model.images[currentImageIndex]}
            alt={`${model.name} - Imagine ${currentImageIndex + 1}`}
            style={styles.galleryImage}
            onClick={(e) => e.stopPropagation()} // Prevent closing overlay when clicking image
          />

          {/* Next Button */}
          {model.images.length > 1 && (
            <button
              style={{
                ...styles.galleryNavButton,
                ...styles.nextButton,
                ...(isNextHovered ? styles.galleryNavButtonHover : {})
              }}
              onClick={nextImage}
              onMouseEnter={() => setIsNextHovered(true)}
              onMouseLeave={() => setIsNextHovered(false)}
            >
              &#10095; {/* Right arrow */}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

// --- Main App Component ---
const App = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const displayedModels = containerHomeModels; // Always display all models

    return (
        <div style={styles.container}>
            {/* Header */}
            <header style={styles.header}>
              <div style={styles.logoContainer}>
                    <img
                      src="https://lime-bertha-77.tiiny.site/png/rsz_1rsz_1rsz_new_logo" // <--- YOUR LOGO URL GOES HERE
                      alt="Logo Companie"
                      style={styles.logo}
                    />
                  </div>
                   <nav style={styles.nav}>
                    <NavLink href="#home">Acasă</NavLink>
                    <NavLink href="#models">Modele</NavLink>
                    <NavLink href="#contact">Contact</NavLink>
                </nav>
            </header>

            {/* Main Content */}
            <main style={styles.main}>
                {/* Hero Section */}
                <section id="home" style={styles.heroSection}>
                    <h2 style={styles.heroTitle}>Locuințe Modulare, Reimaginate.</h2>
                    <p style={styles.heroSubtitle}>
                        Descoperă case mici, sustenabile și stilate. Perfecte pentru locuit minimalist, birouri sau case de vacanta.
                    </p>
                    <WhatsAppButton message={WHATSAPP_DEFAULT_MESSAGE}>
                        Contactează-ne pe WhatsApp
                    </WhatsAppButton>
                </section>

                {/* Models Section */}
                <section id="models" style={styles.modelsSection}>
                    <h2 style={styles.sectionTitle}>modelele noastre de casute modulare</h2>

                    {loading ? (
                        <div style={styles.loading}>Se încarcă modelele...</div>
                    ) : error ? (
                        <div style={styles.error}>Eroare la încărcarea modelelor: {error}</div>
                    ) : (
                        <div style={styles.modelsGrid}>
                            {displayedModels.map(model => (
                                <ModelCard key={model.id} model={model} />
                            ))}
                        </div>
                    )}
                </section>

                {/* Contact Section */}
                 <section id="contact" style={styles.contactSection}>
                    <h2 style={styles.sectionTitle}>Contacteaza-ne pentru oferte personalizate!</h2>
                    <p style={styles.contactText}>
                        Ești pregătit să transformi visul în realitate? Spune-ne ce personalizări ai în minte și discutăm împreună cum o livrăm rapid la tine. Pentru răspunsuri imediate, scrie-ne pe WhatsApp — suntem aici pentru tine!
                    </p>
                     <WhatsAppButton message={WHATSAPP_DEFAULT_MESSAGE}>
                        Discută cu Noi pe WhatsApp
                    </WhatsAppButton>
                </section>

            </main>

            {/* Footer */}
            <footer style={styles.footer}>
                &copy; {new Date().getFullYear()} Case Container SRL. Toate drepturile rezervate.
            </footer>
        </div>
    );
};

export default App;