import NavBar from './NavBar';
import foto from '../assets/img/Tom.jpg'


function About () {
    return (
      <div  class="page-wrapper">
       <aside>
        <h1>Tom Cox</h1>
        <p class="flourish">~</p>
        <p class="bio">
        “The difference between the almost right word and the right word is really a large matter. ’tis the difference between the lightning bug and the lightning.” <br/>- Mark Twain
        </p>

       </aside>
        <article>
            <div class="author">
                <p><span>tom buzz cox</span></p>
            </div>
            <div class="image">
              <img src={foto}></img>
            </div>
            <div class="text">
                <p className="primer"> I've been crazy about words ever since the first one tumbled out of my mouth. (“Sun,” in case you were wondering.) </p>
                <p>I taught English for eight years before making the switch to full time copywriting. Even when teaching, I never stopped writing. I worked as a football journalist for Spain’s largest football website. I blogged for Spain’s largest broadsheet. I wrote interactive quizzes about Britain for the French company OpenAsk.com and translated a poem anthology so successfully that the writer told me he preferred my English versions of his poems to his Spanish ones!</p>
                <p> I’m fascinated by what makes us tick. Why we make the decisions we do. I love copywriting because it’s a combination of writing and psychology. You can write the prettiest sentences in the word, but if you don’t understand your readers. And I mean really - what’s keeping them up at 3am - understand them.  If you don’t think like they think and speak like they speak then those pretty sentences aren’t worth the pixels they are printed on. Good copywriting is a combination of art, science and good old-fashioned hard work. I love nothing better than rolling my sleeves up and getting to grips with a new project.</p>
                <p> If I'm not  then I’m probably cycling around Sussex trying desperately to beat my Strava records.</p>
            </div>
       
       </article>      
      </div>
    );
  }
  
  export default About;
  