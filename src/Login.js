import React from 'react';
import { Grid, Button, Form, FormGroup, ControlLabel, FormControl, Checkbox, Col } from 'react-bootstrap';

class Login extends React.Component {
constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  emailValidationState() {
    if (this.state.email.length === 0) return 'error';
    return 'success';
  }

  passwordValidationState() {
    if (this.state.password.length < 8) return 'error';
    return 'success';
  }

  handleChange(e) {
    this.setState(Object.assign({}, this.state, { [e.target.id]: e.target.value }));
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.emailValidationState() === 'success' && this.passwordValidationState() === 'success') {
      console.log(this.state);
    }
  }

  render() {
    return (
      <Grid>
        <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" validationState={this.emailValidationState()}>
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Email" 
                onChange={this.handleChange} value={this.state.email}
              />
            </Col>
          </FormGroup>

          <FormGroup controlId="password" validationState={this.passwordValidationState()}>
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl type="password" placeholder="Password"
                onChange={this.handleChange} value={this.state.password}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Checkbox>Remember me</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">
                Sign in
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Grid>
    )
  }
}

export default Login;