import React from 'react';

const HologramHeroBackground = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden">

            {/* ══════════════════════════════════════════════════════════════
          👇 PON AQUÍ LA URL DE TU IMAGEN (subida a imgur, cloudinary, etc.)
          Ejemplo: src="https://i.imgur.com/TU_CODIGO.jpg"
          ══════════════════════════════════════════════════════════════ */}
            <img
                src="https://i.imgur.com/Tm9Qlve.png"
                alt="Hologram background"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: '50% 30%' }}
            />

            {/* Gradiente oscuro izquierda (texto legible) */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        'linear-gradient(to right, rgba(1,4,14,0.82) 0%, rgba(1,4,14,0.50) 38%, rgba(1,4,14,0.10) 62%, rgba(1,4,14,0.04) 100%)',
                }}
            />

            {/* Gradiente oscuro parte superior (navbar legible) */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        'linear-gradient(to bottom, rgba(1,4,14,0.55) 0%, rgba(1,4,14,0.0) 22%)',
                }}
            />
        </div>
    );
};

export default HologramHeroBackground;
