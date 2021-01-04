import './App.css';

function App() {
  return (
    <div >
      <header>
        <nav id="main-navbar" class="navbar navbar-default navbar-fixed-top">
              <div class="container navbar-container">
                    <div class="navbar-header">
                      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar">tbc</span>
                      </button>
                      <a class="navbar-brand" href="#">Tom Buzz Cox </a>
                    </div>
                    <div id="ulBar" >
                        <a href="#">HOME        </a>       
                        <a href="#">ABOUT    </a> 
                        <a href="#">CONTACT  </a> 
                        <a href="#">BLOG      </a> 
                    </div>

                    <div class="top-social">
                      <ul id="top-social-menu">
                      
                        <li> 07845003045</li>
                        <li> tombuzzcox@gmail.com</li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </header>
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
        <button class="hero-button">Get in touch</button>
       </div>
      </section>      
    </div>
  );
}

export default App;
