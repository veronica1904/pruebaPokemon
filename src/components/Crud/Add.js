import React from "react";
import { Button, Form, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { FileUp } from "../../helpers/FileUp";
import { useForm } from "../../Hooks/useForm";
import { addAsync } from "../../redux/actions/actionPokemon";

import List from "./List";

const Add = () => {
  const dispatch = useDispatch();
  const [values, handleInputChange, reset] = useForm({
    nombre: "",
    codigo: "",
    descripcion: "",
    tipo: "",
    peso: "",
    foto: "",
  });

  const { nombre, codigo, descripcion, tipo, peso, foto } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    dispatch(addAsync(values));
    reset();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    //el FileUp es la configuracion con cloudinary y le asigno la respuesta de cloudi a la foto
    FileUp(file)
      .then((resp) => {
        values.foto = resp;
        console.log(resp);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} margin={50}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre de Pokémon</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            placeholder=""
            value={nombre}
            onChange={handleInputChange}
          />

          <Form.Label>Codigo</Form.Label>
          <Form.Control
            type="text"
            name="codigo"
            placeholder=""
            value={codigo}
            onChange={handleInputChange}
          />

          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            type="text"
            name="descripcion"
            placeholder=""
            value={descripcion}
            onChange={handleInputChange}
          />

          <Form.Label>Tipo</Form.Label>
          <Form.Control
            type="text"
            name="tipo"
            placeholder=""
            value={tipo}
            onChange={handleInputChange}
          />

          <Form.Label>Peso</Form.Label>
          <Form.Control
            type="text"
            name="peso"
            placeholder=""
            value={peso}
            onChange={handleInputChange}
          />

          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="file"
            name="foto"
            placeholder="Ingrese Foto.jpg"
            onChange={handleFileChange}
          />
        </Form.Group>

        <Button type="submit">
          <Image width={40} src="" />
        </Button>
      </Form>

      <List />
    </div>
  );
};

export default Add;
