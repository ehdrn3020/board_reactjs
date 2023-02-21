import './App.css';
import axios from 'axios';

import { Nav, Navbar, Container, Card, Table } from 'react-bootstrap';
import { useState } from 'react';

function App() {

  let [lists, setLists] = useState([])

  axios.get('https://ehdrn3020.github.io/server_json/data/board_1.json')
  .then((data)=>{ 
    setLists(data.data)
  })
  .catch(()=>{
    console.log('Request Fail!')
  })
  
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

        <Board lists={lists}/>
      
      </div>
    </>
  );
}

function Board(props) {
  // props.lists.map((item, i)=>{ console.log(item)})
  return (
    <div className='board-table'>
      <Table striped>
        <thead>
          <tr>
            <th></th>
            <th>제목</th>
            <th>예약자</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody>
          {
            props.lists.map((item)=>{
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.user}</td>
                  <td>{item.date}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  )
}

export default App;
