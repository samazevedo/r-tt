// import * as THREE from 'three'
// import { Canvas, ThreeElements, useFrame } from '@react-three/fiber'
// import { Menu } from './Menu'
// import React, { useRef, useState } from 'react'
// import { images } from '../images'

// const Box = (props: ThreeElements['mesh']) => {
//     const meshRef = useRef<THREE.Mesh>(null!)
//     const [hover, setHover] = useState(false)
//     // const lerp = (start, end, t) => {
//     //     return start * (1 - t) + end * t
//     // }

//     // useFrame((state, delta) => {
//     //     meshRef.current.position.x = THREE.MathUtils.lerp(
//     //         meshRef.current.position.x,
//     //         active ? 100 : 0
//     //     )
//     // })

//     // MOUSE COORDINATES
//     let targetX = 0
//     let targetY = 0

//     // LOAD IMAGE TEXTURES FOR MESH
//     const textureOne = new THREE.TextureLoader().load(images.img1)
//     const textureTwo = new THREE.TextureLoader().load(images.img2)
//     const textureThree = new THREE.TextureLoader().load(images.img3)
//     const textureFour = new THREE.TextureLoader().load(images.img4)

//     const container = document.querySelector('main')
//     const links = document.querySelectorAll('li')
//     const scene = new THREE.Scene()
//     const perspective = 1000 // camera perspective on the z axis
//     const sizes = new THREE.Vector2(0, 0) // mesh sizes
//     const offset = new THREE.Vector2(0, 0) // mesh sizes
//     const lists = document.querySelector('ul')
//     console.log(typeof lists)

//     const uniforms = {
//         uTexture: { value: textureOne },
//         uAlpha: { value: 0.0 },
//         uOffset: { value: new THREE.Vector2(0.0, 0.0) },
//     }

//     links.forEach((link, idx) => {
//         link.addEventListener('mouseenter', () => {
//             switch (idx) {
//                 case 0:
//                     uniforms.uTexture.value = textureOne
//                     break
//                 case 1:
//                     uniforms.uTexture.value = textureTwo
//                     break
//                 case 2:
//                     uniforms.uTexture.value = textureThree
//                     break
//                 case 3:
//                     uniforms.uTexture.value = textureFour
//                     break
//             }
//         })
//     })

//     const addEventListeners = (element: any) => {
//         element.addEventListener('mouseenter', () => {
//             setHover(!hover)
//         })
//         element.addEventListener('mouseleave', () => {
//             setHover(false)
//         })
//     }

//     addEventListeners(lists)

//     return (
//         <mesh {...props} ref={meshRef} scale={4} position={[0, -3, 0]}>
//             <boxGeometry args={[2, 7, -2]} />
//             <meshStandardMaterial color='blue' />
//         </mesh>
//     )
// }

// export const CurveDistortion = () => {
//     return (
//         <>
//             <Menu />
//             <Canvas>
//                 <Box />
//             </Canvas>
//         </>
//     )
// }
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { useSpring, animated, config } from '@react-spring/three'

const Box = (props: ThreeElements['mesh']) => {
    const mesh = useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const { scale } = useSpring({
        scale: active ? 2.5 : 4,
        config: config.wobbly,
    })

    useFrame(({ clock }) => {
        const a = clock.getElapsedTime()
        mesh.current.rotation.y = a
    })

    // HANDLELING CAMERA
    const onWindowResize = () => {}

    // HANDLELING MOUSE EVENTS
    let targetX = 0
    let targetY = 0

    const onMouseMove = () => {
        window.addEventListener('mousemove', (e) => {
            targetX = e.clientX
            targetY = e.clientY
        })
    }

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

export const CurveDistortion = () => {
    return (
        <Canvas gl={{ alpha: false }}>
            <color attach='background' args={['#d3d3d3']} />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box />
        </Canvas>
    )
}
