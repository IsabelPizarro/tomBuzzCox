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
                        <li>East Sussex Copywriter</li>
                        <li>Copywriting and content writing that connects with your customers</li>
                        <li></li>
                  </ul>
              </div>
          </div>
    </section>
    <section class="section-black">
			<div class="container">
				<h3> Copy that gets attention. </h3>

				<p className="p"> And knows what to do with it. </p>
        <p className="p">Hi, I'm Tom. I write clean, creative copy that never forgets what it’s there to do: persuade, sell, and move people to action. </p>
        <p className="p">Your business needs search-friendly content that doesn’t feel like it was written by an algorithm. SEO that’s not DOA. It needs words and insight designed to gently persuade without shouting or twisting arms.</p>
        <p className="p">Good copy will help people to discover your business, trust your business, buy from your business, and come back to your business. That’s the kind of copy that I write.</p>
        <p className="p">If you need a website written from scratch, a copy makeover, a blog, a script, a flyer, or anything else written down, I’m your huckleberry.</p>
        <p className="p"> I’ll take the time to understand your product and your customers and I’ll write copy that answers their questions, anticipates their objections </p>
        <p className="p">and convinces them that your business is the way to go.</p>
                    
        <button class="hero-button"><Link to="/contact">Get in touch</Link>   </button>
       </div>
      </section>      
    </div>
  );
}

export default Home;
