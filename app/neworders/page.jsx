"use client";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import {createOrdersAPI} from '../../api/orders';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function OrderForm() {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formData) => {
      createOrder(formData);
    },
  });

  const createOrder = async (formData) => {
    setLoading(true);
    console.log(formData);
    const response = await createOrdersAPI(formData);
    if(!response){
        toast.warning("Error al crear la orden")
        setLoading(false);
    }else{
        toast.success("Orden creada correctamente")
        formik.resetForm();
        setLoading(false);
    }
    
  };
  

  return (
    <div className="container">
      <h1 className="text-center">NUEVA ORDEN</h1>
      <Form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <Form.Input
            className="form-control"
            name="name"
            type="text"
            label="CLIENTE"
            onChange={formik.handleChange}
            value={formik.values.name}
            error={formik.errors.name}
          />
        </div>
        <Form.Group widths="equal">
          <div className="mb-3">
            <Form.Input
              className="form-control"
              name="domicilio"
              type="text"
              label="DOMICILIO"
              onChange={formik.handleChange}
              value={formik.values.domicilio}
              error={formik.errors.domicilio}
            />
          </div>
          <div className="mb-3">
            <Form.Input
              className="form-control"
              name="telefono"
              type="number"
              label="TELEFONO"
              onChange={formik.handleChange}
              value={formik.values.telefono}
              error={formik.errors.telefono}
            />
          </div>
          <div className="mb-3">
            <Form.Input
              className="form-control"
              name="fecha"
              type="date"
              label="FECHA"
              onChange={formik.handleChange}
              value={formik.values.fecha}
              error={formik.errors.fecha}
            />
          </div>
          <div className="mb-3">
            <Form.Input
              className="form-control"
              name="trabajos"
              type="text"
              label="TRABAJOS A REALIZAR"
              onChange={formik.handleChange}
              value={formik.values.trabajos}
              error={formik.errors.trabajos}
            />
          </div>
          <div className="mb-3">
            <Form.Input
              className="form-control"
              name="observaciones"
              type="text"
              label="OBSERVACIONES"
              onChange={formik.handleChange}
              value={formik.values.observaciones}
              error={formik.errors.observaciones}
            />
          </div>
        </Form.Group>
        <div className="form-group">
          <Button
            className="btn btn-primary mt-3"
            type="submit"
            loading={loading}
          >
            Crear
          </Button>
        </div>
      </Form>
    </div>
  );
}

function initialValues() {
  return {
    name: "",
    domicilio: "",
    telefono: "",
    fecha: "",
    trabajos: "",
    observaciones: "",
    
  };
}
function validationSchema() {
  return {
    name: Yup.string().required(),
    domicilio: Yup.string().required(),
    telefono: Yup.number().required(),
    fecha: Yup.date().required(),
    trabajos: Yup.string().required(),
    observaciones: Yup.string(),
    
  };
}
