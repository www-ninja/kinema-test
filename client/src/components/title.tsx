import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

interface ITitle {
}

const Title: React.FC<ITitle> = (props) => {
    return (
        <Row className='justify-content-center'>
            <Col xs={'auto'}>
                <h1><span className='mx-3'><FontAwesomeIcon icon={faAddressBook}/></span>Phone Book App</h1>
            </Col>
        </Row>
  );
};

export default Title;