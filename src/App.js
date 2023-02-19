import './App.css';
import { Nav, Navbar, Container, Card, Table } from 'react-bootstrap';

function App() {
  return (
    <>
      <>
        <Navbar bg="dark" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand href="#home">DG Study Cafe</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">시설소개</Nav.Link>
              <Nav.Link href="#features">예약하기</Nav.Link>
              <Nav.Link href="#pricing">갤러리리뷰</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>

      <div className='app'>
        <div className='board-header'>
          <Card>
            <Card.Body>
              <Card.Title>예약게시판</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='board-table'>
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default App;
