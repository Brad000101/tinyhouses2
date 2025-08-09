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
  },  logo: {
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

// --- Mock Data for 4 Container Home Models ---
const containerHomeModels = [
  {
  id: 'model-solo',
  name: 'The Solo',
  description: 'Compact and efficient living. Ideal for singles or couples. Features a kitchenette, bathroom, and combined living/sleeping area.',
  size: '20ft Container (approx. 15 sqm)',
  price: 'Starting from $25,000', // Example price
  images: [
    'https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=612x612&w=0&k=20&c=UHeb1pGOw6ozr6utsenXHhV19vW6oiPIxDqhKCS2Llk=',
    'https://practigal.co.nz/cdn/shop/products/33333.jpg?v=1671053105&width=1445'
  ],
  thumbnail: 'https://via.placeholder.com/300x200/3498db/FFFFFF?text=Solo+Thumb',
},
{
  id: 'model-duo',
  name: 'The Duo',
  description: 'Spacious design using a 40ft container. Offers a separate bedroom, full bathroom, kitchen, and comfortable living space.',
  size: '40ft Container (approx. 30 sqm)',
  price: 'Starting from $45,000',
  images: [
    'https://via.placeholder.com/600x400/2ecc71/FFFFFF?text=Duo+Living',
    'https://via.placeholder.com/600x400/2ecc71/EEEEEE?text=Duo+Bedroom',
    'https://via.placeholder.com/600x400/2ecc71/DDDDDD?text=Duo+Kitchen',
  ],
  thumbnail: 'https://via.placeholder.com/300x200/2ecc71/FFFFFF?text=Duo+Thumb',
},
{
  id: 'model-family',
  name: 'The Family Hub',
  description: 'Combining two containers for ample space. Features 2 bedrooms, a larger kitchen and living area, perfect for small families.',
  size: '2 x 40ft Containers (approx. 60 sqm)',
  price: 'Inquire for Price', // Price might be variable
  images: [
    'https://via.placeholder.com/600x400/e74c3c/FFFFFF?text=Family+Living',
    'https://via.placeholder.com/600x400/e74c3c/EEEEEE?text=Family+Bedroom1',
    'https://via.placeholder.com/600x400/e74c3c/DDDDDD?text=Family+Bedroom2',
  ],
  thumbnail: 'https://via.placeholder.com/300x200/e74c3c/FFFFFF?text=Family+Thumb',
},
{
  id: 'model-office',
  name: 'The Workspace',
  description: 'A dedicated container office space. Insulated, wired, and ready for work. Can be customized with desks and shelving.',
  size: '20ft Container (approx. 15 sqm)',
  price: 'Starting from $20,000',
  images: [
    'https://via.placeholder.com/600x400/f1c40f/FFFFFF?text=Office+Interior',
    'https://via.placeholder.com/600x400/f1c40f/EEEEEE?text=Office+Exterior',
  ],
  thumbnail: 'https://via.placeholder.com/300x200/f1c40f/FFFFFF?text=Office+Thumb',
},
];


// --- WhatsApp Configuration ---
const WHATSAPP_NUMBER = '+40745813445'; // !! REPLACE WITH YOUR ACTUAL WHATSAPP NUMBER (including country code)
const WHATSAPP_DEFAULT_MESSAGE = "Hi! I'm interested in learning more about your container homes."; // Default message

// --- Helper Function to create WhatsApp Link ---
const createWhatsAppLink = (message) => {
    // Basic validation for phone number format (can be improved)
    const phone = WHATSAPP_NUMBER.replace(/[^0-9+]/g, ''); // Keep only digits and +
    if (!phone) {
        console.error("Invalid WhatsApp number configured.");
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
  const inquiryMessage = `Hi, I'm interested in the "${model.name}" model. Can you tell me more?`;

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
      style={{ ...styles.modelCard, ...(isHovered ? styles.modelCardHover : {}) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
          <strong>Size:</strong> {model.size}<br />
          {model.description}
        </p>
        <p style={styles.modelPrice}>{model.price}</p>
        <WhatsAppButton message={inquiryMessage}>
          Inquire about this Model
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
            alt={`${model.name} - Image ${currentImageIndex + 1}`}
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
    // No filtering state needed anymore
    // Basic loading/error state can be kept if data were fetched async
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Simulate loading if needed, otherwise just display
    // useEffect(() => {
    //   setLoading(true);
    //   setTimeout(() => setLoading(false), 500); // Simulate short load
    // }, []);

    return (
        <div style={styles.container}>
            {/* Header */}
            <header style={styles.header}>
<div style={styles.logoContainer}>
      <img
        src="https://lime-bertha-77.tiiny.site/png/rsz_1rsz_1rsz_new_logo" // <--- YOUR LOGO URL GOES HERE
        alt="Company Logo"
        style={styles.logo}
      />
    </div>
                   <nav style={styles.nav}>
                    <NavLink href="#home">Home</NavLink>
                    <NavLink href="#models">Models</NavLink>
                    <NavLink href="#contact">Contact</NavLink>
                </nav>
            </header>

            {/* Main Content */}
            <main style={styles.main}>
                {/* Hero Section */}
                <section id="home" style={styles.heroSection}>
                    <h2 style={styles.heroTitle}>Modern Living, Reimagined.</h2>
                    <p style={styles.heroSubtitle}>
                        Discover sustainable and stylish small homes built from high-quality shipping containers. Perfect for minimalist living, offices, or guest houses.
                    </p>
                    <WhatsAppButton message={WHATSAPP_DEFAULT_MESSAGE}>
                        Contact Us on WhatsApp
                    </WhatsAppButton>
                </section>

                {/* Models Section */}
                <section id="models" style={styles.modelsSection}>
                    <h2 style={styles.sectionTitle}>Our Container Home Models</h2>
                    {loading ? (
                        <div style={styles.loading}>Loading Models...</div>
                    ) : error ? (
                        <div style={styles.error}>{error}</div>
                    ) : (
                        <div style={styles.modelsGrid}>
                            {containerHomeModels.map(model => (
                                <ModelCard key={model.id} model={model} />
                            ))}
                        </div>
                    )}
                </section>

                {/* Contact Section */}
                 <section id="contact" style={styles.contactSection}>
                    <h2 style={styles.sectionTitle}>Get Started Today</h2>
                    <p style={styles.contactText}>
                        Ready to discuss your container home project? Have questions about customization or delivery? Reach out to us directly via WhatsApp for the quickest response.
                    </p>
                     <WhatsAppButton message={WHATSAPP_DEFAULT_MESSAGE}>
                        Chat with Us on WhatsApp
                    </WhatsAppButton>
                </section>

            </main>

            {/* Footer */}
            <footer style={styles.footer}>
                &copy; {new Date().getFullYear()} Container Homes Inc. All rights reserved.
            </footer>
        </div>
    );
};

export default App;

