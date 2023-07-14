import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = async ({ params }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>BlogPost</h1>
          <p className={styles.desc}>
            Description
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/16730749/pexels-photo-16730749/free-photo-of-close-up-of-pink-blossoms.jpeg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Blog username</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/16730749/pexels-photo-16730749/free-photo-of-close-up-of-pink-blossoms.jpeg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         Content
        </p>
      </div>
    </div>
  );
};

export default BlogPost;