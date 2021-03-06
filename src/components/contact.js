


function Contact () {
    return (
    <section id="contact">
        <h1 class="section-header">CONTACT</h1>
            <div class="contact-wrapper">
            <form
  action="https://formspree.io/f/mrgorqjr"
  method="POST" class="form-horizontal"
>
                {/* <form class="form-horizontal" role="form" method="post" action="contact.php">   */}
                        <div class="form-group">
                            <div class="col-sm-12">
                            <input type="text" class="form-control" id="name" placeholder="NAME" name="name" />
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-12">
                            <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email"/>
                            </div>
                        </div>
                        <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message"></textarea>                       
                        <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                            <div class="button">
                            <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
                            </div>
                        
                        </button>
                        
            </form> 
    
    
    
        <div class="direct-contact-container">
            <ul class="contact-list">
                    <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">Lewes | East Sussex</span></i></li>                   
                    <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">07845 003045</a></span></i></li>                  
                    <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:tombuzzcox@gmail.com" title="Send me an email">tombuzzcox@gmail.com</a></span></i></li>           
            </ul>
        <div class="copyright">&copy; click, tom copy </div>

      </div>
    
  </div>
  
</section> 
    )
}

export default Contact;