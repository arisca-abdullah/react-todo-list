import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

export default class AddTodo extends React.Component {
  state = {
    title: ""
  };

  inputChange = e => this.setState({ [e.target.name]: e.target.value });

  addTodo = () => {
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render = () => (
    <InputGroup>
      <FormControl
        name="title"
        placeholder="Add todo ..."
        value={this.state.title}
        onChange={this.inputChange}
      />
      <InputGroup.Append>
        <Button variant="success" onClick={this.addTodo}>
          Add Todo
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
}
