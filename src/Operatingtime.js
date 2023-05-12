import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function Operatingtime({ workingTime }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                OPERATING HOURS
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Operating Hours</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        <ListGroup.Item>Monday {workingTime.Monday}</ListGroup.Item>
                        <ListGroup.Item>Tuesday {workingTime.Tuesday}</ListGroup.Item>
                        <ListGroup.Item>Wednesday {workingTime.Wednesday}</ListGroup.Item>
                        <ListGroup.Item>Thursday {workingTime.Thursday}</ListGroup.Item>
                        <ListGroup.Item>Friday {workingTime.Friday}</ListGroup.Item>
                        <ListGroup.Item>Saturday {workingTime.Saturday}</ListGroup.Item>
                        <ListGroup.Item>Sunday {workingTime.Sunday}</ListGroup.Item>

                    </ListGroup>
                </Modal.Body>

            </Modal>

        </div>
    )
}

export default Operatingtime