// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/khandelwal-tanisha07/"
        target="_blank"
        title="Tanisha's Linkedin Profile"
      >
        Tanisha Khandelwal
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
    </div>
  );
};

export default Footer;
