import Image from "next/image";
import styles from "./page.module.css";
import logo from '../public/logo.png';

export default function Home() {
  return (
    <main className="d-flex mt-auto mb-auto fade-in">
     <div className="container">
    <div className="d-flex">
    <Image src={logo} 
    alt="GFG logo imported from public directory"
    className="ms-auto me-auto"/> 
    </div>
    <div>
    <h1 className="display-3 text-teal-mid fw-bolder text-center">Empowering libraries through technology</h1>
    <p className="fs-5 text-teal-mid text-center">At Freeware for Libraries, we believe that access to valuable applications should not be limited by financial constraints. Our mission is to share 
      essential software with libraries of all sizes, 
      providing them with the tools they need to enhance their services and support their communities.</p>
      </div>
      </div>
         
    </main>
  );
}
