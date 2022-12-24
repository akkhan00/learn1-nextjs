import React, { useEffect, useState } from 'react'
import styles from "../styles/Home.module.css"
import Link from 'next/link'

const Blogs = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/api/blogs").then((res) => {
      return res.json();
    }).then(data => {
      setBlogs(data);
    })
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        {blogs.map(item => {
          return <Link key={item.slug} href={`/blogpost/${item.slug}`} className={styles.card}>
            <h2 >{item.title} <span>-&gt;</span></h2>
            <p > {item.content.substring(0, 100)}&nbsp;Learn More! </p>
          </Link>
        })}
      </div>
    </main >
  )
}

export default Blogs