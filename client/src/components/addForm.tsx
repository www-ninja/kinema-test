import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import IContact from '../types/contact.type';

interface IAddFormModal {
    show: boolean,
    onClose:() => void,
    onSubmit:(data: IContact) => void
}

const AddFormModal: React.FC<IAddFormModal> = (props) => {
    const { show, onClose, onSubmit } = props;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleClose = () => onClose()
    const handleSubmit = () => onSubmit({
        firstName,
        lastName,
        phoneNumber
    })
    
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add a Contact</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className='mt-3'>
                    <Form.Label className='mx-1'>First name</Form.Label>
                    <Form.Control placeholder='First Name' onChange={(ev) => setFirstName(ev.target.value)}/>
                    <Form.Text></Form.Text>
                </Form.Group>

                <Form.Group className='mt-3'>
                    <Form.Label className='mx-1'>Last Name</Form.Label>
                    <Form.Control placeholder='First Name' onChange={(ev) => setLastName(ev.target.value)}/>
                    <Form.Text></Form.Text>
                </Form.Group>

                <Form.Group className='mt-3'>
                    <Form.Label className='mx-1'>Phone</Form.Label>
                    <Form.Control placeholder='Phone' onChange={(ev) => setPhoneNumber(ev.target.value)} />
                    <Form.Text></Form.Text>
                </Form.Group>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddFormModal;