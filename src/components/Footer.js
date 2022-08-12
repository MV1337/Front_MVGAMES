import styles from "./Footer.module.css";

const Footer = () => {

  var year = new(Date)
  var currentYear = year.getFullYear()

  return (
    <footer className={styles.footer}>
      <p>MV Games &copy;{currentYear}</p>
    </footer>
  );
};

export default Footer;
