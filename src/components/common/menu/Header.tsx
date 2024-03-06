import Image from 'next/image';
import Link from 'next/link';
import { useEffect,useState } from 'react';

import Hamburger from '../../../../public/icons/hamburger.svg';
import Logo from '../../../../public/icons/logo.svg';
import Search from '../../../../public/icons/search.svg';

type UserType = {
  id: number;
};

type HeaderProps = {
  user?: UserType;
}

export default function Header({ user }: HeaderProps) {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    updateWindowWidth();
    window.addEventListener('resize', updateWindowWidth);
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  return (
    <div className='flex h-[7rem] w-[100%] min-w-[37.5rem] flex-row justify-between bg-black-300 align-middle md:h-[8rem] lg:h-[10rem]'>
      <Image src={Hamburger} alt='side menu' className='ml-[2rem] block w-[2.4rem] md:hidden lg:hidden' />
      {!(windowWidth < 430 && isSearchVisible) && (
        <Link href='/' className='my-auto'>
          <Image src={Logo} alt='Logo' className='w-[11.2rem] md:ml-[3rem] md:w-[13.8rem] lg:ml-[12rem] lg:w-[16.6rem]' />
        </Link>
      )}
      <div className='flex flex-row align-middle'>
        {windowWidth < 768 && (
          <div className='my-auto mr-[2rem] flex h-[4.8rem] w-fit max-w-[30rem] flex-row rounded-[2.8rem] bg-[#252530] px-[1.5rem] py-[1.6rem] align-middle text-[1.4rem] text-gray-300'>
            <Image src={Search} alt='Search' className='w-[2.4rem] cursor-pointer' onClick={toggleSearch} />
            {isSearchVisible && (
              <input placeholder='상품 이름을 검색해 보세요' className='ml-[1.5rem] w-[80%] bg-[#252530] outline-none'/>
            )}
          </div>
        )}
        {windowWidth >= 768 && (
          <div className='my-auto flex w-[30rem] flex-row rounded-[2.8rem] bg-[#252530] px-[2rem] py-[1.6rem] align-middle text-[1.4rem] text-gray-300 md:h-[5rem] lg:h-[5.6rem]'>
            <Image src={Search} alt='Search' className='w-[2.4rem]' />
            <input placeholder='상품 이름을 검색해 보세요' className='w-[80%] bg-[#252530] outline-none md:ml-[1rem] lg:ml-[2rem]'/>
          </div>
        )}
        <div className='my-auto ml-[6rem] hidden font-normal text-white md:mr-[3rem] md:block md:text-[1.4rem] lg:mr-[12rem] lg:block lg:text-[1.6rem]'>
          {user ? (
            <>
              <Link href='#' className='min-w-[3.7rem] md:mr-[3rem] lg:mr-[6rem]'>
                비교하기
              </Link>
              <Link href='#' className='min-w-[4.9rem]'>
                내 프로필
              </Link>
            </>
          ) : (
            <>
              <Link href='#' className='min-w-[3.7rem] md:mr-[3rem] lg:mr-[6rem]'>
                로그인
              </Link>
              <Link href='#' className='min-w-[4.9rem]'>
                회원가입
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
