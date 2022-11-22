import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { Container } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import Commonsection from '../components/UI/CommonSection/Commonsection';

import '../styles/login.css';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

import { auth, storage, db } from '../firebase.config';
import { uploadBytesResumable, ref, getDownloadURL } from 'firebase/storage';
import { async } from '@firebase/util';
import { doc, setDoc } from 'firebase/firestore';

const Login = () => {
  // const [showTab, setShowTab] = useState();

  const [ToggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) => (ToggleState === index ? className : '');

  const resetPass = useRef();
  const formLogin = useRef();
  const openReset = () => {
    resetPass.current.classList.add('pass__active');
    formLogin.current.classList.add('pass__active');
  };

  const removeReset = () => {
    resetPass.current.classList.remove('pass__active');
    formLogin.current.classList.remove('pass__active');
  };

  //save user info to firebase
  // signInWithEmailAndPassword();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [userName, setUserName] = useState('');
  const [file, setFile] = useState('');

  const signup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
      const user = userCredential.user;
      // console.log(user);

      const storageRef = ref(storage, `image/${Date.now() + userName}`);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(user, {
              displayName: userName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, 'users', user.uid), {
              uid: user.uid,
              displayName: userName,
              email,
              photoURL: downloadURL,
            });
          });
        },
      );
      alert('ok');
    } catch (error) {
      alert(error);
    }
  };

  console.log(userName, file);

  const [emailSignIn, setEmailSignIn] = useState('');
  const [passSignIn, setPassSignIn] = useState('');

  const signin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, emailSignIn, passSignIn);
      const userSignIn = userCredential.user;
      // console.log(userSignIn);
      alert('login successfull');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Helmet title="Account">
      <Commonsection title="Your Account" />
      <section className="acc">
        <Container>
          <div className="acc__content">
            <ul className="acc__tab">
              <li className={`acc__tab-title ${getActiveClass(1, 'acc__tab-active')}`} onClick={() => toggleTab(1)}>
                Login
              </li>
              <li className={`acc__tab-title ${getActiveClass(2, 'acc__tab-active')}`} onClick={() => toggleTab(2)}>
                Create Account
              </li>
            </ul>
            <div className="acc__detail">
              <div className={`acc__desc ${getActiveClass(1, 'acc__desc-active')}`} onClick={() => toggleTab(1)}>
                <form action="#" className="acc__form" ref={formLogin} onSubmit={signin}>
                  <div className="acc__form-inp">
                    <input type="email" placeholder="Email" value={emailSignIn} onChange={(e) => setEmailSignIn(e.target.value)} />
                  </div>
                  <div className="acc__form-inp">
                    <input type="password" placeholder="Password" value={passSignIn} onChange={(e) => setPassSignIn(e.target.value)} />
                  </div>
                  <button type="submit" className="acc__form-btn">
                    Sign in
                  </button>
                  <a href="#" className="acc__form-note" onClick={openReset}>
                    Forgot your password?
                  </a>
                </form>
                <div className="reset__pass" ref={resetPass}>
                  <div className="reset__pass-header">
                    <h4>RESET YOUR PASSWORD</h4>
                    <p>We will send you an email to reset your password.</p>
                  </div>
                  <form action="#" className="acc__form">
                    <div className="acc__form-inp">
                      <input type="email" placeholder="Email" />
                    </div>
                    <button type="submit" className="acc__form-btn">
                      Submit
                    </button>
                    <a href="#" className="acc__form-note" onClick={removeReset}>
                      Cancel
                    </a>
                  </form>
                </div>
              </div>
              <div className={`acc__desc ${getActiveClass(2, 'acc__desc-active')}`} onClick={() => toggleTab(2)}>
                <form action="#" className="acc__form" onSubmit={signup}>
                  <div className="acc__form-inp">
                    <input type="text" placeholder="Name" value={userName} onChange={(e) => setUserName(e.target.value)} />
                  </div>
                  <div className="acc__form-inp">
                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="acc__form-inp">
                    <input type="password" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} />
                  </div>
                  <div className="acc__form-inp">
                    <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                  </div>
                  <button type="submit" className="acc__form-btn">
                    Sign up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
