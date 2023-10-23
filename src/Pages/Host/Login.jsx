import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import styles from "../../Styles/register.module.css";
import { useEffect, useState } from "react";
import { fireAuth, fireStoreDB } from "../../Firebase/base";
import { onAuthStateChanged, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDocs, setDoc, collection, doc } from "firebase/firestore";
import { useLoader } from "../../main";
import { icon } from "../../External/external";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');
  const navigate = useNavigate();

  const { setLoader } = useLoader();

  useEffect(() => {
    setLoader(false)
    // console.log(fireAuth.currentUser.uid)
  }, [])

  const loginUser = () => {
    setLoader(true);
    if (email, password) {
      signInWithEmailAndPassword(fireAuth, email, password)
        .then((res) => {
          navigate(`/createProfile`)
        })
        .catch(() => {
          setLoader(false);
          setErrorText('Invalid email or password');
        })
    }
  }

  return (
    <>
      <Navbar props={{ type: 'max' }} />
      <section className={styles.wrapper}>
        <section className={styles.left}>
          <p style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Link to={'/'} id="logo" className="logo1" style={{ color: 'wheat' }}>Pick&Hook</Link>
            {icon('phishing')}
          </p>
        </section>
        <section className={styles.right}>
          <form onSubmit={e => { e.preventDefault() }}>
            <strong>Login To Continue <sub></sub></strong>
            {errorText &&
              <small style={{ padding: '5px', background: 'var(--theme)', color: 'wheat', borderRadius: '3px' }}>
                {errorText}
              </small>
            }
            <section>
              <div>
                <span>Email</span>
                <input type="email" value={email} onChange={e => { setEmail(e.target.value) }} required />
              </div>
              <div>
                <span>Password</span>
                <input type="password" value={password} onChange={e => { setPassword(e.target.value) }} required />
              </div>
            </section>
            <button type="submit" onClick={loginUser}>Login</button>
            <Link to={'/register'}>
              <small>Don't have an account? Register here</small>
            </Link>
          </form>
        </section>
      </section>
    </>
  );
}

export default Login;