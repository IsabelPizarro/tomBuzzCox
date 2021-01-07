// import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
  function NavBar () {
    return (
      <div >
          {/* <div className="bg-light"> <span>07845003045</span> <span>tombuzzcox@gmail.com</span></div> */}
        <nav class="navbar navbar-expand-lg navbar-light bg-light p-5">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">Tom Buzz Cox</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="">
                      {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                    <Link to="/">Home</Link>
  
                    </li>
                    <li class="nav-item">
                    <Link to="/about">About</Link>
                      {/* <a class="nav-link" href="#">About</a> */}
                    </li>
                    <li class="nav-item">
                    <Link to="/contact">Contact</Link>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Blog</a>
                    </li>
                  </ul>
                </div>
              </div>
          </nav>     
      </div>
    );
  }
  
  export default NavBar;
  