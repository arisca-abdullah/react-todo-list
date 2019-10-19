import React from "react";
import { Container, Row, Col, Table, Form, Button } from "react-bootstrap";
import AddTodo from "../components/AddTodo";
import Modal from "../components/Modal";
import axios from "axios";

export default class Main extends React.Component {
  state = {
    todos: [],
    modal: {
      show: false
    }
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.setState({ todos: res.data }));
  }

  labelStyle = todoCompleted => ({
    textDecoration: todoCompleted ? "line-through" : ""
  });

  addTodo = title => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false
      })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
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
            <h1>Todo List</h1>
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
