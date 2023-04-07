import { Container, Row, Col } from "reactstrap";
import "./chooseus.css";

const ChooseUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Why Us?</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt mollitia nostrum harum eos praesentium odit a sed quod
                aut fugit. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Reprehenderit omnis, culpa eligendi inventore perspiciatis
                minus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores cupiditate facilis provident quidem accusamus impedit
                tenetur laboriosam debitis nisi eius!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
