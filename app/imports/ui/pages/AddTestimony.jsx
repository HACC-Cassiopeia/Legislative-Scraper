import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, LongTextField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
// import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Testimonies } from '../../api/testimony/Testimony';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  committeeChair: String,
  committeeName: String,
  billNumber: String,
  draftNumber: String,
  hearingDate: String,
  hearingLocation: String,
  position: String,
  introduction: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddStuff page for adding a document. */
const AddTestimony = () => {

  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { committeeChair, committeeName, billNumber, draftNumber, hearingDate, hearingLocation, position, introduction } = data;
    // const owner = Meteor.user().username;

    Testimonies.collection.insert(
      { committeeChair, committeeName, billNumber, draftNumber, hearingDate, hearingLocation, position, introduction },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          formRef.reset();
        }
      },
    );
  };

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  let fRef = null;
  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>New Testimony</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <Row>
                  <Col><TextField name="committeeChair" /></Col>
                  <Col><TextField name="committeeName" /></Col>
                </Row>
                <Row>
                  <Col><TextField name="billNumber" /></Col>
                  <Col><TextField name="draftNumber" /></Col>
                </Row>
                <Row>
                  <Col><TextField name="hearingLocation" /></Col>
                  <Col><TextField name="hearingDate" /></Col>
                </Row>
                <TextField name="position" />
                <LongTextField name="introduction" />
                <SubmitField value="Submit" />
                <ErrorsField />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default AddTestimony;
