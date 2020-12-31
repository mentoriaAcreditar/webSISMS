import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import router from 'next/router';
class Login extends Component {
  logar() {
    var provider = new firebase.auth.GoogleAuthProvider();
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
            var id = result.credential?.providerId;
            var usuario = result.user;
            console.log(id, ':', usuario?.uid, ':', usuario?.email);
            router.push('user');
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(errorCode, errorMessage, email, credential);
          });
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  }
  render() {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="./Logo.svg"
                alt="Workflow"
              />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Faça login em sua conta
              </h2>
              <div className="mt-2 text-center text-sm text-gray-600">
                <div className="rounded-lg shadow-md">
                  <button
                    onClick={() => this.logar()}
                    className="  block w-full text-center rounded-lg bg-white-800 px-6 py-4 text-xl leading-6 font-semibold font-display text-gray hover:bg-gray-300 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
                  >
                    <div className="grid grid-cols-3">
                      <div className="place-self-end">
                        <img className="h-12" src="./google_icon.png" />
                      </div>
                      <div className="mt-2">Logar com Google</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
