import './Login.css';
import React, { useState } from "react";
import InstagramImage from "../../assets/images/instagram-celular.png"
import auth from '../../firebaseinit';
import {useSignInWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import Googlebutton from 'react-google-button'
import { useNavigate, Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram'



const MyLogin = () => {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleuser, googleloading, googleerror] = useSignInWithGoogle(auth);
  const navigate = useNavigate();


  if(error){
    console.log(error.message)
  }
  if(user || googleuser){
    navigate('/')
    console.log(user)
    console.log(googleuser)
  }
  if(loading){
    console.log('loading....')
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email,password);
  }

  const handleGoogleSignIn =() =>{
    signInWithGoogle();
}

  // if (error) {
  //   return (
  //     <div>
  //       <p>Error: {error.message}</p>
  //     </div>
  //   );
  // }
  // if (loading) {
  //   return <p>Loading...</p>;
  // }
  // if (user) {
  //   return (
  //     <div>
  //       <p>Signed In User: {user.email}</p>
  //     </div>
  //   );
  // }


  return (
    <>
      <div className="Login-container">
        <div class="image-container">
          <img className='image' src={InstagramImage} alt="Insta-bacground" />

        </div>
        <div class="form-container">
        <div className="form-box">

          <InstagramIcon  className="InstagramIcon"/>
          <h3 className="heading1">What's Happening Today</h3>

          <form onSubmit={handleSubmit}>
            <input type="email"
              className="email"
              placeholder="email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input type="password"
              className="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="btn-login">
              <button type="submit" className="btn" onClick={()=>signInWithEmailAndPassword(email,password)}>Login</button>
            </div>
          </form>
          <hr />
                    <div className="google-btn">
                        <Googlebutton
                            className="g-btn"
                            type="light"
                            onClick={handleGoogleSignIn}
                        />

                    </div>
                    <div className='sign-login'>
                        Don't have an account?
                        <Link to='/signup' style={{
                            textDecoration: 'none',
                            color: 'skyblue',
                            fontWeight: '600',
                            marginLeft: '5px'
                        }} >
                            Signup
                        </Link>
                    </div>
        </div>

        </div>

      </div>
    </>

  );
};

export default MyLogin;