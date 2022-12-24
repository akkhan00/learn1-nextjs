import { useRouter } from 'next/router'
import React from 'react'
import styles from "../../styles/Home.module.css"

const slug = () => {
    const router = useRouter();
    const { slug } = router.query;
    return (
        <main className={styles.main}>
            <h1 className={styles.hh2}>Blog Title: {slug}</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, nemo molestiae. Beatae pariatur nulla est possimus illo dolor at perspiciatis labore sapiente modi. Fuga suscipit accusantium illum? Culpa, accusantium eveniet.</p>
        </main>
    )
}

export default slug