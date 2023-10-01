import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

interface NavbarProps {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: FC<NavbarProps> = ({ openMenu, setOpenMenu }) => {
  return (
    <>
      <div className={`${openMenu ? 'hidden' : 'block'}`}>
        <div className="flex justify-between items-center h-fit bg-lightBlue text-primary relative shadow-md font-acto sm:px-10 py-2">
          <div className="flex justify-center items-center">
            Inscríbete a nuestros cursos de capacitación{' '}
            <Link href="/cursos">
              <span className="underline ml-1">AQUÍ</span>
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <p>Síguenos en nuestras redes sociales:</p>
            <div className="flex justify-center items-center">
              <a
                href="https://www.facebook.com/Instituto-Catastral-de-Lima-100353078420425"
                target="_blank"
                className="mx-2"
              >
                <Image
                  src="/images/redes-sociales/facebook.svg"
                  alt="logo"
                  width={30}
                  height={30}
                />
              </a>
              <a
                href="https://www.instagram.com/institutocatastral/"
                target="_blank"
                className="mx-2"
              >
                <Image
                  src="/images/redes-sociales/instagram.svg"
                  alt="logo"
                  width={30}
                  height={30}
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCg3Z5h2wvYlUqzY7bVX4bOQ"
                target="_blank"
                className="mx-2"
              >
                <Image
                  src="/images/redes-sociales/youtube.svg"
                  alt="logo"
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center h-24 bg-white text-black relative shadow-md font-acto">
        <div className="flex space-x-4 sm:mx-10 mx-4">
          <div className="my-auto">
            <Link href="/">
              <div className="justify-center items-center  text-gray-700 hover:text-gray-900 my-auto">
                <Image
                  src="/images/institutoCatastral.png"
                  alt="logo"
                  width={140}
                  height={80}
                />
              </div>
            </Link>
          </div>
          <div className="w-0.5 h-20 bg-primary justify-center items-center my-auto"></div>
          <div className="my-auto">
            <a
              href="#"
              className=" text-gray-700 hover:text-gray-900 justify-center items-center my-auto"
            >
              <Image
                src="/images/muniLima.png"
                alt="logo"
                width={100}
                height={24}
              />
            </a>
          </div>
        </div>
        <div className="flex gap-8 h-full">
          <div
            className="my-auto cursor-pointer hidden sm:block"
            onClick={() =>
              window.open(
                'https://www.transparencia.gob.pe/enlaces/pte_transparencia_enlaces.aspx?id_entidad=13132',
                '_blank'
              )
            }
          >
            <Image
              src="/images/portalTransparencia.svg"
              alt="logo"
              width={230}
              height={48}
            />
          </div>
          <div
            className="flex space-x-4 sm:mr-10 gap-2 cursor-pointer items-center border-l border-x-[#D9D9D9] h-full px-8 transition-transform duration-300 ease-in-out"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {!openMenu ? (
              <>
                <svg
                  className="transition-transform duration-300 ease-in-out transform rotate-0"
                  width="35"
                  height="11"
                  viewBox="0 0 35 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="1"
                    x2="35"
                    y2="1"
                    stroke="#16236E"
                    stroke-width="2"
                  />
                  <line
                    y1="10"
                    x2="35"
                    y2="10"
                    stroke="#16236E"
                    stroke-width="2"
                  />
                </svg>
                <span className="text-lg sm:text-2xl text-primary">Menú</span>
              </>
            ) : (
              <>
                <svg
                  className="transition-transform duration-300 ease-in-out transform rotate-90"
                  width="27"
                  height="26"
                  viewBox="0 0 27 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="1.70711"
                    y1="1.29289"
                    x2="25.7071"
                    y2="25.2929"
                    stroke="#16236E"
                    stroke-width="2"
                  />
                  <line
                    x1="1.29289"
                    y1="25.2929"
                    x2="25.2929"
                    y2="1.29289"
                    stroke="#16236E"
                    stroke-width="2"
                  />
                </svg>
                <span className="text-lg sm:text-2xl text-primary">Cerrar</span>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
