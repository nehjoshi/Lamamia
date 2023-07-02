import Image from 'next/image';
import styles from './footer.module.css';
const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2023 Lamamia. All rights reserved.</div>
      <div className={styles.social}>
          <Image
            src="/1.png"
            alt="Lamadev FB"
            width={15}
            height={15}
            className={styles.icon}
          />
          <Image
            src="/2.png"
            alt="Lamadev IG"
            width={15}
            height={15}
            className={styles.icon}
          />
          <Image
            src="/3.png"
            alt="Lamadev Twitter"
            width={15}
            height={15}
            className={styles.icon}
          />
          <Image
            src="/4.png"
            alt="Lamadev YT"
            width={15}
            height={15}
            className={styles.icon}
          />
      </div>
    </div>
  )
}

export default Footer;