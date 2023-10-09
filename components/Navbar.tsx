import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

interface NavbarProps {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: FC<NavbarProps> = ({ openMenu, setOpenMenu }) => {
  return (
    <div className="sticky z-50 top-0 sm:h-[134px] w-screen">
      <div className={`${openMenu ? 'hidden' : 'sm:block hidden'}`}>
        <div className="flex justify-between items-center h-[48px] bg-lightBlue text-primary relative shadow-md font-acto sm:px-20 py-2">
          <div className="flex justify-center items-center">
            Inscríbete a nuestros cursos de capacitación{' '}
            <Link href="/icl-capacitaciones">
              <span className="underline ml-1">AQUÍ</span>
            </Link>
          </div>
          <div className="flex justify-center items-center gap-4">
            <p>Síguenos en nuestras redes sociales:</p>
            <div className="flex justify-center items-center gap-2">
              <a
                href="https://www.facebook.com/instcatastraldelima"
                target="_blank"
                className=""
              >
                <Image
                  src="/images/redes-sociales/facebook.svg"
                  alt="logo"
                  width={30}
                  height={30}
                />
              </a>
              <a
                href="https://www.instagram.com/instcatastraldelima/?igshid=YmMyMTA2M2Y%3D"
                target="_blank"
                className=""
              >
                <Image
                  src="/images/redes-sociales/instagram.svg"
                  alt="logo"
                  width={30}
                  height={30}
                />
              </a>
              <a
                href="https://www.youtube.com/@InstitutoCatastraldeLimaICL"
                target="_blank"
                className=""
              >
                <Image
                  src="/images/redes-sociales/youtube.svg"
                  alt="logo"
                  width={30}
                  height={30}
                />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=969670703"
                target="_blank"
                className=""
              >
                <Image
                  src="/images/redes-sociales/whatsapp.svg"
                  alt="logo"
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center sm:h-[96px] h-[60px] bg-white text-black relative shadow-md font-acto">
        <div className="flex space-x-4 sm:mx-20 mx-2">
          <div className="my-auto">
            <Link href="/">
              <div className="justify-center items-center  text-gray-700 hover:text-gray-900 my-auto w-16 sm:w-40">
                <Image
                  src="/images/institutoCatastral.jpg"
                  alt="logo"
                  width={172}
                  height={80}
                />
              </div>
            </Link>
          </div>
          <div className="w-0.5 h-14 bg-primary justify-center items-center my-auto"></div>
          <div className="my-auto">
            <div
              className="justify-center items-center  text-gray-700 hover:text-gray-900 my-auto w-16 sm:w-40 cursor-pointer"
              onClick={() =>
                window.open('https://www.munlima.gob.pe/', '_blank')
              }
            >
              <Image
                src="/images/muniLima.jpg"
                alt="logo"
                width={128}
                height={43}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-8 h-full">
          <div
            className="my-auto cursor-pointer hidden sm:block w-56"
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
            className="flex gap-4 cursor-pointer items-center border-l border-x-[#D9D9D9] h-full transition-transform duration-300 ease-in-out justify-center w-[20vw] sm:w-[18vw] sm:pr-4"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {!openMenu ? (
              <>
                <svg
                  className="transition-transform duration-300 ease-in-out transform rotate-0"
                  width="27"
                  height="11"
                  viewBox="0 0 27 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="1"
                    x2="35"
                    y2="1"
                    stroke="#16236E"
                    strokeWidth="2"
                  />
                  <line
                    y1="10"
                    x2="35"
                    y2="10"
                    stroke="#16236E"
                    strokeWidth="2"
                  />
                </svg>
                <span className="text-lg sm:text-[1.5vw] text-primary font-acto hidden sm:block">
                  Menú
                </span>
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
                    strokeWidth="2"
                  />
                  <line
                    x1="1.29289"
                    y1="25.2929"
                    x2="25.2929"
                    y2="1.29289"
                    stroke="#16236E"
                    strokeWidth="2"
                  />
                </svg>
                <span className="text-lg sm:text-[1.5vw] text-primary font-acto hidden sm:block">
                  Cerrar
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
