
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Read from './Components/Read';
import Create from './Components/Create';
import Edit from './Components/edit';
 

function App() {
  // React App


  return (
  <BrowserRouter>
    <div className="App">
      {/*here is a nav navbar for all my componrnts */}
          <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
<Routes>
  <Route path='/read' element={<Read></Read>}></Route>
  <Route path='/create' element={<Create></Create>}></Route>
  {/*added in navigation links*/}
  <Route path='/edit/:id' element={<Edit></Edit>}></Route>

  


</Routes>

    

    </div>
  
    </BrowserRouter>
  );
}

export default App;
