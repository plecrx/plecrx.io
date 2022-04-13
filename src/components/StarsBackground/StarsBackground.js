import {Canvas} from "@react-three/fiber";
import React from "react";
import Stars from "./Stars/Stars";

const StarsBackground = () => {
    return (
        <Canvas style={{position: "absolute", width: '100vw', height: '100vh'}} camera={{ position: [0, 0, 1] }}>
            <Stars />
        </Canvas>
    )
}

export default StarsBackground