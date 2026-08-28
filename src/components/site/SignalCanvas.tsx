import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";

type SignalCanvasProps = {
  className?: string;
};

/**
 * NagaVision Hosting motion layer: a small WebGL signal field that stays decorative,
 * uses GSAP only for smooth pointer targets, and disables itself for reduced motion.
 */
export function SignalCanvas({ className = "" }: SignalCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const canvas = document.createElement("canvas");
    canvas.setAttribute("aria-hidden", "true");
    canvas.className = "signal-canvas";
    container.appendChild(canvas);

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      container.dataset.fallback = "true";
      return () => canvas.remove();
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.z = 5.4;

    const root = new THREE.Group();
    root.rotation.x = -0.16;
    scene.add(root);

    const orb = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.22, 2),
      new THREE.MeshBasicMaterial({
        color: 0xff735d,
        wireframe: true,
        transparent: true,
        opacity: 0.22,
      }),
    );
    root.add(orb);

    const inner = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.74, 1),
      new THREE.MeshBasicMaterial({
        color: 0x8e6cff,
        wireframe: true,
        transparent: true,
        opacity: 0.34,
      }),
    );
    root.add(inner);

    const particleCount = 180;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      const radius = 1.65 + Math.random() * 1.15;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.cos(phi);
      positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        color: 0x38bdf8,
        size: 0.035,
        transparent: true,
        opacity: 0.58,
        sizeAttenuation: true,
      }),
    );
    root.add(particles);

    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    const onPointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      target.x = ((event.clientX - rect.left) / rect.width - 0.5) * 0.38;
      target.y = ((event.clientY - rect.top) / rect.height - 0.5) * -0.28;
    };
    container.addEventListener("pointermove", onPointerMove, { passive: true });

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      if (!width || !height) return;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(container);
    resize();

    const spin = { value: 0 };
    const tween = reducedMotion
      ? null
      : gsap.to(spin, { value: Math.PI * 2, duration: 24, ease: "none", repeat: -1 });

    const render = () => {
      pointer.x += (target.x - pointer.x) * 0.045;
      pointer.y += (target.y - pointer.y) * 0.045;
      root.rotation.y = spin.value + pointer.x;
      root.rotation.x = -0.16 + pointer.y;
      particles.rotation.y = spin.value * -0.34;
      renderer.render(scene, camera);
    };
    gsap.ticker.add(render);

    return () => {
      gsap.ticker.remove(render);
      tween?.kill();
      observer.disconnect();
      container.removeEventListener("pointermove", onPointerMove);
      particleGeometry.dispose();
      (particles.material as THREE.Material).dispose();
      orb.geometry.dispose();
      (orb.material as THREE.Material).dispose();
      inner.geometry.dispose();
      (inner.material as THREE.Material).dispose();
      renderer.dispose();
      canvas.remove();
    };
  }, []);

  return (
    <div ref={containerRef} className={`signal-canvas-wrap ${className}`} aria-hidden="true" />
  );
}
