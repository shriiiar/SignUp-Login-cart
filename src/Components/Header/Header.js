import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../Customlink/CustomLink';
import './Header.css'
import logo from '../../img/pngegg.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth(app);

const Header = (props) => {
    const [user] = useAuthState(auth);
    return (
        <Navbar className='navbar' collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Link className="me-4 navLink-header" to="/">
                    <img src={logo} alt="" width="70px" />
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <CustomLink className="me-4 navLink" to="/">Home</CustomLink>
                        <CustomLink className="me-4 navLink" to="/shop">Shop</CustomLink>
                        <CustomLink className="me-4 navLink" to="/about">About</CustomLink>
                        {
                            !user ? <>
                                <CustomLink className="me-4 navLink" to="/signup">Sign Up</CustomLink>
                                <CustomLink className="me-4 navLink" to="/login">Login</CustomLink></>
                                :
                                <>
                                    <span className='navLink border-0 fw-bold text-danger me-4'>{user?.displayName}</span>
                                    <button className="navLink border-0 bg-transparent" onClick={() => signOut(auth)}>Sign Out</button></>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;