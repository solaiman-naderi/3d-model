import {
  Sparkles,
  useGLTF,
  OrbitControls,
  useTexture,
  Center,
} from "@react-three/drei";

export default function Experience() {
  const model = useGLTF("/model/portal.glb");
  const bakedTexture = useTexture("/model/baked.jpg");
  bakedTexture.flipY = false;
  return (
    <>
      <color args={["#201919"]} attach="background" />
      <OrbitControls makeDefault />

      <Center>
        <mesh geometry={model.nodes.baked.geometry}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
        <mesh
          geometry={model.nodes.poleLightA.geometry}
          position={model.nodes.poleLightA.position}
        >
          <meshBasicMaterial color="#ffffe5" />
        </mesh>
        <mesh
          geometry={model.nodes.poleLightB.geometry}
          position={model.nodes.poleLightB.position}
        >
          <meshBasicMaterial color="#ffffe5" />
        </mesh>

        <mesh
          geometry={model.nodes.portalLight.geometry}
          position={model.nodes.portalLight.position}
          rotation={model.nodes.portalLight.rotation}
        ></mesh>
        <Sparkles size={6} scale={[4, 2, 4]} position-y={1} speed={0.5} />
      </Center>
      {/* <primitive object={model.scene} /> */}
    </>
  );
}
