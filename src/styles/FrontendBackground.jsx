import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const FrontendBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const container = mountRef.current;
        const width = window.innerWidth;
        const height = window.innerHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });

        renderer.setSize(width, height);
        renderer.setClearColor(0x0a1929, 1);
        container.appendChild(renderer.domElement);

        const elements = [
            "<div>", "</div>", "<span>", "{color:", "useState()", "useEffect()",
            "display: flex", "@media", "import React", "npm install", "<App />",
            "margin:", "padding:", "tailwind", "useState", ".map()", ".filter()",
            "onClick={}", "<main>", "<header>", "className=", "async/await",
            "{children}", "props", "components", "<html>", "git commit", "flex:",
            "grid-cols", "useState", "flex-1", "<nav>", "const", "let", "=>",
            "{styles}", "return", "export", "default", "<img/>", "<link>",
            "npm run", "yarn add", "push()", "pop()", "<React.Fragment>"
        ];

        const sprites = new THREE.Group();
        const fontLoader = new THREE.TextureLoader();

        elements.forEach((text, index) => {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.width = 256;
            canvas.height = 64;

            const colors = [
                '#61DAFB',
                '#38BDF8',
                '#00D8FF',
                '#2965F1',
                '#F0DB4F',
                '#61DBFB',
                '#38BDF8'
            ];

            context.fillStyle = colors[Math.floor(Math.random() * colors.length)];
            context.font = 'bold 32px monospace';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillText(text, 128, 32);

            const texture = new THREE.CanvasTexture(canvas);
            const spriteMaterial = new THREE.SpriteMaterial({
                map: texture,
                transparent: true,
                opacity: 0.7
            });

            const sprite = new THREE.Sprite(spriteMaterial);

            const phi = Math.random() * Math.PI * 2;
            const theta = Math.random() * Math.PI;
            const r = 900 + Math.random() * 20;

            sprite.position.x = r * Math.sin(theta) * Math.cos(phi);
            sprite.position.y = r * Math.sin(theta) * Math.sin(phi);
            sprite.position.z = r * Math.cos(theta);

            sprite.scale.set(10, 2.5, 1);
            sprites.add(sprite);
        });

        scene.add(sprites);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0x61DAFB, 1);
        pointLight.position.set(0, 0, 50);
        scene.add(pointLight);

        camera.position.z = 60;

        const handleResize = () => {
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight;

            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(newWidth, newHeight);
        };

        window.addEventListener('resize', handleResize);

        let frame = 0;
        const animate = () => {
            frame = requestAnimationFrame(animate);

            sprites.rotation.y += 0.0005;
            sprites.rotation.x += 0.0002;

            sprites.children.forEach((sprite, index) => {
                const time = Date.now() * 0.001;
                sprite.position.y += Math.sin(time + index) * 0.02;
                sprite.position.x += Math.cos(time + index) * 0.02;

                const maxDist = 50;
                const dist = sprite.position.length();
                if (dist > maxDist) {
                    sprite.position.multiplyScalar(maxDist / dist);
                }
            });

            camera.position.x = Math.sin(frame * 0.0002) * 40;
            camera.position.z = Math.cos(frame * 0.0002) * 40;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(frame);
            renderer.dispose();
            sprites.children.forEach(sprite => {
                sprite.material.map.dispose();
                sprite.material.dispose();
            });
            if (container) {
                container.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div
            ref={mountRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                overflow: 'hidden'
            }}
        />
    );
};

export default FrontendBackground;