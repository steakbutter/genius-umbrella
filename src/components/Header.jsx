// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Header from './UI/Navbar';

export default function Navbar() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <>
    <h1>Carlos Gzz Perales </h1>
    <Header
    links={[
        <Link key={1} className="nav-link text-light" to="/about">
          About Me
        </Link>,
        <Link key={2} className="nav-link text-light" to="/portfolio">
        Portfolio
      </Link>,
        <Link key={3} className="nav-link text-light" to="/contact">
        Contact
      </Link>,
      <Link key={4} className="nav-link text-light" to="/resume">
      Resume
    </Link>,
      ]}
      />
    </>
    );
  }
