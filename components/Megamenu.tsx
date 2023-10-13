import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';
import { categoriesMegamenu } from '../utils/data';

interface MegaMenuProps {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MegaMenu: FC<MegaMenuProps> = ({ openMenu, setOpenMenu }) => {
  const [firstChildren, setFirstChildren] = useState<any>(
    categoriesMegamenu[0].children
  );
  const [secondChildren, setSecondChildren] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState<any>(categoriesMegamenu[0]);
  const [classNameTransition, setClassNameTransition] = useState<any>('');
  const router = useRouter();

  return (
    <div
      className={`absolute sm:top-24 w-screen z-0 h-unset bg-lightBlue flex-col ${
        openMenu
          ? 'one-time-fade-in opacity-100 z-20 sm:flex'
          : 'one-time-fade-out opacity-0 z-0 hidden'
      }`}
      style={{ transitionDelay: openMenu ? '0ms' : '1000ms' }}
    >
      <div className="flex sm:px-16 sm:h-[calc(100vh-176px)]">
        <div
          id="first-column"
          className="flex flex-col sm:w-1/3 transition-all transform overflow-y-scroll"
        >
          {categoriesMegamenu.map((category) => {
            return (
              <div key={category.id} className="my-6 ml-4" id={category.slug}>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    if (category.link) {
                      setOpenMenu(false);
                      router.push(category.link);
                    } else {
                      JSON.stringify(category.children) ==
                      JSON.stringify(firstChildren)
                        ? setFirstChildren([])
                        : setFirstChildren(category.children);
                      setSecondChildren([]);
                      setSelectedCategory(category);
                    }
                  }}
                >
                  <span
                    className={`font-acto text-primary text-4xl  ${
                      selectedCategory?.id === category.id &&
                      firstChildren?.length > 0
                        ? 'underline 0.5s ease-in-out infinite alternate'
                        : ''
                    }`}
                  >
                    {category.name}
                  </span>
                </div>
                <div className="sm:hidden block">
                  {JSON.stringify(category.children) ==
                    JSON.stringify(firstChildren) &&
                    firstChildren?.map((category: any) => (
                      <div key={category.id} className="my-4">
                        {category.link ? (
                          <Link href={category.link}>
                            <div
                              className="cursor-pointer flex flex-col gap-2"
                              onClick={() => {
                                setOpenMenu(false);
                              }}
                            >
                              <div className="flex gap-4">
                                <span className="text-primary font-acto text-2xl ">
                                  {category.name}
                                </span>
                                <Image
                                  src="/images/arrow.svg"
                                  width={20}
                                  height={20}
                                  alt="flecha"
                                />
                              </div>
                              <div className="text-md font-lato font-light">
                                {category.description}
                              </div>
                            </div>
                          </Link>
                        ) : (
                          <div
                            className="cursor-pointer flex flex-col gap-2"
                            onClick={() => {
                              setSecondChildren(category.children);
                            }}
                          >
                            <div className="flex gap-4">
                              <span className="text-primary font-acto text-2xl ">
                                {category.name}
                              </span>
                              <Image
                                src="/images/arrow.svg"
                                width={20}
                                height={20}
                                alt="flecha"
                              />
                            </div>
                            <div className="text-md font-lato font-light">
                              {category.description}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            );
          })}
        </div>
        <div
          id="second-column"
          className="flex-col w-2/3 px-12 overflow-scroll h-full mt-4 sm:flex hidden pb-4"
        >
          {firstChildren?.length > 0 &&
            firstChildren?.map((category: any) => (
              <div key={category.id} className="my-4 ml-4">
                {category.link ? (
                  <Link href={category.link} target={category.link.includes('http') ? '_blank' : ''}>
                    <div
                      className="cursor-pointer flex flex-col gap-2"
                      onClick={() => {
                        setOpenMenu(false);
                      }}
                    >
                      <div className="flex gap-4">
                        <span className="text-primary font-acto text-2xl ">
                          {category.name}
                        </span>
                        <Image
                          src="/images/arrow.svg"
                          width={20}
                          height={20}
                          alt="flecha"
                        />
                      </div>
                      <div className="text-md font-lato font-light">
                        {category.description}
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div
                    className="cursor-pointer flex flex-col gap-2"
                    onClick={() => {
                      setSecondChildren(category.children);
                    }}
                  >
                    <div className="flex gap-4">
                      <span className="text-primary font-acto text-2xl ">
                        {category.name}
                      </span>
                      <Image
                        src="/images/arrow.svg"
                        width={20}
                        height={20}
                        alt="flecha"
                      />
                    </div>
                    <div className="text-md font-lato font-light">
                      {category.description}
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
      <div className="flex justify-start mt-4 w-full h-16 items-center sm:px-20 px-4 border-t-2 border-white">
        <p className="font-acto text-lg text-primary sm:mr-12">Links de interés</p>
        <div className="flex flex-col gap-8 ml-4">
          <Link href="/contacto">
            <span className="text-primary text-2xl font-semibold hover:text-gray-900 cursor-pointer">
              Contáctanos
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default MegaMenu;
