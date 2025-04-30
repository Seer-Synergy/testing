import React from 'react';
import './App.css';

const ModelViewer = ({ src, alt, iosSrc }) => {
  return (
    <div>
    <model-viewer
        src="/model/jet_engine.glb"
        ios-src="/model/jet_engine.usdz"
        alt="Jet Engine"
        auto-rotate
        camera-controls
        ar
        ar-modes="webxr scene-viewer quick-look"
        environment-image="neutral"
        style={{ width: '100%', height: '600px' }}
        interaction-prompt="none"
    >
    
        {/* <!-- Annotation 1: Intake --> */}
        <div
        slot="hotspot-1"
        className="hotspot"
        data-position="8.0 0.0 0.0"
        data-normal="0 0 1"
        >
        <div class="annotation">Controller</div>
        </div>
    
        {/* <!-- Annotation 2: Compressor --> */}
        <div
        slot="hotspot-2"
        className="hotspot"
        data-position="0.0 3.0 0.0"
        data-normal="0 0 1"
        >
        <div class="annotation">Compressor</div>
        </div>
    
        {/* <!-- Annotation 3: Fan --> */}
        <div
        slot="hotspot-3"
        className="hotspot"
        data-position="-4.0 0.0 0.0"
        data-normal="0 0 1"
        >
        <div class="annotation">Fan Blades</div>
        </div>
    
    </model-viewer>

    <model-viewer 
        src="/model/jet_engine.glb"
        ios-src="/model/jet_engine.usdz"
        alt="Jet Engine"
        auto-rotate
        camera-controls
        ar
        ar-modes="webxr scene-viewer quick-look"
        environment-image="neutral"
        style={{ width: '100%', height: '600px' }}
        interaction-prompt="none"
    >

        {/* --- Canonical Axis-Based Annotations (Extended Outward) --- */}

        {/* Front - Z+ */}
        <div
            slot="hotspot-front"
            className="hotspot"
            data-position="0 0 4"
            data-normal="0 0 1"
        >
            <div class="annotation">Front - Z+</div>
        </div>

        {/* Back - Z- */}
        <div
            slot="hotspot-back"
            className="hotspot"
            data-position="0 0 -2.5"
            data-normal="0 0 -1"
        >
            <div class="annotation">Back - Z-</div>
        </div>

        {/* Top - Y+ */}
        <div
            slot="hotspot-top"
            className="hotspot"
            data-position="0 5 0"
            data-normal="0 1 0"
        >
            <div class="annotation">Top - Y+</div>
        </div>

        {/* Bottom - Y- */}
        <div
            slot="hotspot-bottom"
            className="hotspot"
            data-position="0 -2 0"
            data-normal="0 -1 0"
        >
            <div class="annotation">Bottom - Y-</div>
        </div>

        {/* Left - X- */}
        <div
            slot="hotspot-left"
            className="hotspot"
            data-position="-5 0 0"
            data-normal="-1 0 0"
        >
            <div class="annotation">Left - X-</div>
        </div>

        {/* Right - X+ */}
        <div
            slot="hotspot-right"
            className="hotspot"
            data-position="9 0 0"
            data-normal="1 0 0"
        >
            <div class="annotation">Right - X+</div>
        </div>

    </model-viewer>


    </div>

  );
};

export default ModelViewer;
