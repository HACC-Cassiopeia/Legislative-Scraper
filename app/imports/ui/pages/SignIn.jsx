import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Alert, Card, Col, Container, Row } from 'react-bootstrap';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-bootstrap5';

/**
 * Signin page overrides the form’s submit event and call Meteor’s loginWithPassword().
 * Authentication errors modify the component’s state to be displayed
 */
const SignIn = () => {
  const [error, setError] = useState('');
  const [redirect, setRedirect] = useState(false);
  const schema = new SimpleSchema({
    email: String,
    password: String,
  });
  const bridge = new SimpleSchema2Bridge(schema);

  // Handle Signin submission using Meteor's account mechanism.
  const submit = (doc) => {
    // console.log('submit', doc, redirect);
    const { email, password } = doc;
    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        setError(err.reason);
      } else {
        setRedirect(true);
      }
    });
    // console.log('submit2', email, password, error, redirect);
  };

  // Render the signin form.
  // console.log('render', error, redirect);
  // if correct authentication, redirect to page instead of login screen
  if (redirect) {
    return (<Navigate to="/" />);
  }
  // Otherwise return the Login form.
  return (
    <Container id="signin-page" className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <AutoForm schema={bridge} onSubmit={data => submit(data)}>
            <Card className="card-footer">
              <Card.Header>
                <Col className="text-center">
                  <h3>Login to your account</h3>
                </Col>
              </Card.Header>
              <Card.Body>
                <TextField id="signin-form-email" name="email" placeholder="E-mail address" />
                <TextField id="signin-form-password" name="password" placeholder="Password" type="password" />
                <ErrorsField />
                <Col className="text-center">
                  <SubmitField id="signin-form-submit" />
                </Col>
              </Card.Body>
              <Alert variant="light">
                <Col className="text-center">
                  <h7>Don&apos;t have an account yet? </h7>
                  <Link to="/signup">Sign Up</Link>
                </Col>
                {error === '' ? (
                  ''
                ) : (
                  <Alert variant="danger">
                    <Alert.Heading>Login was not successful</Alert.Heading>
                    {error}
                  </Alert>
                )}
              </Alert>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
