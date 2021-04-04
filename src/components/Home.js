// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Home () {
  return (
    <div >
      {/* <nav class="navbar navbar-expand-lg navbar-light bg-light p-5">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Tom Cox</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="">
                  <Link to="/about">Home</Link>

                  </li>
                  <li class="nav-item">
                  <Link to="/about">About</Link>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Blog</a>
                  </li>
                </ul>
              </div>
            </div>
        </nav> */}
      <section class="full-width-img">
          <div class="container">
              <div class="box">
                  <ul class="subheading-text">
                        <li> Creative Copywriting. </li>
                        <li> For Great People </li>
                        <li> Like You.</li>
                  </ul>
                  <ul class= "smaller-text">

                      <li>If you're doing something amazing, you want people to notice.</li>
                      <li>That can be tricky in a world where everyone is shouting.</li>
                      <li>I write copy that helps you to cut through the noise.</li>
                     
                      
                    
                      <li>Call me on 07845 003045 or<Link to="/contact"> send an email.</Link></li>
                      <li> </li>
                      
                      
                      
              
                        
                        
           
                      
                      <li></li>
                  </ul>
              </div>
          </div>
    </section>
    <section class="section-black">
			<div class="container">
				<h3> "I can't recommend Tom highly enough. He researched my business like a madman, was a joy to work with and produced great results." </h3>

			
        <p className="p"> Thomas Anthony, Founder - Everything Must Grow </p>
        
                    
        <button class="hero-button"><Link to="/contact">Get in touch</Link>   </button>
       </div>
      </section>      
    </div>
  );
}

export default Home;
