import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Archive, FilePdfFill, Youtube } from 'react-bootstrap-icons';

const BillResolutionDetails = () => (
  <Container className="text-center border border-1 small mb-5">
    <Row id="billTitle">
      <Col>
        {/* empty column for alignment */}
      </Col>
      <Col>
        {/* NUM */}
        <h3 className="pt-2"><b>HB 1078, HD1</b></h3>
      </Col>
      <Col className="text-end">
        <Card id="billStatus" className="p-2 m-1 float-end flex-row">
          <Archive className="m-1 me-2" />
          {/* STATUS */}
          Deferred/Inactive
        </Card>
      </Col>
    </Row>
    <Row className="py-1">
      {/* TITLE */}
      <b>RELATING TO THE HAWAII SCHOOL FOR THE DEAF AND BLIND</b>
    </Row>
    <Row>
      <Col>
        <Row>
          <Col className="border border-start-0 border-end-0">
            <b>Report Title</b>
          </Col>
        </Row>
        <Row>
          <Col className="py-2">
            {/* REPORT TITLE */}
            Department of Education; Hawaii School for Deaf and Blind; Charter Schools; Deaf and Blind Task Force
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col>
        <Row>
          <Col className="border border-start-0 border-end-0">
            <b>Description</b>
          </Col>
        </Row>
        <Row>
          <Col className="py-2">
            {/* DESCRIPTION */}
            Requires the department of education to develop a plan to transition the Hawaii School for the Deaf and Blind to a conversion
            charter school. Requires a conversion charter school to enroll a student&apos;s individualized education program prescribes that the
            charter school provides support for blind, deaf, or hard of hearing students.
            <br />
            <Col className="text-end px-2">
              {/* EFFECTIVE DATE */}
              Effective 7/1/2050 (HD1)
            </Col>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row className="border border-bottom-0 border-start-0 border-end-0">
      <Col>
        <Row>
          <Col className="border border-top-0 border-start-0 border-end-0">
            <b>Office</b>
          </Col>
        </Row>
        <Row>
          <Col className="py-2">
            {/* OFFICE */}
            OSSS, OSIP, BOE
          </Col>
        </Row>
      </Col>
      <Col className="border border-top-0 border-bottom-0">
        <Row>
          <Col className="border border-top-0 border-start-0 border-end-0">
            <b>Action</b>
          </Col>
        </Row>
        <Row>
          <Col className="py-2">
            {/* ACTION */}
            Testimony
          </Col>
        </Row>
      </Col>
      <Col>
        <Row>
          <Col className="border border-top-0 border-start-0 border-end-0">
            <b>Companion</b>
          </Col>
        </Row>
        <Row className="py-2">
          <Col>
            {/* COMPANION */}
            SB535
          </Col>
        </Row>
      </Col>
      <Col className="border border-top-0 border-bottom-0 border-end-0">
        <Row>
          <Col className="border border-top-0 border-start-0 border-end-0">
            <b>Leg Type</b>
          </Col>
        </Row>
        <Row>
          <Col className="py-2">
            {/* LEG TYPE */}
            Bill
          </Col>
        </Row>
      </Col>
    </Row>
    <Row className="border border-start-0 border-end-0 border-bottom-0">
      <Col className="border border-top-0 border-bottom-0 border-start-0">
        <Row>
          <Col className="border border-top-0 border-start-0 border-end-0">
            <b>Introduced by</b>
          </Col>
        </Row>
        <Row className="py-2">
          <Col>
            {/* INTRODUCER */}
            <div className="fakeLink4Rob">B. KOBAYASHI</div> 01/27/2021
          </Col>
        </Row>
      </Col>
      <Col className="border border-top-0 border-bottom-0 border-start-0">
        <Row>
          <Col className="border border-top-0 border-start-0 border-end-0">
            <b>Committee Referral</b>
          </Col>
        </Row>
        <Row>
          <Col className="py-2">
            {/* COMMITTEE REFERRAL */}
            EDU, WAM/JDC
          </Col>
        </Row>
      </Col>
      <Col className="border border-top-0 border-bottom-0 border-start-0">
        <Row>
          <Col className="border border-top-0 border-start-0 border-end-0">
            <b>Act #</b>
          </Col>
        </Row>
        <Row className="py-2">
          <Col>
            {/* ACT NUM */}
          </Col>
        </Row>
      </Col>
      <Col>
        <Row>
          <Col className="border border-top-0 border-start-0 border-end-0">
            <b>Supt&apos;s</b>
          </Col>
        </Row>
        <Row className="py-2">
          <Col>
            {/* SUPPLEMENTS (?) */}
            <input type="checkbox" />
            &nbsp;Binder
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col className="border border-top-0 border-bottom-0 border-start-0">
        <Row>
          <Col className="border border-start-0 border-end-0">
            <b>Hearing Date</b>
          </Col>
        </Row>
        <Row className="py-2">
          <Col>
            {/* HEARING DATE */}
            Tue 03/02/2021
          </Col>
        </Row>
      </Col>
      <Col className="border border-top-0 border-bottom-0 border-start-0">
        <Row>
          <Col className="border border-start-0 border-end-0">
            <b>Hearing Time</b>
          </Col>
        </Row>
        <Row className="py-2">
          <Col>
            {/* HEARING TIME */}
            11:00 AM
          </Col>
        </Row>
      </Col>
      <Col className="border border-top-0 border-bottom-0 border-start-0">
        <Row>
          <Col className="border border-start-0 border-end-0">
            <b>Hearing Location</b>
          </Col>
        </Row>
        <Row className="py-2">
          <Col>
            {/* HEARING LOCATION */}
            308 Via Videoconference
          </Col>
        </Row>
      </Col>
      <Col>
        <Row>
          <Col className="border border-start-0 border-end-0">
            <b>Notified of Hearings</b>
          </Col>
        </Row>
        <Row className="py-2">
          <Col>
            {/* NOTIFIED OF HEARINGS */}
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col className="border border-top-0 border-bottom-0 border-start-0">
        <Row>
          <Col className="border border-start-0 border-end-0">
            <b>Committee</b>
          </Col>
        </Row>
        <Row className="py-2">
          <Col>
            {/* COMMITTEE */}
            House Finance
          </Col>
        </Row>
      </Col>
      <Col>
        <Row>
          <Col className="border border-start-0 border-end-0">
            <b>Last Status Text</b>
          </Col>
        </Row>
        <Row className="py-2">
          <Col>
            {/* LAST STATUS TEXT */}
            12/10/2021 D Carried over to 2022 Regular Session.
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col>
        <Row>
          <Col className="border border-start-0 border-end-0">
            <b>All Versions</b>
          </Col>
        </Row>
        <Row className="py-1">
          <Col>
            {/* VERSIONS */}
            <div className="fakeLink4Rob">HB1078 HD1</div>
            <div className="fakeLink4Rob">HB1078</div>
          </Col>
        </Row>
      </Col>
      <Col className="border border-top-0 border-bottom-0">
        <Row>
          <Col className="border border-start-0 border-end-0">
            <b>Committee Reports</b>
          </Col>
        </Row>
        <Row className="py-1">
          <Col>
            {/* COMMITTEE REPORTS */}
            <div className="fakeLink4Rob">HB1078 HD1 HSCR479</div>
            <div className="fakeLink4Rob">HB1078 HD1 HSCR784</div>
          </Col>
        </Row>
      </Col>
      <Col>
        <Row>
          <Col className="border border-start-0 border-end-0">
            <Youtube /><b>&nbsp;YouTube</b>
          </Col>
        </Row>
        <Row className="py-1">
          <Col>
            {/* COMMITTEE REPORTS */}
            <div className="fakeLink4Rob">HEARING EDN 02-16-21 2:00P</div>
            <div className="fakeLink4Rob">HEARING FIN 03-02-21 1 11:00A</div>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col className="py-1 border border-bottom-0 border-start-0 border-end-0">
        Alysha Kim 305-9806; Annie Kalama 305-9806; Mandi Morgan 305-9806<br />
        Charlene Miyakawa 305-9806; Esther Kim 305-9806; Wowie Ramos 305-9750
      </Col>
    </Row>
    <Row>
      <Col className="border border-top-0 border-bottom-0 border-start-0 col-sm-1">
        <Row>
          <Col className="border border-start-0 border-end-0">
            <b>Similar</b>
          </Col>
        </Row>
        <Row className="py-2">
          <Col>
            {/* NO IDEA WHAT GOES HERE */}
          </Col>
        </Row>
      </Col>
      <Col className="border border-top-0 border-bottom-0 border-start-0 col-sm-2">
        <Row>
          <Col className="border border-start-0 border-end-0">
            <b>Lead Office Position</b>
          </Col>
        </Row>
        <Row className="py-2">
          <Col>
            {/* LEAD OFFICE POSITION */}
          </Col>
        </Row>
      </Col>
      <Col className="border border-top-0 border-bottom-0 border-start-0">
        <Row>
          <Col className="border border-start-0 border-end-0">
            <b>Testifier</b>
          </Col>
        </Row>
        <Row className="py-2">
          <Col>
            {/* TESTIFIER LIST */}
            04/04/2022 1:30 PM - Randall T. Tanaka <br />
            <div className="fakeLink4Rob">03/22/2022 2:00 PM - Keith Hayashi / Randall Tanaka</div>
          </Col>
        </Row>
      </Col>
      <Col>
        <Row>
          <Col className="border border-start-0 border-end-0">
            <b>Approved Testimony</b>
          </Col>
        </Row>
        <Row className="py-2">
          <Col>
            {/* APPROVED TESTIMONY LIST */}
            <div className="fakeLink4Rob"><FilePdfFill /> SB3096-HD2_EDN_04-04-22_FIN_Support.pdf</div>
            <div className="fakeLink4Rob"><FilePdfFill /> SB3096-SD1_EDN_03-22-22_EDN_Support.pdf</div>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col className="border border-top-0 border-bottom-0 border-start-0">
        <Row>
          <Col className="border border-start-0 border-end-0">
            <b>Monitoring Reports</b>
          </Col>
        </Row>
        <Row className="py-2">
          <Col>
            {/* MONITORING REPORTS */}
          </Col>
        </Row>
      </Col>
      <Col>
        <Row>
          <Col className="border border-start-0 border-end-0">
            <b>Hearing Comments</b>
          </Col>
        </Row>
        <Row className="py-2">
          <Col>
            {/* HEARING COMMENTS */}
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default BillResolutionDetails;
