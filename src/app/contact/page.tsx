export default function ContactForm() {
    return (
      <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <div>
          <label >Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label >Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label>Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </div>
    </div>
    
    );
  }