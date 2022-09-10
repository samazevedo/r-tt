import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { useSpring, animated, config } from '@react-spring/three'

const Box = (props: ThreeElements['mesh']) => {
    const mesh = useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const { scale } = useSpring({
        scale: active ? 2.5 : 1,
        config: config.wobbly,
    })

    useFrame(({ clock }) => {
        const a = clock.getElapsedTime()
        mesh.current.rotation.x = a
    })
    return (
        <animated.mesh
            scale={scale}
            onClick={() => setActive(!active)}
            ref={mesh}
            onPointerMove={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <boxBufferGeometry />
            <meshPhongMaterial color={hovered ? 'pink' : 'lime'} />
        </animated.mesh>
    )
}

export const AnimatedBox = () => {
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
