import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import styled from "styled-components";
import AuthProvider from "../hooks/AuthProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import MobileNavigation from './MobileNavigation';

export const Button = styled.button`
    height: 35px;
    border: none;
    border-radius: 8px;
    background: ${props => props.primary ? "palevioletred" : "#9b59b6" };
    color: #fff;
    margin: 20px;
    font-size: 20px;
    font-weight: bold;
`; 

const Header = ({links}) => {
    const { handleLogout } = AuthProvider();

    return (
        <header className="header">
            <MobileNavigation links={links}/>
            <div className="search">
                {/* <InputGroup className="mx-3">
                    <FormControl
                    aria-label="Search"
                    aria-describedby="search-input"
                    />
                    <InputGroup.Text id="search-input">
                        <FontAwesomeIcon icon={["fa", "search"]} />
                    </InputGroup.Text>
                </InputGroup> */}
            </div>
            <div className="user">
                <div className="notifications icon-button">
                    {/* <FontAwesomeIcon icon={["fa", "bell"]} /> */}
                </div>
                <div className="messages icon-button">
                    {/* <FontAwesomeIcon icon={["fa", "paper-plane"]} /> */}
                </div>
                <div className="profile">
                    <div className="profile-icon icon-button">
                        <a href='./profile'>

                        <FontAwesomeIcon icon={["fa", "user-alt"]} />
                        </a>
                    </div>
                    <span className="name">Name</span>
                    <Button onClick={handleLogout}>Logout</Button>
                </div>
            </div>
        </header>
    )
}

export default Header;
