import React from "react";

const Particles: React.FC = () => {
  const particles = Array.from({ length: 150 });

  return (
    <div className="particles-background">
      {particles.map((_, index) => {
        const size = Math.random() * 4 + 2; // Tamaños más variados
        const blur = Math.random() * 2; // Efecto de desenfoque
        return (
          <div
            key={index}
            className="particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 50}, ${Math.random() * 255}, 0.8)`, // Azul y morado
              animationDuration: `${Math.random() * 5 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
              filter: `blur(${blur}px)`, // Efecto de desenfoque
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Particles;
