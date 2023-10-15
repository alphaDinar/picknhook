import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import styles from "../../Styles/register.module.css";
import { useState } from "react";
import { fireAuth, fireStoreDB } from "../../Firebase/base";
import { onAuthStateChanged, createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getDocs, setDoc, collection, doc } from "firebase/firestore";
import { useLoader } from "../../main";

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [errorText, setErrorText] = useState('');
  const navigate = useNavigate();

  const { loader, setLoader } = useLoader();

  const createUser = () => {
    if (email, phone) {
      if (password.length > 7) {
        if (password === confirmPassword) {
          setLoader(true);
          createUserWithEmailAndPassword(fireAuth, email, password)
            .then((res) => {
              console.log('mexes')
              setDoc(doc(fireStoreDB, 'Hosts/' + res.user.uid), {
                email: res.user.email,
                phone: phone,
                profile: [{}],
                payment: [{}],
                posts: [],
                tags: [],
              })
                .then(() => navigate('/login'))
                .catch((error) => console.log(error))
            })
            .catch((error) => {
              console.log(error)
              setLoader(false);
              setErrorText('Email already in use');
            })
        } else {
          setErrorText('Passwords don"t match')
        }
      } else {
        setErrorText('Password must be at least 8 characters')
      }
    }
  }

  return (
    <>
      <Navbar props={{ type: 'max' }} />
      <section className={styles.wrapper}>
        <section className={styles.left}>
          <p>
            <Link to={'/'} id="logo" className="logo1" style={{ color: 'wheat' }}>Pick&Hook</Link>
            <small>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore necessitatibus quae fuga ducimus dignissimos incidunt corporis! Similique magni officiis, culpa laborum, eligendi ratione architecto adipisci neque vero doloremque assumenda esse.
            </small>
          </p>
        </section>
        <section className={styles.right}>
          <form onSubmit={e => { e.preventDefault() }}>
            <strong>Register <sub></sub></strong>
            {errorText &&
              <small style={{ padding: '5px', background: 'var(--theme)', color: 'wheat', borderRadius: '3px' }}>
                {errorText}
              </small>
            }
            <section>
              <div>
                <span>Email</span>
                <input type="email" value={email} onChange={e => { setEmail(e.target.value) }} placeholder="Won't show on your profile" required />
              </div>
              <div>
                <span>Password</span>
                <input type="password" value={password} onChange={e => { setPassword(e.target.value) }} required />
              </div>
              <div>
                <span>Confirm Password</span>
                <input type="password" value={confirmPassword} onChange={e => { setConfirmPassword(e.target.value) }} required />
              </div>
              <div>
                <span>Phone</span>
                <input type="tel" value={phone} onChange={e => { setPhone(e.target.value) }} placeholder="may be asked in case of forgotten email" required />
              </div>
            </section>
            <button type="submit" onClick={createUser}>Register</button>
            <Link to={'/login'}>
              <small>Do you already have an account? Login here</small>
            </Link>
          </form>
        </section>
      </section>
    </>
  );
}

export default Register;