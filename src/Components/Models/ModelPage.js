import React from "react";
import { models } from "./Data";

function ModelPage() {
  const renderCards = models.map((model, index) => {
    return (
      <div id={model.id} className="model-card" key={index}>
        <img src={model.src} alt="model"></img>
      </div>
    );
  });

  return (
    <div className="model-page-container">
      <h1 className="model-watermark">Aiony Haust</h1>
      <h1>OUR MODELS</h1>
      <div className="model-card-container">{renderCards}</div>
    </div>
  );
}

export default ModelPage;
