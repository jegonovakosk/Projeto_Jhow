import Form from 'react-bootstrap/Form';
import "./Formulario.css";

const Formulario = () => {
    return (
        <div className='form mt-5'>
            <div className="service">
                <h2>Contato</h2>
            </div>
            <div className="service">
                <h5><b>Preencha o formulário para nos contatar:</b></h5>
            </div>
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
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <button type="button" class="btn btn-success">Enviar</button>
            </Form>

        </div>
    )
}
export default Formulario;