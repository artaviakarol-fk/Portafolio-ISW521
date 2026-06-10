document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       CARRUSEL (3 imágenes visibles)
    ========================== */

    const slides = document.querySelectorAll(".carousel-image");
    const dots = document.querySelectorAll(".dot");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(s => s.classList.remove("active"));
        dots.forEach(d => d.classList.remove("active-dot"));
        slides[index].classList.add("active");
        if (dots[index]) dots[index].classList.add("active-dot");
        currentSlide = index;
    }

    if (slides.length > 0) {
        showSlide(0);
        setInterval(() => {
            showSlide((currentSlide + 1) % slides.length);
        }, 4000);
    }

    /* ==========================
       APARICIÓN AL SCROLL
    ========================== */

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add("show");
        });
    }, { threshold: 0.1 });

    document
        .querySelectorAll(".status-card, .sidebar-card, .parts-item")
        .forEach(el => observer.observe(el));

    /* ==========================
       BOTONES ORDENAR
    ========================== */

    document.querySelectorAll(".btn-buy").forEach(btn => {
        btn.addEventListener("click", () => {
            if (btn.disabled) return;
            const nombre = btn.closest(".parts-item")
                .querySelector(".part-name").textContent;
            alert(`Solicitud enviada para: ${nombre}`);
        });
    });

    /* ==========================
       MODELO 3D — Toyota Hilux LN106
    ========================== */

    // Inyectar contenedor 3D después del hero-progress
    const heroSection = document.querySelector(".vehicle-hero");
    if (heroSection) {
        const container3D = document.createElement("div");
        container3D.id = "vehicle-3d-container";
        container3D.innerHTML = `
            <span class="model-controls-hint">🖱 Arrastrá para rotar · Scroll para zoom</span>
            <span class="model-label">Toyota Hilux LN106 · 1994 · 2.8L Diesel · Blanco Perla</span>
        `;
        heroSection.appendChild(container3D);
    }

    // Cargar Three.js y construir el modelo
    const threeScript = document.createElement("script");
    threeScript.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
    threeScript.onload = build3DModel;
    threeScript.onerror = () => {
        const c = document.getElementById("vehicle-3d-container");
        if (c) c.innerHTML = `<p style="color:#94a3b8;text-align:center;padding:60px;font-family:monospace">
            ⚠ Motor 3D no disponible. Verificá tu conexión.</p>`;
    };
    document.head.appendChild(threeScript);

});

/* ==========================
   BUILD 3D
========================== */

function build3DModel() {
    const container = document.getElementById("vehicle-3d-container");
    if (!container || typeof THREE === "undefined") return;

    const W = container.clientWidth || 700;
    const H = container.clientHeight || 340;

    // — Renderer —
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor(0x0f172a, 1);
    container.appendChild(renderer.domElement);

    // — Escena —
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0f172a, 18, 38);

    // — Cámara —
    const camera = new THREE.PerspectiveCamera(42, W / H, 0.1, 100);
    camera.position.set(6, 2.8, 7);
    camera.lookAt(0, 0.5, 0);

    // — Luces —
    scene.add(new THREE.AmbientLight(0xffffff, 0.45));

    const sun = new THREE.DirectionalLight(0xfff8e1, 1.3);
    sun.position.set(8, 12, 6);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    scene.add(sun);

    const fill = new THREE.DirectionalLight(0x6ea8fe, 0.5);
    fill.position.set(-6, 4, -5);
    scene.add(fill);

    const rim = new THREE.PointLight(0x3b82f6, 0.9, 18);
    rim.position.set(-4, 5, -4);
    scene.add(rim);

    // — Piso —
    const floor = new THREE.Mesh(
        new THREE.PlaneGeometry(30, 30),
        new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.9 })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    const grid = new THREE.GridHelper(22, 22, 0x1e3a5f, 0x1e3a5f);
    grid.material.opacity = 0.35;
    grid.material.transparent = true;
    scene.add(grid);

    // — Materiales —
    const MAT = {
        body: new THREE.MeshStandardMaterial({ color: 0xf0f4f8, roughness: 0.25, metalness: 0.65 }),
        chassis: new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.80, metalness: 0.30 }),
        glass: new THREE.MeshStandardMaterial({ color: 0x93c5fd, roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.55 }),
        tire: new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.95 }),
        rim: new THREE.MeshStandardMaterial({ color: 0xbababa, roughness: 0.20, metalness: 0.90 }),
        lightF: new THREE.MeshStandardMaterial({ color: 0xfef08a, emissive: 0xfde047, emissiveIntensity: 1.0 }),
        lightR: new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xef4444, emissiveIntensity: 0.6 }),
        dark: new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.7 }),
        exhaust: new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.5 }),
    };

    // — Grupo del vehículo —
    const car = new THREE.Group();
    scene.add(car);

    function addBox(w, h, d, mat, x, y, z, rx = 0, ry = 0) {
        const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
        m.position.set(x, y, z);
        m.rotation.set(rx, ry, 0);
        m.castShadow = true;
        m.receiveShadow = true;
        car.add(m);
        return m;
    }

    // Bastidor / chasis
    addBox(4.4, 0.22, 1.85, MAT.chassis, 0, 0.20, 0);

    // Cuerpo cabina
    addBox(2.05, 0.68, 1.75, MAT.body, -0.52, 0.73, 0);
    // Techo cabina
    addBox(1.78, 0.52, 1.65, MAT.body, -0.58, 1.28, 0);

    // Caja trasera (pickup bed)
    addBox(2.15, 0.42, 1.75, MAT.body, 1.18, 0.62, 0);
    // Frente caja
    addBox(0.08, 0.42, 1.75, MAT.body, 0.12, 0.62, 0);
    // Portón trasero
    addBox(0.08, 0.40, 1.75, MAT.chassis, 2.18, 0.62, 0);

    // Capó
    addBox(1.55, 0.07, 1.75, MAT.body, 0.97, 0.91, 0);

    // Parabrisas delantero (inclinado)
    const ws = new THREE.Mesh(new THREE.PlaneGeometry(1.60, 0.50), MAT.glass);
    ws.position.set(0.30, 1.13, 0);
    ws.rotation.y = Math.PI / 2;
    ws.rotation.z = -0.37;
    car.add(ws);

    // Vidrio trasero cabina
    const rg = new THREE.Mesh(new THREE.PlaneGeometry(1.60, 0.40), MAT.glass);
    rg.position.set(-1.48, 1.10, 0);
    rg.rotation.y = Math.PI / 2;
    rg.rotation.z = 0.26;
    car.add(rg);

    // Ventanas laterales
    [-0.875, 0.875].forEach(z => {
        const wl = new THREE.Mesh(new THREE.PlaneGeometry(1.55, 0.38), MAT.glass);
        wl.position.set(-0.52, 1.15, z);
        wl.rotation.y = z > 0 ? 0 : Math.PI;
        car.add(wl);
    });

    // Defensa delantera
    addBox(0.14, 0.40, 1.75, MAT.chassis, 1.76, 0.60, 0);
    // Defensa trasera
    addBox(0.14, 0.36, 1.75, MAT.chassis, -1.74, 0.56, 0);

    // Parrilla
    addBox(0.12, 0.24, 0.92, MAT.dark, 1.76, 0.50, 0);

    // Faros delanteros
    [-0.63, 0.63].forEach(z => addBox(0.11, 0.18, 0.30, MAT.lightF, 1.77, 0.71, z));
    // Luces traseras
    [-0.63, 0.63].forEach(z => addBox(0.11, 0.20, 0.30, MAT.lightR, -1.75, 0.62, z));

    // Espejos
    [-0.94, 0.94].forEach(z => addBox(0.24, 0.09, 0.07, MAT.chassis, 0.44, 1.09, z));

    // Escape
    const ex = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.55, 12), MAT.exhaust);
    ex.rotation.z = Math.PI / 2;
    ex.position.set(-1.55, 0.27, -0.77);
    car.add(ex);

    // — Ruedas —
    const wheelPos = [
        [1.32, 0.36, 1.02],
        [1.32, 0.36, -1.02],
        [-1.12, 0.36, 1.02],
        [-1.12, 0.36, -1.02],
    ];
    const wheelGroups = [];

    wheelPos.forEach(([x, y, z]) => {
        const wg = new THREE.Group();
        wg.position.set(x, y, z);

        const tire = new THREE.Mesh(
            new THREE.CylinderGeometry(0.36, 0.36, 0.28, 28), MAT.tire
        );
        tire.rotation.z = Math.PI / 2;
        wg.add(tire);

        const rim = new THREE.Mesh(
            new THREE.CylinderGeometry(0.23, 0.23, 0.30, 6), MAT.rim
        );
        rim.rotation.z = Math.PI / 2;
        wg.add(rim);

        const hub = new THREE.Mesh(
            new THREE.CylinderGeometry(0.065, 0.065, 0.32, 8), MAT.rim
        );
        hub.rotation.z = Math.PI / 2;
        wg.add(hub);

        car.add(wg);
        wheelGroups.push(wg);
    });

    // Ángulo de presentación
    car.rotation.y = -Math.PI * 0.10;

    /* ==========================
       CONTROLES ORBIT MANUAL
    ========================== */

    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };
    let rotY = -Math.PI * 0.10;
    let rotX = 0.20;
    let zoom = 10;

    const cvs = renderer.domElement;

    cvs.addEventListener("mousedown", e => {
        isDragging = true;
        prevMouse = { x: e.clientX, y: e.clientY };
    });
    cvs.addEventListener("mouseup", () => isDragging = false);
    cvs.addEventListener("mouseleave", () => isDragging = false);
    cvs.addEventListener("mousemove", e => {
        if (!isDragging) return;
        rotY += (e.clientX - prevMouse.x) * 0.008;
        rotX = Math.max(-0.55, Math.min(0.65,
            rotX + (e.clientY - prevMouse.y) * 0.005));
        prevMouse = { x: e.clientX, y: e.clientY };
    });
    cvs.addEventListener("wheel", e => {
        zoom = Math.max(5, Math.min(20, zoom + e.deltaY * 0.022));
        e.preventDefault();
    }, { passive: false });

    let lastTouch = null;
    cvs.addEventListener("touchstart", e => { lastTouch = e.touches[0]; });
    cvs.addEventListener("touchmove", e => {
        if (!lastTouch) return;
        const t = e.touches[0];
        rotY += (t.clientX - lastTouch.clientX) * 0.008;
        rotX = Math.max(-0.55, Math.min(0.65,
            rotX + (t.clientY - lastTouch.clientY) * 0.005));
        lastTouch = t;
        e.preventDefault();
    }, { passive: false });

    window.addEventListener("resize", () => {
        const w = container.clientWidth;
        const h = container.clientHeight;
        renderer.setSize(w, h);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
    });

    /* ==========================
       LOOP
    ========================== */

    function animate() {
        requestAnimationFrame(animate);

        // Ruedas girando
        wheelGroups.forEach(wg => { wg.rotation.x += 0.012; });

        // Auto-rotate suave cuando no se arrastra
        if (!isDragging) rotY += 0.004;

        // Posición orbital de la cámara
        camera.position.x = zoom * Math.sin(rotY) * Math.cos(rotX);
        camera.position.y = zoom * Math.sin(rotX) + 1.0;
        camera.position.z = zoom * Math.cos(rotY) * Math.cos(rotX);
        camera.lookAt(0, 0.6, 0);

        renderer.render(scene, camera);
    }
    animate();
}