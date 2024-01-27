 import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Model } from './Scenes'
import { motion } from "framer-motion";
  
export default function Model3d() {
 
 
  return (
    <Canvas style={{ backgroundColor: '#13080E' , height:'25rem',width:'90vw'}}>
      <ambientLight intensity={0.9} />
      <spotLight position={[11, 18, 11]} angle={0.15} />
      <pointLight position={[10, 10, 10]} />
     
        <Model  scale={[1.6,2,1.6]} position={[0,-1.4,0]} rotation={[-Math.PI, 3.09, -Math.PI]}/>
   
        <OrbitControls  
        minPolarAngle={Math.PI / 3} //2 for no up and no down , three for up and down
        maxPolarAngle={Math.PI - Math.PI / 3} enableZoom={false} />
    </Canvas>
     )
}
