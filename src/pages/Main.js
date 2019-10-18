import React from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Form,
  Button,
  Modal
} from "react-bootstrap";

export default class Main extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Sarapan",
        completed: true
      },
      {
        id: 2,
        title: "Makan Siang",
        completed: false
      },
      {
        id: 3,
        title: "Makan Malam",
        completed: false
      }
    ],
    modal: {
      id: 0,
      show: false
    }
  };

  changeTodo = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      })
    });
  };

  deleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id),
      modal: { show: false }
    });
  };

  render = () => (
    <React.Fragment>
      <Container className="pt-3 px-0">
        <Row className="justify-content-center">
          <Col xl="7" lg="8" md="9" sm="10" xs="10">
            <Table striped bordered hover>
              <tbody>
                {this.state.todos.map(todo => (
                  <tr key={todo.id}>
                    <td className="d-flex align-items-center justify-content-between">
                      <Form.Check>
                        <Form.Check.Input
                          id={todo.id}
                          type="checkbox"
                          checked={todo.completed}
                          onChange={this.changeTodo.bind(this, todo.id)}
                        ></Form.Check.Input>
                        <Form.Check.Label
                          for={todo.id}
                          style={{
                            textDecoration: todo.completed ? "line-through" : ""
                          }}
                        >
                          {todo.title}
                        </Form.Check.Label>
                      </Form.Check>
                      <Button
                        variant="danger"
                        onClick={() =>
                          this.setState({ modal: { id: todo.id, show: true } })
                        }
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <Modal
        size="sm"
        show={this.state.modal.show}
        onHide={() => this.setState({ modal: { show: false } })}
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
            onClick={() => this.setState({ modal: { show: false } })}
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={this.deleteTodo.bind(this, this.state.modal.id)}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}
