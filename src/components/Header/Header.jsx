import Navbar from './Navbar';


const Header = () => {

  return (
    <header className='header'>
      <div className="container">
        <a href={"/"}>
          <h1 className='header__title animate__animated animate__fadeInTopLeft animate__fast'>
            LabTech
          </h1>
        </a>
        <Navbar/>
      </div>
    </header>
  )

};

export default Header