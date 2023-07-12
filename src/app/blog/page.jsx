import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/test" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/16730749/pexels-photo-16730749/free-photo-of-close-up-of-pink-blossoms.jpeg" alt="" className={styles.image} width={400} height={250} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
      <Link href="/blog/test" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/16730749/pexels-photo-16730749/free-photo-of-close-up-of-pink-blossoms.jpeg" alt="" className={styles.image} width={400} height={250} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
      <Link href="/blog/test" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/16730749/pexels-photo-16730749/free-photo-of-close-up-of-pink-blossoms.jpeg" alt="" className={styles.image} width={400} height={250} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
    </div>
  )
}

export default Blog