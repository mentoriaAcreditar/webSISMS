import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const PerfilProfissional = () => {
  const router = useRouter();
  const { perfil } = router.query;
  return (
    <>
      <div className="  flex flex-row   p-4 shadow-xs bg-purpleDark">
        <Link href="/">
          <div className="flex cursor-pointer flex-row space-x-2">
            <img src="./arrow-left.svg" alt="" />
          </div>
        </Link>
        <div className="w-full text-white  text-xl flex flex-row items-center justify-center">
          <h1>Perfil do Profissional</h1>
        </div>
      </div>
      <div className="flex  flex-col bg-gray">
        <div className="bg-purple w-full">
          <div className="py-4 flex items-center flex-col h-40 " />
        </div>

        <div className="p-8 sm:flex sm:flex-row sm:space-x-12 sm:space-y-0 space-y-4 ">
          <div className="flex flex-col sm:w-4/12  bg-white rounded-lg">
            <div className="flex flex-col items-center p-8 space-y-2">
              <div>
                <img className="z-0 w-18 h-18 relative" src="user.svg" alt="" />
              </div>
              <h1 className="font-bold text-secondary">{perfil}</h1>
              <h1>Cargo | US Tal</h1>
              <span>Viçosa do Ceará, Ceará, Brasil</span>
            </div>
          </div>

          <div className="flex flex-col sm:w-8/12 relative bg-white p-8 shadow-md rounded-lg space-y-4">
            <h1 className="text-xl font-medium text-secondary">Sobre mim</h1>
            <button type="button">
              <img
                className="absolute right-0 w-6 top-0 mt-8 mr-8"
                src="edit.svg"
                alt=""
              />
            </button>

            <p className="space-y-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              quo velit, pariatur itaque necessitatibus fuga atque tenetur, ipsa
              nostrum voluptas nulla minus facere expedita, amet dolore sed
              reiciendis. Dicta, facilis.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fuga
              quaerat commodi repellendus omnis repellat vero! Nam
              exercitationem reprehenderit explicabo ipsum maiores doloribus
              delectus nostrum iste cum, officia tempora impedit!
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fuga
              quaerat commodi repellendus omnis repellat vero! Nam
              exercitationem reprehenderit explicabo ipsum maiores doloribus
              delectus nostrum iste cum, officia tempora impedit!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerfilProfissional;
