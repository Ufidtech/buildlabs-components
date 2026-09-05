import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Modal from "./components/Modal";
import Alert from "./components/Alert";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ marginBottom: "3rem" }}>UI Component Library</h1>

      {/* Section 1: Buttons */}
      <section style={{ marginBottom: "4rem" }}>
        <h2 style={{ marginBottom: "1.5rem" }}>1. Buttons</h2>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Button onClick={() => alert("Primary clicked!")}>
            Primary Action
          </Button>
          <Button variant="outline">Secondary Action</Button>
          <Button disabled={true}>Disabled</Button>
        </div>
      </section>

      {/* Section 2: Cards */}
      <section style={{ marginBottom: "4rem" }}>
        <h2 style={{ marginBottom: "1.5rem" }}>2. Cards</h2>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          <Card
            title="Premium Scent"
            description="A bold, executive fragrance featuring notes of cedar and bergamot."
            image="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=400&q=80"
            buttonText="View Details"
            onButtonClick={() => alert("Viewing Premium Scent...")}
          />
          <Card
            title="Standard Packaging"
            description="Minimalist glass design built for modern aesthetics."
            buttonText="Read More"
            onButtonClick={() => alert("Viewing Packaging...")}
          />
        </div>
      </section>

      {/* Section 3: Modal (State Management) */}
      <section style={{ marginBottom: "4rem" }}>
        <h2 style={{ marginBottom: "1.5rem" }}>3. State Management (Modal)</h2>

        <Button onClick={() => setIsModalOpen(true)}>Open The Modal</Button>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Account Deletion"
        >
          Are you absolutely sure you want to proceed? This action cannot be
          undone and all data will be lost.
        </Modal>
      </section>

      <Alert type="success" message="System  systems running smoothly." />
      <Alert
        type="info"
        message="New updates are available for your dashboard."
      />
    </div>
  );
}
