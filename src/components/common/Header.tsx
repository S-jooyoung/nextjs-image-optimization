import Image from 'next/image';
import Link from 'next/link';

type HeaderProps = {
  [item: string]: string;
};

export default function Header({
  mainTitle,
  subTitle,
  firstLinkSrc,
  firstLinkText,
  secondLinkSrc,
  secondLinkText,
}: HeaderProps) {
  return (
    <header className='t-0 sticky z-50 flex h-[60px] w-full justify-center border-b-[1px] border-solid border-gray-200'>
      <div className='layout flex items-center justify-between'>
        <Link className='link link-logo flex items-center' href='/'>
          <Image
            className='logo'
            src='/images/logo.png'
            alt='logo'
            width={25}
            height={25}
          />
          <p className='m-0 ml-2'>
            <span className='highlight-color font-bold'>{mainTitle}</span>
            {subTitle}
          </p>
        </Link>
        <div className='text-sm'>
          <Link
            className='highlight-color highlight-hover-color mr-3 rounded-md px-2 py-3 text-white transition'
            href={firstLinkSrc}
          >
            {firstLinkText}
          </Link>
          <Link
            className='highlight-bg-color highlight-bg-hover-color rounded-md px-2 py-3 text-white transition'
            href={secondLinkSrc}
          >
            {secondLinkText}
          </Link>
        </div>
      </div>
    </header>
  );
}
