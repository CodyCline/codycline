import * as React from "react";
import * as three from "three";
import * as glslify from "glslify";


export const ParticlePicture = ({children}) => {
    const ref = React.useRef(null);
    React.useEffect(() => {
		const scene = new THREE.scene();
		const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000);
		camera.position.z = 300;
		const renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);


		const geometry = new THREE.InstancedBufferGeometry();

		// positions
		const positions = new THREE.BufferAttribute(new Float32Array(4 * 3), 3);
		positions.setXYZ(0, -0.5, 0.5, 0.0);
		positions.setXYZ(1, 0.5, 0.5, 0.0);
		positions.setXYZ(2, -0.5, -0.5, 0.0);
		positions.setXYZ(3, 0.5, -0.5, 0.0);
		geometry.setAttribute('position', positions);

		// uvs
		const uvs = new THREE.BufferAttribute(new Float32Array(4 * 2), 2);
		uvs.setXYZ(0, 0.0, 0.0);
		uvs.setXYZ(1, 1.0, 0.0);
		uvs.setXYZ(2, 0.0, 1.0);
		uvs.setXYZ(3, 1.0, 1.0);
		geometry.setAttribute('uv', uvs);

		// index
		geometry.setIndex(new THREE.BufferAttribute(new Uint16Array([ 0, 2, 1, 2, 3, 1 ]), 1));
		const indices = new Uint16Array(this.numPoints);
		const offsets = new Float32Array(this.numPoints * 3);
		const angles = new Float32Array(this.numPoints);

		for (let i = 0; i < this.numPoints; i++) {
			offsets[i * 3 + 0] = i % this.width;
			offsets[i * 3 + 1] = Math.floor(i / this.width);

			indices[i] = i;

			angles[i] = Math.random() * Math.PI;
		}

		geometry.setAttribute('pindex', new THREE.InstancedBufferAttribute(indices, 1, false));
		geometry.setAttribute('offset', new THREE.InstancedBufferAttribute(offsets, 3, false));
		geometry.setAttribute('angle', new THREE.InstancedBufferAttribute(angles, 1, false));
		const uniforms = {
			uTime: { value: 0 },
			uRandom: { value: 1.0 },
			uDepth: { value: 2.0 },
			uSize: { value: 0.0 },
			uTextureSize: { value: new THREE.Vector2(this.width, this.height) },
			uTexture: { value: this.texture },
			uTouch: { value: null }
		};
		
		const material = new THREE.RawShaderMaterial({
			uniforms,
			vertexShader: glslify(require('./particle.vert')),
			fragmentShader: glslify(require('./particle.frag')),
			depthTest: false,
			transparent: true
		});
    })
    return (
        <div ref={ref}>{children}</div>
    )
}

