import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Archive, FilePdfFill, Youtube } from 'react-bootstrap-icons';
import { jsPDF } from 'jspdf';

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
    <Button onClick={() => {
      // eslint-disable-next-line new-cap
      const doc = new jsPDF('portrait', 'mm', 'letter');
      const midPage = (doc.internal.pageSize.width / 2);
      const margins = 25;

      // TODO all variables should be loaded from db
      // test = testimony
      const governorName = 'DAVID Y. IGE';
      const superTitle = 'SUPERINTENDENT'; // could also be 'INTERIM SUPERINTENDENT'
      const superName = 'DR. CHRISTINA M. KISHIMOTO';
      const testDate = '02/09/2021';
      const testTime = '09:00 AM';
      const testLocation = '325 Via Videoconference';
      const testCommittee = 'House Energy & Environmental Protection';
      let testCommitteeFormatted;
      if (testCommittee.length > 20) {
        for (let i = 20; i > 0; i--) {
          if (testCommittee[i] === ' ') {
            testCommitteeFormatted = `${testCommittee.substring(0, i)}\n${testCommittee.substring(i + 1)}`;
            break;
          }
        }
      } else {
        testCommitteeFormatted = testCommittee;
      }
      const personTestifying = 'Dr. Christina M. Kishimoto, Superintendent of Education';
      const billTitle = 'HB 0410 RELATING TO TREE PLANTING.';
      const billPurpose = 'Requires that eighth grade students and twelfth grade students in ' +
          'Hawaii public schools along with University of Hawaii ' +
          'undergraduate students plant trees.';
      const splitPurpose = doc.splitTextToSize(billPurpose, 165);

      // TODO fix rendering special chars (ā will not render in Helvetica - need to add a custom font)
      const departmentPosition = 'The Hawaii State Department of Education (Department) offers the following comments ' +
          'on HB 410 regarding specific grade level mandate for tree planting.\n\n' +
          'The Department agrees that educational endeavors around environmental protection, ' +
          'biodiversity, and climate change mitigation are critical for youth to cultivate science ' +
          'literacy and socially conscious citizenry and the Department is deeply committed to ' +
          '‘aina-based education. To that end, the Department adopted the Next Generation ' +
          'Science Standards (NGSS) in 2016. There is a clear trajectory of building ' +
          'developmentally appropriate student understanding of topics such as climate and ' +
          'human impacts on the environment from kindergarten through high school. In addition, ' +
          'climate change and other topics of human-environment interaction are specifically ' +
          'addressed in the Hawaii Core Standards for Social Studies.\n\n' +
          'The Department’s school design strategy prioritizes a flexible and adaptive approach, ' +
          'empowering each school to make decisions about specific contexts and partnerships for ' +
          'developing high quality and relevant learning experiences based on the needs of their ' +
          'students and the local community. It is through this lens that schools are able to ' +
          'creatively address aina-based educational programs and projects that promote ' +
          'environmental protection, biodiversity, and climate change mitigation.\n\n';
      const splitPosition = doc.splitTextToSize(departmentPosition, 218);

      // TODO figure out naming convention for testimonies
      const fileName = 'Test Testimony.pdf';

      // TODO fix alignment for governor and superintendent so when names change everything still looks good
      // HEADER
      doc.setFontSize(6);
      doc.setFont('helvetica', 'bold');
      doc.text(governorName, 15, 35);
      doc.text(superName, midPage * 2 - 15, 35, { align: 'right' });
      doc.setFont('helvetica', 'normal');
      doc.text('GOVERNOR', 15.5, 38);
      doc.text(superTitle, midPage * 2 - 20, 38, { align: 'right' });
      doc.addImage('/images/hawaii-state-seal.gif', 'gif', midPage - 11, 24, 22, 22);
      doc.setFontSize(8);
      doc.setFont('helvetica', 'bold');
      doc.text('STATE OF HAWAI‘I', midPage, 52, { align: 'center' });
      doc.text('DEPARTMENT OF EDUCATION', midPage, 55.5, { align: 'center' });
      doc.setFont('helvetica', 'normal');
      doc.text('P.O. BOX 2360', midPage, 59, { align: 'center' });
      doc.text('HONOLULU, HAWAI‘I 96804', midPage, 62.5, { align: 'center' });

      // DATE, TIME, LOCATION, COMMITTEE
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('Date:', midPage + 3, 74);
      doc.text('Time:', midPage + 3, 79);
      doc.text('Location:', midPage + 3, 84);
      doc.text('Committee:', midPage + 3, 89);
      doc.setFont('helvetica', 'normal');
      doc.text(testDate, midPage + 15, 74);
      doc.text(testTime, midPage + 16, 79);
      doc.text(testLocation, midPage + 23.5, 84);
      doc.text(`                     ${testCommitteeFormatted}`, midPage + 3, 89); // to get spacing on second line

      // DEPARTMENT, PERSON TESTIFYING, TITLE & PURPOSE OF BILL, CONTENT
      doc.setFont('helvetica', 'bold');
      doc.text('Department:', margins, 105);
      doc.text('Person Testifying:', margins, 115);
      doc.text('Title of Bill:', margins, 125);
      doc.text('Purpose of Bill:', margins, 135);
      doc.text('Department\'s Position:', margins, 155);
      doc.setFont('helvetica', 'normal');
      doc.text('Education', margins + 41, 105);
      doc.text(personTestifying, margins + 41, 115);
      doc.text(billTitle, margins + 41, 125);
      doc.text(splitPurpose, margins + 41, 135);
      doc.text(splitPosition, margins, 160);

      // TODO add more pages if testimony is too long for one page

      doc.save(fileName);
    }}
    >
      Generate Testimony PDF
    </Button>
  </Container>
);

export default BillResolutionDetails;
