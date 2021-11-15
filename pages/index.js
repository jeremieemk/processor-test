import Head from "next/head";
import { useState } from "react";
import Slider from "react-rangeslider";

export default function Home() {
  const [bass, setBass] = useState(20);
  const [compression, setCompression] = useState(60);
  function handleBassChange(e) {
    // setVolume({ value: e.target.value });
    console.log(e.target.value);
    setBass(e.target.value);
  }
  function handleCompressionChange(e) {
    // setVolume({ value: e.target.value });
    console.log(e.target.value);
    setCompression(e.target.value);
  }
  return (
    <div>
      <Head>
        <title>Sound Processor</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <h1>RK Sound Processor</h1>
        <div className="faders">
          <div className="fader">
            <input
              id="typeinp"
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
              id="typeinp"
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
