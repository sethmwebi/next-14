import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>sethdev</div>
      <div className={styles.text}>
        Lama creative thoughts agency. &copy; All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
