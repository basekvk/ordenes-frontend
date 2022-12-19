import axios from "axios";

export async function createOrdersAPI(orders) {
  axios.post("http://localhost:1337/api/orders", {
    data:{
        name: orders.name,
        domicilio: orders.domicilio,
        telefono: orders.telefono,
        fecha:orders.fecha,
        trabajos:orders.trabajos,
        observaciones:orders.observaciones,

    },
  })
    .then((response) => {
        console.log(response);
        })
}

export async function editOrdersAPI(id){
    axios.put(`http://localhost:1337/api/orders/${id}`, {
        data:{
            name: orders.name,
            domicilio: orders.domicilio,
            telefono: orders.telefono,
            fecha:orders.fecha,
            trabajos:orders.trabajos,
            observaciones:orders.observaciones,
    
        },
    })
    .then((response) => {
        console.log(response);
        })
}
