'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { colors } from '@/lib/colors';

export const Background3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x0f1419, 0);
    containerRef.current.appendChild(renderer.domElement);

    camera.position.z = 50;

    // Particle geometry
    const particleCount = 100;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 200;
      positions[i + 1] = (Math.random() - 0.5) * 200;
      positions[i + 2] = (Math.random() - 0.5) * 100;

      velocities[i] = (Math.random() - 0.5) * 0.2;
      velocities[i + 1] = (Math.random() - 0.5) * 0.2;
      velocities[i + 2] = (Math.random() - 0.5) * 0.1;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Particle material
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x00bcd4,
      size: 2,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.6,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Hexagon geometries (floating shapes)
    const hexagons: THREE.LineSegments[] = [];
    for (let i = 0; i < 5; i++) {
      const geometry = new THREE.BufferGeometry();
      const vertices: number[] = [];
      const radius = 5 + Math.random() * 10;

      for (let j = 0; j < 6; j++) {
        const angle = (j / 6) * Math.PI * 2;
        vertices.push(
          Math.cos(angle) * radius,
          Math.sin(angle) * radius,
          0
        );
      }
      vertices.push(vertices[0], vertices[1], vertices[2]);

      geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices), 3));

      const material = new THREE.LineBasicMaterial({
        color: Math.random() > 0.5 ? 0x0066cc : 0x00bcd4,
        transparent: true,
        opacity: 0.4,
      });

      const hexagon = new THREE.LineSegments(geometry, material);
      hexagon.position.set(
        (Math.random() - 0.5) * 150,
        (Math.random() - 0.5) * 150,
        (Math.random() - 0.5) * 50
      );

      hexagons.push(hexagon);
      scene.add(hexagon);
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update particles
      const positionAttribute = particlesGeometry.getAttribute('position');
      const positionArray = positionAttribute.array as Float32Array;

      for (let i = 0; i < particleCount * 3; i += 3) {
        positionArray[i] += velocities[i];
        positionArray[i + 1] += velocities[i + 1];
        positionArray[i + 2] += velocities[i + 2];

        // Wrap around
        if (Math.abs(positionArray[i]) > 100) velocities[i] *= -1;
        if (Math.abs(positionArray[i + 1]) > 100) velocities[i + 1] *= -1;
        if (Math.abs(positionArray[i + 2]) > 50) velocities[i + 2] *= -1;
      }
      positionAttribute.needsUpdate = true;

      // Rotate hexagons
      hexagons.forEach((hex, index) => {
        hex.rotation.x += 0.001 * (index + 1);
        hex.rotation.y += 0.0005 * (index + 1);
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 opacity-30"
      style={{ background: colors.navy }}
    />
  );
};
