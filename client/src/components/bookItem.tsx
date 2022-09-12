import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Button, ListGroup } from 'react-bootstrap';
import IContact from '../types/contact.type';

interface Props {
    data: IContact
    onClick: () => void
    onDelete: () => void
}

const BookItem = (props: Props) => {
    const { data, onClick, onDelete } = props;
    return (
        <ListGroup.Item className='align-items-center d-flex justify-content-between p-3'>
            <div onClick={onClick}>
                <h3>{data.firstName} {data.lastName}</h3>
                <p><span className={'mx-1'}><FontAwesomeIcon icon={faPhone} /></span>{ data.phoneNumber }</p>
            </div>
            <div>
                <Button variant="danger" onClick={onDelete}>
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
            </div>  
        </ListGroup.Item>
    )
}

export default BookItem;
