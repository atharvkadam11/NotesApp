const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer>
      <p>
        <small>
          Copywrite © {year}
          <br />
          Atharv Amit Kadam - All Rights Reserved
        </small>
      </p>
    </footer>
  );
};

export default Footer;
