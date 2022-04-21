import {Canvas} from "@react-three/fiber";
import React from "react";
import Stars from "./stars/stars";

const StarsBackground = () => (
    <Canvas style={{position: "absolute", width: '100%', height: '100%'}} camera={{ position: [0, 0, 1] }}>
        <Stars />
    </Canvas>
)

export default StarsBackground
