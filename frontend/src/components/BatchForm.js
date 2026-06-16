import React, { useState } from "react";

function BatchForm() {
  const [batchId, setBatchId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Batch ID:", batchId);
  };

  return (
    <div className="form-container">
      <h2>Track Your Batch 📦</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Batch ID"
          value={batchId}
          onChange={(e) => setBatchId(e.target.value)}
        />

        <button type="submit">Track</button>
      </form>
    </div>
  );
}

export default BatchForm;