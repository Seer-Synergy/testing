import React from 'react';
import ModelViewer from './ModelViewer';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>3D Model Viewer Demo with AR</h2>

      <ModelViewer
        src="/model/jet_engine.glb"
        alt="Jet Engine"
      />

      {/* <ModelViewer
        src="/model/v8_engine.glb"
        alt="V8 Engine"
      /> */}
    </div>
  );
}

export default App;

