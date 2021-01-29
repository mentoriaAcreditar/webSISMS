import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import router from 'next/router';

class Login extends Component {
  logar() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().languageCode = 'pt';
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        return firebase
          .auth()
          .signInWithPopup(provider)
          .then((result) => {
            const id = result.credential?.providerId;
            const usuario = result.user;
            console.log(id, ':', usuario?.uid, ':', usuario?.email);
            router.push('profile');
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const { email } = error;
            const { credential } = error;
            console.log(errorCode, errorMessage, email, credential);
          });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  render() {
    return (
      <div
        style={{ background: 'url(./background.svg) no-repeat center/cover' }}
        className="min-h-screen bg-gray flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-md rounded-lg shadow-xs bg-white p-12 w-full space-y-8">
          <img
            className="mx-auto h-12 w-auto"
            src="./Logo.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
            Faça login em sua conta
          </h2>

          <button
            onClick={() => this.logar()}
            className="flex flex-row items-center justify-center shadow-lg bg-green w-full h-16 space-x-6
            rounded-full transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-10 "
          >
            <img className="w-12" src="./google_icon.png" />
            <span className="mt-2 text-white items-center">
              Logar com Google
            </span>
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
