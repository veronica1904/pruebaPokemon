import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useForm } from '../../Hooks/useForm';
import { editAsync } from '../../redux/actions/actionPokemon';

const Edit = ({ modal }) => {

    const dispatch = useDispatch()
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    const [values, handleInputChange] = useForm({
        nombre: modal.nombre,
        codigo: modal.codigo,
        descripcion: modal.descripcion,
        precio: modal.precio

    })

    const { nombre, codigo, descripcion, precio} = values

    const handleSubmit = (e) => {
        e.preventDefault()
      //  console.log(values)
       dispatch(editAsync(codigo, values))
       console.log( values)
      handleClose()

    }
    return (
        <div>
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar Pokmeon</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={()=>handleSubmit()}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" name="nombre" placeholder="" value={nombre} onChange={handleInputChange} />

                                <Form.Label>Descripción</Form.Label>
                                <Form.Control type="text" name="descripcion" placeholder="" value={descripcion} onChange={handleInputChange} />

                                <Form.Label>Codigo</Form.Label>
                                <Form.Control type="text" name="codigo" placeholder="" value={codigo} onChange={handleInputChange} />

                                <Form.Label>Tipo</Form.Label>
                                <Form.Control type="text" name="precio" placeholder="" value={precio} onChange={handleInputChange} />

                            </Form.Group>

                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button type="submit" variant="primary" onClick={handleSubmit}>
                                Save
                            </Button>
                        </Form>

                    </Modal.Body>


                </Modal>
            </>
        </div>
    );
};

export default Edit;