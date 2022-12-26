import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css';
import * as fs from 'fs';

const Slug = () => {
  const [blog, setBlog] = useState();
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    let { slug } = router.query;
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlog(data);
        console.log(data);
      });
  }, [router.isReady]);

  function createMarkup(c) {
    return { __html: c };
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.hh2}>{blog && blog.title}</h1>
      {blog && <p dangerouslySetInnerHTML={createMarkup(blog.content)} />}
    </main>
  );
};

// export async function getServerSideProps(context) {
//   const { slug } = context.query;
//
//   const data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
//   const myBlog = await data.json();
//
//   return {
//     props: { myBlog },
//   };
// }

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'how-to-learn-javascript' } },
      { params: { slug: 'how-to-learn-nextjs' } },
      { params: { slug: 'how-to-learn-flask' } },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  let myBlog = fs.readFileSync(`blogdata/${slug}.json`, 'utf-8');

  return {
    props: { myBlog: JSON.parse(myBlog) },
  };
}
export default Slug;
