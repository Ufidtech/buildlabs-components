import Button from "./Button";

export default function Modal({ isOpen, onClose, title, children }) {
  // If the state is false (not open), return nothing. Don't render the HTML.
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3 className="modal-title">{title}</h3>

        <div className="modal-body">{children}</div>

        <div className="modal-footer">
          {/* We pass the onClose function to our Button to close the modal */}
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button onClick={() => alert("Action confirmed!")}>Confirm</Button>
        </div>
      </div>
    </div>
  );
}
