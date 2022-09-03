import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'

const Box = (props: ThreeElements['mesh']) => {
    const mesh = useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    useFrame((state, delta) => (mesh.current.rotation.x += 0.1))

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? 1.5 : 1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

export const App = () => {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, -2, 0]} />
            <Box position={[3, 0, 1]} />
        </Canvas>
    )
}
