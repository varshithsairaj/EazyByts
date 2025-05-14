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
  };

  const blobsConfig = [
    {
      id: 'deepPurple1',
      top: '0vh',
      left: '5vw',
      width: '80vw',
      height: '80vh',
      bgColor: 'rgba(90, 40, 160, 0.22)',
      animationName: 'animateDeepPurple1', // This name now refers to the keyframe in App.css
      animationDuration: '30s',
    },
    {
      id: 'deepPurple2',
      top: '25vh',
      left: '30vw',
      width: '90vw',
      height: '90vh',
      bgColor: 'rgba(70, 20, 130, 0.2)',
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
      bgColor: 'rgba(110, 60, 180, 0.25)',
      animationName: 'animateDeepPurple3',
      animationDuration: '28s',
    },
    {
      id: 'deepPurple4',
      top: '40vh',
      left: '-10vw',
      width: '70vw',
      height: '70vh',
      bgColor: 'rgba(60, 30, 110, 0.18)',
      animationName: 'animateDeepPurple4',
      animationDuration: '32s',
      animationDelay: '2s',
    }
  ];

  // REMOVED: const keyframesCSS = `...`;
  // REMOVED: <style dangerouslySetInnerHTML={{ __html: keyframesCSS }} />

  return (
    <>
      {/* The style tag for keyframes is no longer needed here */}
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
              background: `radial-gradient(circle, ${blob.bgColor} 0%, transparent 60%)`,
              borderRadius: '50%',
              filter: 'blur(45px)', // Adjust this value based on testing!
              opacity: 0.8,
              animationName: blob.animationName, // Correctly refers to global keyframes
              animationDuration: blob.animationDuration,
              animationIterationCount: 'infinite',
              animationTimingFunction: 'ease-in-out',
              animationDirection: 'alternate',
              animationDelay: blob.animationDelay || '0s',
              willChange: 'transform, opacity, filter',
            }}
          />
        ))}
      </div>
    </>
  );
};

export default PurpleSectionAurora;