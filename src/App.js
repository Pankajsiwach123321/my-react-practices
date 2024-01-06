import logo from './logo.svg';
import './App.css';
import './style.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Custumaccordion from './components/Custumaccordion';
import Mycoursel from './components/Mycoursel';
import Mycustum from './components/Mycustum';
import Mymodal from './components/Mymodal';
import Mypropsbtn from './components/Mypropsbtn';
import Conditionrendering from './components/Conditionrendering';
import TabId from './components/TabId';
import Hoverstate from './components/Hoverstate';
import UseEffect from './components/UseEffect';
import Backo from './components/Backo';
import Notification from './components/Notification';
function App() {
  return (
    <>
      {/* <div className="App overflow-hidden">
        <div className='container'>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Navbar</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
          <Mycustum />
          <Custumaccordion />
          <Mycoursel />
          <Mymodal />
          <Mypropsbtn text='my1' />
          <Mypropsbtn text='my2' />
          <Mypropsbtn text='my3' />
          <Mypropsbtn text='my1' />
          <Conditionrendering />
        </div>
        <TabId />
        <Hoverstate />
      </div> */}
      <>
        {/* <UseEffect /> */}
        <Backo />
        <Notification />
      </>
    </>
  );
}

export default App;
