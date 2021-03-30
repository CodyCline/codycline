import * as React from "react";
import * as THREE from "three";

const Icosahedron = ({ children }: any) => {

	const rootRef = React.useRef<any>(null);
	React.useEffect(() => {

		let scene = new THREE.Scene();


		scene.background = new THREE.Color(0x444444);
		const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 50);
		camera.position.z = 30;

		scene.background = new THREE.Color(0x1F2124);
		const renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);

		rootRef.current.appendChild(renderer.domElement);
		const group = new THREE.Group();
		const geometry = new THREE.IcosahedronGeometry(15, 1);


		const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 1 });
		const meshMaterial = new THREE.MeshPhongMaterial({ color: 0x878787, emissive: 0x353535, side: THREE.DoubleSide, flatShading: true });
		const shadeMaterial = new THREE.ShaderMaterial({
			uniforms: {
				uTime: { value: 0.0 },
			},
			side: THREE.DoubleSide
		});

		const pointsMaterial = new THREE.PointsMaterial({
			color: 0xFFFFFF,
			size: 4,
			blending: THREE.AdditiveBlending,
			transparent: true,
			sizeAttenuation: false
		});
		const lights: any = [];

		lights[0] = new THREE.PointLight(0xd0d0d0, 1, 0);
		lights[1] = new THREE.PointLight(0xd0d0d0, 1, 0);
		lights[2] = new THREE.PointLight(0xd0d0d0, 1, 0);

		lights[0].position.set(0, 200, 0);
		lights[1].position.set(100, 200, 100);
		lights[2].position.set(- 100, - 200, - 100);

		scene.add(lights[0]);
		scene.add(lights[1]);
		scene.add(lights[2])

		const icosahedron = new THREE.Mesh(geometry, meshMaterial);
		group.add(new THREE.Points(geometry, pointsMaterial));
		group.add(new THREE.LineSegments(geometry, lineMaterial));
		group.add(icosahedron);
		scene.add(group);


		function renderMe() {
			requestAnimationFrame(renderMe);
			group.rotation.x += 0.0025;
			group.rotation.y += 0.0025;
			renderer.render(scene, camera);
		}
		renderMe();

		renderer.domElement.addEventListener("mousemove", onMouseMove, false);
		const raycaster = new THREE.Raycaster();
		function onMouseMove(event) {

			let activeFaceIndex = 0;
			raycaster.setFromCamera(
				{
					x: (event.clientX / renderer.domElement.clientWidth) * 2 - 1,
					y: -(event.clientY / renderer.domElement.clientHeight) * 2 + 1
				},
				camera
			);

			const intersects = raycaster.intersectObject(icosahedron, false);
			if (intersects.length > 0) {


			} else {

			}
		}

		// window.addEventListener("resize", () => {
		// 		camera.aspect = window.innerWidth / window.innerHeight;
		// 		camera.updateProjectionMatrix();
		// 		renderer.setSize(window.innerWidth, window.innerHeight);
		// 		requestAnimationFrame(renderMe)
		// 	},
		// 	false
		// );

		return () => {
			window.removeEventListener(`resize`, () => { }, false);
			renderer.domElement.removeEventListener(`mousemove`, onMouseMove, false);
		}

	}, []);
	return (
		<div ref={rootRef}>
			{children}
		</div>

	)
}