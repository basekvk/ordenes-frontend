function NewOrder() {
  return (
    <div className="container">
    <h1 className="text-center">NUEVA ORDEN</h1>
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          CLIENTE
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          DOMICILIO
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
         
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          TELEFONO
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          FECHA
        </label>
        <input
          type="date"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          TRABAJOS A REALIZAR
        </label>
        <textarea

          type="text"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          OBSERVACIONES
        </label>
        <textarea
          type="text"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          ESTADO
        </label>
        <select className="form-select" aria-label="Default select example">
          <option selected>Seleccionar</option>
          <option value={1}>POR REALIZAR</option>
          <option value={2}>EN PROCESO</option>
          <option value={3}>TERMINADO</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        ENVIAR
      </button>
    </form>
  </div>
  );
}

export default NewOrder;