import React from "react";
import { Container, Row, Col, Table, Form, Button } from "react-bootstrap";

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
    ]
  };

  onChange = id => {
    console.log(id);
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
                          type="checkbox"
                          checked={todo.completed}
                          onChange={this.onChange.bind(this, todo.id)}
                        ></Form.Check.Input>
                        <Form.Check.Label
                          style={{
                            textDecoration: todo.completed ? "line-through" : ""
                          }}
                        >
                          {todo.title}
                        </Form.Check.Label>
                      </Form.Check>
                      <Button variant="outline-danger">Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
