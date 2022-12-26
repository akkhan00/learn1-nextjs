import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import * as fs from 'fs';

const Blogs = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        {blogs.map((item) => {
          return (
            <Link
              key={item.slug}
              href={`/blogpost/${item.slug}`}
              className={styles.card}
            >
              <h2>
                {item.title} <span>-&gt;</span>
              </h2>
              <p> {item.metadec.substring(0, 100)}&nbsp;Learn More! </p>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

// export async function getServerSideProps(context) {
//   let data = await fetch('http://localhost:3000/api/blogs');
//   let allBlogs = await data.json();
//
//   return {
//     props: { allBlogs },
//   };

export async function getStaticProps(context) {
  let files = fs.readdirSync('blogdata');
  let blogpostData = [];
  files.forEach((file) => {
    let filedata = fs.readFileSync(`blogdata/${file}`, 'utf-8');
    blogpostData.push(JSON.parse(filedata));
  });
  return {
    props: { allBlogs: blogpostData },
  };
}

export default Blogs;
