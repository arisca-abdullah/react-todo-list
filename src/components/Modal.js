import React from "react";
import { Modal, Button } from "react-bootstrap";

export default props => (
  <Modal
    size="sm"
    show={props.modal.show}
    onHide={props.setModal.bind(this, { show: false })}
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title>Delete todo</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Are you sure to delete this todo?</p>
    </Modal.Body>
    <Modal.Footer>
      <Button
        variant="secondary"
        onClick={props.setModal.bind(this, { show: false })}
      >
        Cancel
      </Button>
      <Button
        variant="danger"
        onClick={props.deleteTodo.bind(this, props.modal.id)}
      >
        Delete
      </Button>
    </Modal.Footer>
  </Modal>
);
