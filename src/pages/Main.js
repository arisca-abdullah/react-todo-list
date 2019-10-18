import React from "react";
import { Container, Row, Col, Table, Form, Button } from "react-bootstrap";
import AddTodo from "../components/AddTodo";
import Modal from "../components/Modal";

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
      show: false
    }
  };

  labelStyle = todoCompleted => ({
    textDecoration: todoCompleted ? "line-through" : ""
  });

  addTodo = title => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id:
            this.state.todos.length > 0
              ? Math.max(...this.state.todos.map(todo => todo.id)) + 1
              : 1,
          title,
          completed: false
        }
      ]
    });
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

  setModal = modal => {
    this.setState({ modal });
  };

  render = () => (
    <React.Fragment>
      <Container className="pt-3 px-0">
        <Row className="justify-content-center">
          <Col xl="7" lg="8" md="9" sm="10" xs="10">
            <AddTodo addTodo={this.addTodo} />
            <Table className="mt-3" striped bordered hover>
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
                          htmlFor={todo.id}
                          style={this.labelStyle(todo.completed)}
                        >
                          {todo.title}
                        </Form.Check.Label>
                      </Form.Check>
                      <Button
                        variant="danger"
                        onClick={this.setModal.bind(this, {
                          id: todo.id,
                          show: true
                        })}
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
        modal={this.state.modal}
        setModal={this.setModal}
        deleteTodo={this.deleteTodo}
      />
    </React.Fragment>
  );
}
