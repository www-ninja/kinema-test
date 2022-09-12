import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import { Col, Container, InputGroup, ListGroup, Row, Stack } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Header from './components/header';
import Title from './components/title';
import { Form } from 'react-bootstrap';
import AddFormModal from './components/addForm';
import BookItem from './components/bookItem';
import IContact from './types/contact.type';
import ContactService from './services/contact.service';
import EditFormModal from './components/editForm';

const InitialSelected: IContact = {
  firstName: '',
  lastName: '',
  phoneNumber: ''
}

function App() {
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [selected, setSelected] = useState<IContact>(InitialSelected);

  useEffect(() => {
    fetchData();
  }, [showAdd, showEdit])

  const fetchData = async () => {
    try {
      const res = await ContactService.getAll();
      setContacts(res.data || []);
    } catch (error) {
      console.log(error)
    }
  }

  const onSubmit = async (data: IContact) => {
    try {
      await ContactService.create(data);
      setShowAdd(false);
    } catch (error) {
      console.log(error)
    }
  }

  const onUpdate = async (data: IContact) => {
    try {
      await ContactService.update(data, data.id)
      setShowEdit(false);
    } catch (error) {
      console.log(error)
    }
  }

  const selectItem = async (data: IContact) => {
    setSelected(data);
    setShowEdit(true);
  }

  const onDelete = async (data: IContact) => {
    try {
      await ContactService.delete(data.id)
      fetchData();
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Header />
      <Container className='mt-5'>
        <Title />
        <Row className='justify-content-center mt-5'>
          <Col xs={6}>
            <div className='d-flex justify-content-between align-items-center'>
              <h2>Contacts</h2>
              <Button size='lg' onClick={()=> setShowAdd(true)}>+ Add Contact</Button>
            </div>
            <InputGroup className='mt-3'>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </InputGroup.Text>
              <Form.Control 
                placeholder='Search contact by last name...'
              />
            </InputGroup>
            <ListGroup className='mt-3'>
              {contacts.map((contact, index) => 
                <BookItem 
                  key={index} 
                  data={contact} 
                  onDelete={() => onDelete(contact)}
                  onClick={() => selectItem(contact)}
                />)
              }
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <AddFormModal 
        show={showAdd}
        onClose={() => setShowAdd(false)}
        onSubmit={onSubmit}
        />
      <EditFormModal 
        show={showEdit}
        data={selected}
        onClose={() => setShowEdit(false)}
        onSubmit={onUpdate}
        />
    </>

  );
}

export default App;
