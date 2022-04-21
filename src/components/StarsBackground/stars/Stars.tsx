import {PointMaterial, Points} from "@react-three/drei";
import React, {useRef, useState} from "react";
import {useFrame} from "@react-three/fiber";
import * as random from 'maath/random/dist/maath-random.esm'

const Stars = () => {
    const ref = useRef<any>(null)
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }))
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10
        ref.current.rotation.y -= delta / 15
    })
    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            {/* @ts-ignore */}
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} >
                {/* @ts-ignore */}
                <PointMaterial transparent color="#d3531a" size={0.005} sizeAttenuation depthWrite={false} />
            </Points>
        </group>
    )
}

export default Stars
