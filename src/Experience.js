import { useGLTF, OrbitControls, useTexture, Center } from "@react-three/drei";

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
        />
        <mesh
          geometry={model.nodes.poleLightB.geometry}
          position={model.nodes.poleLightB.position}
        />
      </Center>
      {/* <primitive object={model.scene} /> */}
    </>
  );
}
