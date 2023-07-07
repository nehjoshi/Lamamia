import Image from 'next/image';
import styles from './page.module.css';
import Button from '@/components/Button/Button';

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep In Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder='Name' className={styles.input} />
          <input type="email" placeholder='Email' className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder='Your feedback here...'
            cols="30"
            rows="10"
          />
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  )
}

export default Contact