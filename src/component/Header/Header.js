import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'

function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <div className='navbar'>
                    <div className='header_img'>
                        <Navbar.Brand href="#home"><img src="img/kirai.svg" alt='Logo' /></Navbar.Brand>
                    </div>
                    <div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">About Us</Nav.Link>
                                <Nav.Link href="#link">Contect</Nav.Link>
                                <Nav.Link href="#link">Services</Nav.Link>
                                <NavDropdown title="Page" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#ourteam">Our Team</NavDropdown.Item>
                                    <NavDropdown.Item href="#projects">Projects</NavDropdown.Item>
                                    <NavDropdown.Item href="#events">Events</NavDropdown.Item>
                                    <NavDropdown.Item href="#commingsoon">Comming Soon</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </div>
            </Container>
        </Navbar>
    );
}

export default Header;