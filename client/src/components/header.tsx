import * as React from 'react';
import { Container, Navbar } from 'react-bootstrap';

interface IHeaderProps {
}

const Header: React.FC<IHeaderProps> = (props) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                   PHONE BOOK APP (CRUD) TEST
                </Navbar.Brand>
            </Container>
      </Navbar>
  );
};

export default Header;
