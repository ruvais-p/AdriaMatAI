"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  varying vec2 vUv;

  // Simplex 2D noise
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
             -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
      dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = vUv;
    
    // Create animated noise
    float n = snoise(uv * 3.0 + uTime * 0.1);
    n += 0.5 * snoise(uv * 6.0 - uTime * 0.2);
    
    // Mouse interaction: distance from mouse
    float dist = distance(uv, uMouse);
    float mouseEffect = smoothstep(0.4, 0.0, dist);
    
    // Distort noise based on mouse
    float finalNoise = n + mouseEffect * 0.5;
    
    // Mix colors based on noise
    vec3 color = mix(uColor1, uColor2, clamp(finalNoise, 0.0, 1.0));
    
    // Add subtle vignetting
    float vignette = smoothstep(1.5, 0.2, length(uv - 0.5));
    color *= vignette;

    gl_FragColor = vec4(color, 1.0);
  }
`;

const ShaderPlane = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    const { viewport } = useThree();

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uMouse: { value: new THREE.Vector2(0, 0) },
            uColor1: { value: new THREE.Color("#050608") },
            uColor2: { value: new THREE.Color("#161b22") }, // Slightly lighter than bg
        }),
        []
    );

    useFrame((state) => {
        if (meshRef.current) {
            const material = meshRef.current.material as THREE.ShaderMaterial;
            material.uniforms.uTime.value = state.clock.getElapsedTime();

            // Map mouse from (-1 to 1) to (0 to 1) for UV mapping
            material.uniforms.uMouse.value.set(
                (state.mouse.x + 1) / 2,
                (state.mouse.y + 1) / 2
            );
        }
    });

    return (
        <mesh ref={meshRef} scale={[viewport.width, viewport.height, 1]}>
            <planeGeometry args={[1, 1]} />
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                transparent={true}
            />
        </mesh>
    );
};

const InteractiveBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
            <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 2]}>
                <ShaderPlane />
            </Canvas>
        </div>
    );
};

export default InteractiveBackground;
