import { Canvas } from "@react-three/fiber";
import { XR, createXRStore } from "@react-three/xr";
import { useEffect, useState } from "react";

const store = createXRStore();

function XRText() {
  const [red, setRed] = useState(false);
  const [isXrSupported, setIsXrSupported] = useState(false);

  useEffect(() => {
    if (navigator.xr) {
      console.log("WebXR supported!");
      setIsXrSupported(true);
    } else {
      console.log("WebXR not supported.");
      setIsXrSupported(false);
    }
  }, []);

  return (
    <>
      {isXrSupported ? (
        <div>
          <button onClick={() => store.enterAR()}>Enter AR</button>
          <Canvas>
            <XR store={store}>
              <mesh
                pointerEventsType={{ deny: "grab" }}
                onClick={() => setRed(!red)}
                position={[0, 1, -1]}
              >
                <boxGeometry />
                <meshBasicMaterial color={red ? "red" : "blue"} />
              </mesh>
            </XR>
          </Canvas>
        </div>
      ) : (
        <h1>XR is not supported</h1>
      )}
    </>
  );
}

export default XRText;
