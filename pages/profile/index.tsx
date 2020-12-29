import Link from 'next/link';

const Profile = () => {
  return (
    <div
      className="flex flex-row items-center justify-center h-full"
      style={{ background: 'url(./background.svg) no-repeat center/cover' }}
    >
      <div className="shadow-md p-16 h-64 flex flex-col justify-center items-center bg-white rounded-2xl">
        <h1>Qual o seu perfil?</h1>
        <div className="flex flex-row items-center space-x-4">
          <div className="shadow-2xl cursor-pointer bg-green  w-24 h-24 mt-10 flex flex-col items-center justify-center rounded-2xl">
            <Link href="signin">
              <h1 className="text-white text-center">Profissional da saúde</h1>
            </Link>
          </div>

          <div className="shadow-2xl cursor-pointer bg-green  w-24 h-24 mt-10 flex flex-col items-center justify-center rounded-2xl">
            <Link href="signin">
              <h1 className="text-white text-center">Paciente</h1>
            </Link>
          </div>
          <div className="shadow-2xl cursor-pointer bg-green  w-24 h-24 mt-10 flex flex-col items-center justify-center rounded-2xl">
            <Link href="signin">
              <h1 className="text-white text-center">Gerente</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
