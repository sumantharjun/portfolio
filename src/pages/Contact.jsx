import './Contact.css';

const contacts = [
  {
    icon:  '✉️',
    label: 'Email',
    value: 'sumanthkolli12@gmail.com',
    href:  'mailto:sumanthkolli12@gmail.com',
  },
  {
    icon:  '💼',
    label: 'LinkedIn',
    value: 'kolli-sumanth-84954b186',
    href:  'https://www.linkedin.com/in/kolli-sumanth-84954b186/',
  },
  {
    icon:  '📱',
    label: 'Mobile',
    value: '+91 93473 07701',
    href:  'tel:+919347307701',
  },
];

export default function Contact() {
  return (
    <main className="contact-page">
      <div className="container">
        <div className="page-header">
          <h1 className="section-title">Get In <span>Touch</span></h1>
          <div className="section-line" />
          <p className="contact-subtitle">
            Open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </div>

        <div className="contact-grid">
          {contacts.map(({ icon, label, value, href }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer" className="contact-card card">
              <span className="contact-icon">{icon}</span>
              <div>
                <p className="contact-label">{label}</p>
                <p className="contact-value">{value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
