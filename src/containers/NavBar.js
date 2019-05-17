import React, {Component} from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../assets/css/NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/img/whitelogo.png';

export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        };

        this.toggle = this
            .toggle
            .bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    state = {
        auth: false,
        slide: 0, // How much should the Navbar slide up or down
        lastScrollY: 0, // Keep track of current position in state
    };
    componentWillMount() {
        // When this component mounts, begin listening for scroll changes
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        // If this component is unmounted, stop listening
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const {lastScrollY} = this.state;
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            this.setState({style: 'scrolled'});
        } else if (window.scrollY === 0) {
            this.setState({style: 'notscrolled'});
        }
        this.setState({lastScrollY: currentScrollY});
    };

    render() {
        return (
            <div className="header" id="header">
                <Navbar color="dark" fixed="top" light expand="md" className={this.state.style}>
                    <NavbarBrand className="logo" tag={Link} to="/"><img src={logo} alt="Logo"/></NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/home" className="menuitems">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/editor" className="menuitems">Editor</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
