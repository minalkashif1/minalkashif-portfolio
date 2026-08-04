import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="contact-left">

        <span className="section-tag">CONTACT</span>

        <h2>Let's Build Something Together</h2>

        <p>
          Whether you have an exciting project, internship opportunity,
          or just want to say hello, I'd love to hear from you.
        </p>

      </div>

      <form className="contact-form">

        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Email Address"
        />

        <textarea
          rows={6}
          placeholder="Your Message"
        ></textarea>

        <button>
          Send Message
        </button>

      </form>

    </section>
  );
}

export default Contact;