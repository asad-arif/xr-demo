import React, { useEffect } from 'react';
import * as THREE from 'three';
import 'aframe';
import 'ar.js/aframe/build/aframe-ar.js'; // AR.js

const ARSurface = () => {
  useEffect(() => {
    // Dynamically load AR.js
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/aframe-ar.js@2.0.0/dist/aframe-ar.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <a-scene
      embedded
      arjs="sourceType: webcam; trackingMethod: best;"
      style={{ width: '100vw', height: '100vh' }}
    >
      {/* Camera */}
      <a-entity camera></a-entity>

      {/* Surface Detection */}
      <a-entity id="ar-surface-anchor" arjs-anchor="type: surface;">
        <a-entity
          gltf-model="url(/box.glb)" // Use your 3D model URL
          scale="0.3 0.3 0.3"
          position="0 0 0"
        />
      </a-entity>
    </a-scene>
  );
};

export default ARSurface;
