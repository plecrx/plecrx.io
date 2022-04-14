import {Canvas} from "@react-three/fiber";
import React from "react";
import Stars from "./stars/Stars";

const StarsBackground = () => (
    <Canvas style={{position: "absolute", width: '100vw', height: '130vh'}} camera={{ position: [0, 0, 1] }}>
        <Stars />
    </Canvas>
)

export default StarsBackground
