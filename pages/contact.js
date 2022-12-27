import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, phone, desc };
    fetch('http://localhost:3000/api/postcontact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.msg);
        setName('');
        setEmail('');
        setPhone('');
        setDesc('');
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handleChange = (e) => {
    if (e.target.name == 'name') {
      setName(e.target.value);
    } else if (e.target.name == 'email') {
      setEmail(e.target.value);
    } else if (e.target.name == 'phone') {
      setPhone(e.target.value);
    } else if (e.target.name == 'desc') {
      setDesc(e.target.value);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.h1}>Contact us</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          name="name"
          className={styles.inp}
          placeholder="Enter Name here."
          onChange={handleChange}
        />
        <input
          type="email"
          value={email}
          name="email"
          className={styles.inp}
          placeholder="Email Address"
          onChange={handleChange}
        />
        <input
          type="phone"
          value={phone}
          name="phone"
          className={styles.inp}
          placeholder="Phone number"
          onChange={handleChange}
        />
        <textarea
          value={desc}
          name="desc"
          className={styles.inp}
          placeholder="Reveiw Here"
          onChange={handleChange}
        />
        <button className={styles.btn}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
