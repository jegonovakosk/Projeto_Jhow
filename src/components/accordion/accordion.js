import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import "./accordion.css";
import Mission from '../mission/Mission';
import Card from '../VitrineCard/Card';
import Section from '../Section/Section';


function BasicExample() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Quem somos</Accordion.Header>
        <Accordion.Body>
        <div>
            <Section/>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Biografia</Accordion.Header>
        <Accordion.Body>
          <div>
            <Mission />
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Serviços</Accordion.Header>
        <Accordion.Body>
          <div>
            <Card />
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Contato</Accordion.Header>
        <Accordion.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nome completo</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Telefone</Form.Label>
              <Form.Control type="phone" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Descreva sua soliticacao</Form.Label>
              <Form.Control as="textarea" rows={5} />
            </Form.Group>
            <button type="button" class="btn btn-success">Enviar</button>
          </Form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;