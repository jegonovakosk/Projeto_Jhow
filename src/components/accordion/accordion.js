import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import "./accordion.css";

function BasicExample() {
  return (
    <Accordion defaultActiveKey="3">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Quem somos</Accordion.Header>
        <Accordion.Body>
          <p>
            Somos uma empresa especializada em consultoria em ferrageamento e equilíbrio dos cascos e de cavalos.
               Nosso impacto positivo é promover a saúde e melhora de performance sustentável, saúde e bem-estar dos equinos.
               Propomos levar saúde e equilíbrio aos cavalos pela manipulação das forças mecânicas que incidem e influenciam a forma dos cascos.
              As forças mecânicas incidentes nos membros dos cavalos até chegar aos cascos, podem ter seus vetores de forças manipulados e redirecionadas objetivando equilibrar, otimizar e armar as forças de compressão e tensão de todo o sistema músculo esquelético do seu cavalo.
               Be de sua correlação com a funcionalidade, fisiologia e dos cascos.
               Sabemos que os cascos são fundamentais para a saúde e a capacidade biomecânica dos equinos e que interferem diretamente no bem estar dos cavalos, e é por isso que trabalhamos com uma abordagem abrangente e individualizada para cada cavalo.
               Acreditamos que para alcançar o máximo desempenho e qualidade de vida, é necessário parametrizar, gerenciar e interferir em diversas variáveis dos cascos, do corpo e da psique do animal.
               Avaliamos cada cavalo de forma minuciosa em relação aos fatores que interferem sua performance e equilíbrio.
               A partir dessas informações, criamos um plano de trabalho e de ferrageamento personalizado para cada indivíduo, levando em consideração as necessidades específicas de cada caso.
               Nosso objetivo é auxiliar os proprietários, médicos veterinários, ferradores e todo o time no gerenciamento do equilíbrio e dos cascos a fim devobter o melhor desempenho possível.
               Nosso plano de trabalho envolve toda a equipe multidisciplinar que já atende o seu cavalo em todas as especificidades de um atleta equestre.
               Trabalhamos respeitando o histórico, conformação, genética e a natureza do equino previamente informada.
               Com 25 anos de experiência e um amplo conhecimento prático, técnico e científico, estamos prontos para oferecer a segurança na manutenção de seu atleta.
               Resgatamos animais, corrigimos animais, ajudamos animais e ajudamos as pessoas a manterem seus cavalos bem.
               Muitas vezes, a situação de apoio dos cascos no solo não é adequada, o que faz com que seu cavalo não execute ou relute em executar certos movimentos. Mas, trata-se muitas vezes na verdade de uma questão de uma incapacidade mecânica que relacionam varáveis de comprimento e ângulos de cascos e membros, bem como, de suas estruturas ósseas, ligamentares e musculares do equino.
               Corporalmente e quadri podalmente, ajustamos, alinhamos, calibramos e corrigimos o seu atleta.
               Ajustamos, suspenção, tração, frenagem e estabilidade do seu cavalo elevando a segurança para cavalos e cavaleiros.
               Ganhos de condução e performance são percebidos brevemente após nosso trabalho.
               Ativamos todos os sistemas biológicos que podemos via reorientação de vetores de força, a fim de garantir performance sem danos.
               Podemos ajudar você a melhorar a performance e a qualidade de vida do seu cavalo!
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
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