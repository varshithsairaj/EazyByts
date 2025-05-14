// src/components/Effects/AuroraEffect.js (or your chosen path)
import React from 'react';

const PurpleSectionAurora = () => {
    const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    zIndex: -1,
    // backgroundColor: '#04010a', // Even darker base if needed
  };

  // Configuration for DEEP PURPLE aurora blobs
  const blobsConfig = [
    {
      id: 'deepPurple1',
      top: '0vh',
      left: '5vw',
      width: '80vw', // Larger blobs for a more diffuse effect
      height: '80vh',
      bgColor: 'rgba(90, 40, 160, 0.22)',  // Deep, less saturated purple, lower alpha
      animationName: 'animateDeepPurple1',
      animationDuration: '30s',
    },
    {
      id: 'deepPurple2',
      top: '25vh',
      left: '30vw',
      width: '90vw',
      height: '90vh',
      bgColor: 'rgba(70, 20, 130, 0.2)', // Darker, more bluish purple, very low alpha
      animationName: 'animateDeepPurple2',
      animationDuration: '35s',
      animationDelay: '4s',
    },
    {
      id: 'deepPurple3',
      bottom: '0vh',
      right: '5vw',
      width: '85vw',
      height: '85vh',
      bgColor: 'rgba(110, 60, 180, 0.25)', // A slightly richer deep purple
      animationName: 'animateDeepPurple3',
      animationDuration: '28s',
    },
    {
      id: 'deepPurple4',
      top: '40vh',
      left: '-10vw', // Allow some to start off-screen for more dynamic entry
      width: '70vw',
      height: '70vh',
      bgColor: 'rgba(60, 30, 110, 0.18)', // Very dark, subtle purple
      animationName: 'animateDeepPurple4',
      animationDuration: '32s',
      animationDelay: '2s',
    }
  ];

  return (
    <>
      <div style={containerStyle}>
        {blobsConfig.map(blob => (
          <div
            key={blob.id}
            style={{
              position: 'absolute',
              top: blob.top,
              left: blob.left,
              right: blob.right,
              bottom: blob.bottom,
              width: blob.width,
              height: blob.height,
              background: `radial-gradient(circle, ${blob.bgColor} 0%, transparent 65%)`, // Fade out a bit quicker
              borderRadius: '50%',
              filter: 'blur(130px)', // Significantly increased blur
              opacity: 0.8, // Overall starting opacity of blobs
              animationName: blob.animationName,
              animationDuration: blob.animationDuration,
              animationIterationCount: 'infinite',
              animationTimingFunction: 'ease-in-out',
              animationDirection: 'alternate',
              animationDelay: blob.animationDelay || '0s',
            }}
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes animateDeepPurple1 {
          0% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          50% { transform: translate(50px, -70px) scale(1.15); opacity: 0.7; } /* Max opacity lower */
          100% { transform: translate(-25px, 35px) scale(0.9); opacity: 0.4; }
        }
        @keyframes animateDeepPurple2 {
          0% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          50% { transform: translate(-60px, 45px) scale(1.2); opacity: 0.65; }
          100% { transform: translate(30px, -20px) scale(0.85); opacity: 0.35; }
        }
        @keyframes animateDeepPurple3 {
          0% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          50% { transform: translate(70px, 20px) scale(1.1); opacity: 0.75; }
          100% { transform: translate(-35px, -40px) scale(0.9); opacity: 0.5; }
        }
        @keyframes animateDeepPurple4 {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.3; }
          33% { transform: translate(20px, -35px) scale(1.05) rotate(8deg); opacity: 0.55; }
          66% { transform: translate(-40px, 25px) scale(0.95) rotate(-6deg); opacity: 0.6; }
          100% { transform: translate(10px, 10px) scale(1) rotate(2deg); opacity: 0.35; }
        }
      `}</style>
    </>
  );
};
export default PurpleSectionAurora;