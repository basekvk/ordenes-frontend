import Link from "next/link";
import Image from 'next/image';



const links = [
  {
    label: "Inicio",
    route: "/",
  },
  {
    label: "Nueva Orden",
    route: "/neworders",
  },
  {
    label: "Ordenes",
    route: "/orders",
  },
];

export default function Navigation() {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-md bg-dark py-3">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#" />
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navcol-6"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse flex-grow-0 order-md-first"
            id="navcol-6"
          >
            <ul className="navbar-nav me-auto">
              {links.map(({ label, route }) => (
                <li className="nav-item" key={route}>
                  <Link className="nav-link active" href={route}>
                    {label}
                  </Link>
                </li>
              ))}
            
            </ul>
            <div className="d-md-none my-2">
              <button className="btn btn-light me-2" type="button">
                Button
              </button>
              <button className="btn btn-primary" type="button">
                Button
              </button>
            </div>
          </div>
          <Image
          
            src="/images/logo.png"
            style={{ marginTop: 1, display: "flex", marginRight: 181 }}
            width={310}
            height={65}
          />
          <div className="d-none d-md-block">
            <a className="btn btn-light me-2" role="button" href="#">
              Button
            </a>
            <a className="btn btn-primary" role="button" href="#">
              Button
            </a>
          </div>
        </div>
      </nav>
     
    </>
  );
}
