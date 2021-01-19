import React, { Component } from 'react';
import firebase from 'firebase/app';
import Input from '../../components/Input';
import 'firebase/auth';
import { Usuario } from '../../models/usuario';
import { Cidadao } from '../../models/cidadao';

class User extends Component<Usuario> {
  cidadao: Cidadao = new Cidadao();

  componentDidMount() {
    this.setState(() => {
      firebase.auth().onAuthStateChanged((user) => {
        this.cidadao = new Cidadao();
        this.cidadao.id = user?.uid ? user.uid : '';
        this.cidadao.nome = user?.displayName ? user.displayName : '';
        this.cidadao.email = user?.email ? user.email : '';
        this.cidadao.avatar = user?.photoURL ? user.photoURL : '';

        console.log(this.cidadao);

        this.setState({ user: this.cidadao });
      });
    });
  }

  onInputchange(event: React.ChangeEvent<HTMLInputElement>) {
    if (this.cidadao.isTemOAtributo(event.target.id)) {
      this.cidadao[event.target.id] = event.target.value;
      this.setState({ user: this.cidadao });
    }
  }

  onSubmitForm() {
    console.log(this.cidadao);
  }

  render() {
    return (
      <div className="sm:px-10 ">
        <div className="flex flex-col items-center justify-center bg-green3 shadow-lg">
          <h1 className="text-white text-3xl">Seu perfil</h1>
          <div className="  flex rounded-full border-4 border-white">
            <img
              className="w-20 h-20 rounded-full"
              src={this.cidadao ? this.cidadao.avatar : './avatar.png'}
              alt=""
            />
          </div>
          <span className="text-white">24 anos, auxiliar de enfermagem</span>
        </div>
        <div className="mt-4 shadow-lg sm:px-48 flex flex-col  n items-center">
          <div className="">
            <div className="divide-y divide-green">
              <h1 className="text-green text-2xl">Seus dados pessoais</h1>
              <p>
                <br />
              </p>
            </div>

            <div className="divide-y divide-green mt-8">
              <h1 className="text-green text-2xl">Local de trabalho</h1>
              <p>
                <br />
              </p>
            </div>
          </div>

          <button
            onClick={() => this.onSubmitForm()}
            className="bg-green3 text-white rounded-3xl w-1/2 h-10 my-8"
          >
            Atualizar dados
          </button>
        </div>
      </div>
    );
  }
}
export default User;
