import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <Link href="/"> <li className='dummy'>Home</li></Link>
                <Link href="/about"><li>About</li></Link>
                <Link href="/contact"><li>Contact</li></Link>
                <Link href="/blogs"><li>Blogs</li></Link>
            </ul>
        </nav>
    )
}

export default Navbar