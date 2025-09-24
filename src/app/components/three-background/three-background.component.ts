import { Component, ElementRef, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import * as THREE from 'three';

@Component({
    selector: 'app-three-background',
    standalone: true,
    template: `<canvas #threeCanvas class="three-background"></canvas>`,
    styleUrls: ['./three-background.component.scss']
})
export class ThreeBackgroundComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('threeCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

    private scene!: THREE.Scene;
    private camera!: THREE.PerspectiveCamera;
    private renderer!: THREE.WebGLRenderer;
    private particles!: THREE.Points;
    private geometryObjects: THREE.Mesh[] = [];
    private animationId!: number;
    private mouse = new THREE.Vector2();
    private time = 0;

    ngOnInit(): void { }

    ngAfterViewInit(): void {
        this.initThree();
        this.createParticles();
        this.createGeometry();
        this.animate();
        this.onWindowResize();
        window.addEventListener('resize', this.onWindowResize.bind(this));
        window.addEventListener('mousemove', this.onMouseMove.bind(this));
    }

    ngOnDestroy(): void {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        window.removeEventListener('resize', this.onWindowResize.bind(this));
        window.removeEventListener('mousemove', this.onMouseMove.bind(this));
        if (this.renderer) {
            this.renderer.dispose();
        }
    }

    private initThree(): void {
        // Scene
        this.scene = new THREE.Scene();

        // Camera
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.z = 5;

        // Renderer
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvasRef.nativeElement,
            alpha: true,
            antialias: true
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    private createParticles(): void {
        const particleCount = 1000;
        const positions = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 10;
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const material = new THREE.PointsMaterial({
            color: 0x64ffda,
            size: 0.02,
            transparent: true,
            opacity: 0.8
        });

        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);
    }

    private createGeometry(): void {
        // Create floating geometric shapes
        const shapes = [
            new THREE.BoxGeometry(0.5, 0.5, 0.5),
            new THREE.SphereGeometry(0.3, 16, 16),
            new THREE.ConeGeometry(0.3, 0.6, 8),
            new THREE.OctahedronGeometry(0.4)
        ];

        const materials = [
            new THREE.MeshBasicMaterial({ color: 0x64ffda, wireframe: true, transparent: true, opacity: 0.3 }),
            new THREE.MeshBasicMaterial({ color: 0xff6b6b, wireframe: true, transparent: true, opacity: 0.3 }),
            new THREE.MeshBasicMaterial({ color: 0x4ecdc4, wireframe: true, transparent: true, opacity: 0.3 }),
            new THREE.MeshBasicMaterial({ color: 0xffe66d, wireframe: true, transparent: true, opacity: 0.3 })
        ];

        for (let i = 0; i < 8; i++) {
            const geometry = shapes[Math.floor(Math.random() * shapes.length)];
            const material = materials[Math.floor(Math.random() * materials.length)];
            const mesh = new THREE.Mesh(geometry, material);

            mesh.position.set(
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20
            );

            mesh.rotation.set(
                Math.random() * Math.PI,
                Math.random() * Math.PI,
                Math.random() * Math.PI
            );

            this.geometryObjects.push(mesh);
            this.scene.add(mesh);
        }
    }

    private onMouseMove(event: MouseEvent): void {
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    private animate(): void {
        this.animationId = requestAnimationFrame(() => this.animate());
        this.time += 0.01;

        // Rotate particles
        this.particles.rotation.x += 0.001;
        this.particles.rotation.y += 0.002;

        // Animate geometry objects
        this.geometryObjects.forEach((obj, index) => {
            obj.rotation.x += 0.01 + index * 0.001;
            obj.rotation.y += 0.015 + index * 0.001;

            // Floating motion
            obj.position.y += Math.sin(this.time + index) * 0.01;
            obj.position.x += Math.cos(this.time + index * 0.5) * 0.005;

            // Mouse interaction
            const mouseInfluence = 0.1;
            obj.position.x += this.mouse.x * mouseInfluence * (index + 1) * 0.1;
            obj.position.y += this.mouse.y * mouseInfluence * (index + 1) * 0.1;
        });

        // Camera subtle movement
        this.camera.position.x += (this.mouse.x * 0.5 - this.camera.position.x) * 0.05;
        this.camera.position.y += (this.mouse.y * 0.5 - this.camera.position.y) * 0.05;
        this.camera.lookAt(this.scene.position);

        // Render
        this.renderer.render(this.scene, this.camera);
    }

    private onWindowResize(): void {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
}