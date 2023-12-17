import './Contact.module.css'
import { Link } from 'react-router-dom'

export default function Contact(){
    return (
        <div className='contact-container'>
        <section>
          <h2>Our Office</h2>
          <p>
            Thank you for your interest. You can find us at the following address:
          </p>
          <address>
            <strong>Your Company Name</strong>
            <br />
            55 Stratton Drive,
            <br />
            WN25HR, Wigan,
            <br />
            United Kingdom
          </address>
          <p>Feel free to contact us via email or phone:</p>
          <ul>
            <li>
              Email: <a href="mailto:i.r.angelov92@gmail.com">i.r.angelov92@gmail.com</a>
            </li>
            <li>Phone: +447767099465</li>
          </ul>
        </section>
        
          <h2>Find Us on the Map</h2>
          <Link to="https://www.google.com/maps?q=55+Stratton+Drive,+Wigan,+UK" target="_blank">
          <img id="map" src="/img/map.png" alt="Map Image" />
        </Link>
        </div>
   
    )
        
    
}