import React from 'react';
import styles from '../styles/About.module.css';
const about = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.center}>About Dark Blog</h1>
      <h2 className={styles.h2}>Introduction to DarkBlog</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </p>

      <h2 className={styles.h2}>Our Servies</h2>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text
      </p>
      <ul className={styles.ul}>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
      </ul>
      <h2 className={styles.h2}>About us</h2>
      <p>
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced
        below for those interested. Sections 1.10.32 and 1.10.33 from "de
        Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
        original form, accompanied by English versions from the 1914 translation
        by H. Rackham.
      </p>
    </div>
  );
};

export default about;

