import "./contactSection.scss";

export default function ContactSection() {
  return (
    <section id="contact" className="section contact">
      <h1>Contact</h1>
      <div className="containerContact">
        <div className="containerCarres">
          <a
            href="https://goo.gl/maps/BqiocGLJUpzgK6oq7"
            className="carre"
            target="_blank"
          >
            <p>
              <i className="fa-sharp fa-solid fa-location-dot"></i>
            </p>
            <p>56 MORBIHAN</p>
          </a>
          <div className="carre">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d665526.4385208865!2d-3.2535706177047827!3d47.88045745614973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x481022b4db31c689%3A0x30ca5cd36df2900!2sMorbihan!5e0!3m2!1sfr!2sfr!4v1664443085344!5m2!1sfr!2sfr"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <a href="tel:0783059744" className="carre">
            <p>
              <i className="fa-solid fa-phone"></i>
            </p>
            <p>07 83 05 97 44</p>
          </a>

          <a
            href="mailto:hugo.web56@gmail.com"
            className="carre"
            target="_blank"
          >
            <p>
              <i className="fa-solid fa-envelope"></i>
            </p>
            <p>hugo.web56@gmail.com</p>
          </a>
        </div>
      </div>
    </section>
  );
}
