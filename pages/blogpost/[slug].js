import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from "../../styles/Home.module.css"

const slug = () => {
    const [blog, setBlog] = useState();
    const router = useRouter();
    useEffect(() => {
        if (!router.isReady) return;
        let { slug } = router.query;
        fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then(res => {
            return res.json();
        }).then(data => {
            setBlog(data);
            console.log(data);
        })
    }, [router.isReady])
    return (
        <main className={styles.main}>
            <h1 className={styles.hh2}>{blog && blog.title}</h1>
            <p>{blog && blog.content}</p>
        </main>
    )
}

export default slug