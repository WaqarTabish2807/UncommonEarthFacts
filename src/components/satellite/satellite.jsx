import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export default function Satellite() {
	const satellite = useGLTF("./sputnik/scene.gltf")
	const satelliteRef = useRef()

	useFrame((state, delta) => {
		satelliteRef.current.rotation.x += 0.2 * delta
		satelliteRef.current.rotation.z += 0.1 * delta
	})

	return (
		<primitive
			ref={satelliteRef}
			object={satellite.scene}
			scale={0.3}
			rotation={[Math.PI * 0, Math.PI * 0, Math.PI * 0]}
			position={[0, -0.2, 0]}
		/>
	)
}
