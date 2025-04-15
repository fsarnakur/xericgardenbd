import { useState } from "react";

export default function App() {
  const [plantInfo, setPlantInfo] = useState({
    source: "0",
    propagation: "0",
    toxicity: "0",
    type: "S",
    subtype: "C",
    lifecycle: "3",
    flowering: "F",
    sunlight: "1",
    watering: "3",
    soil: "D",
    fertilizing: "5",
    year: "25",
    month: "04",
    serial: "0001",
  });

  const generateID = () => {
    return `#XG${plantInfo.source}${plantInfo.propagation}-${plantInfo.toxicity}${plantInfo.type}${plantInfo.subtype}${plantInfo.lifecycle}${plantInfo.flowering}-${plantInfo.sunlight}${plantInfo.watering}${plantInfo.soil}${plantInfo.fertilizing}-${plantInfo.year}${plantInfo.month}-${plantInfo.serial}`;
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: 800, margin: 'auto' }}>
      <h1>Xeric Garden Plant ID Generator</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
        {Object.entries(plantInfo).map(([key, value]) => (
          <input
            key={key}
            placeholder={key}
            value={value}
            onChange={(e) => setPlantInfo({ ...plantInfo, [key]: e.target.value })}
            style={{ padding: '0.5rem', fontSize: '1rem' }}
          />
        ))}
      </div>
      <div style={{ marginTop: '1rem' }}>
        <strong>Generated ID:</strong>
        <div style={{ fontFamily: 'monospace', fontSize: '1.25rem', marginTop: '0.5rem' }}>
          {generateID()}
        </div>
      </div>
    </div>
  );
}