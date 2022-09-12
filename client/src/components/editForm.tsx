import React, { useState } from 'react';
import { useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import IContact from '../types/contact.type';

interface IEditFormModal {
    show: boolean,
    data: IContact,
    onClose:() => void,
    onSubmit:(data: IContact) => void
}

const EditFormModal: React.FC<IEditFormModal> = (props) => {
    const { show, data, onClose, onSubmit } = props;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleClose = () => onClose()
    const handleSubmit = () => onSubmit({
        id: data.id,
        firstName,
        lastName,
        phoneNumber
    })

    useEffect(() => {
        setFirstName(data.firstName)
        setLastName(data.lastName)
        setPhoneNumber(data.phoneNumber)
    }, [data])
    
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add a Contact</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className='mt-3'>
                    <Form.Label className='mx-1'>First name</Form.Label>
                    <Form.Control 
                        placeholder='First Name' 
                        value={firstName} 
                        onChange={(ev) => setFirstName(ev.target.value)}
                    />
                </Form.Group>

                <Form.Group className='mt-3'>
                    <Form.Label className='mx-1'>Last Name</Form.Label>
                    <Form.Control 
                        placeholder='First Name' 
                        value={lastName} 
                        onChange={(ev) => setLastName(ev.target.value)}
                    />
                </Form.Group>

                <Form.Group className='mt-3'>
                    <Form.Label className='mx-1'>Phone</Form.Label>
                    <Form.Control 
                        placeholder='Phone' 
                        value={phoneNumber} 
                        onChange={(ev) => setPhoneNumber(ev.target.value)} 
                    />
                </Form.Group>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Update
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditFormModal;