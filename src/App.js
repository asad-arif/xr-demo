import { Canvas } from '@react-three/fiber'
import { XR, createXRStore } from '@react-three/xr'
import { useState } from 'react'

const store = createXRStore()

function App() {
  const [red, setRed] = useState(false)
  const [arSupported, setArSupported] = useState(true)

  // Check if WebXR is supported
  if (!navigator.xr) {
    setArSupported(false)
  }

  return (
    <>
      {!arSupported ? (
        <div>
          <p>AR is not supported on your device or browser.</p>
        </div>
      ) : (
        <>
          <button onClick={() => store.enterAR()}>Enter AR</button>
          <Canvas>
            <XR store={store}>
              <mesh pointerEventsType={{ deny: 'grab' }} onClick={() => setRed(!red)} position={[0, 1, -1]}>
                <boxGeometry />
                <meshBasicMaterial color={red ? 'red' : 'blue'} />
              </mesh>
            </XR>
          </Canvas>
        </>
      )}
    </>
  )
}

export default App;
