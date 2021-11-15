import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [bass, setBass] = useState(20);
  const [compression, setCompression] = useState(60);
  function handleBassChange(e) {
    console.log(e.target.value);
    setBass(e.target.value);
  }
  function handleCompressionChange(e) {
    console.log(e.target.value);
    setCompression(e.target.value);
  }
  return (
    <div>
      <Head>
        <title>Sound Processor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <h1>Test Sound Processor UI</h1>
        <div className="faders">
          <div className="fader">
            <input
              type="range"
              min="0"
              max="100"
              value={bass}
              onChange={(e) => handleBassChange(e)}
              step="1"
            />
            <span>Bass</span>
            <h1>{bass}</h1>
          </div>
          <div className="fader">
            <input
              type="range"
              min="0"
              max="100"
              value={compression}
              onChange={(e) => handleCompressionChange(e)}
              step="1"
            />
            <span>Compression</span>
            <h1>{compression}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
