'use client';
import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */

export default function HomePage() {
  return (
    <>
      <section className='bg-white'>
        <div className='mb-10'>
          <h1>이미지 최적화</h1>
          <Link
            href='https://github.com/S-jooyoung/nextjs-image-optimization'
            className='underline underline-offset-4'
          >
            저장소 바로가기
          </Link>
        </div>
        <div className='relative max-w-md rounded-lg border border-gray-200 bg-white p-5 shadow dark:border-gray-700 dark:bg-gray-800'>
          <h5 className='primary-text-color mb-2 text-2xl font-bold tracking-tight dark:text-white'>
            img태그와 Next/image 컴포넌트 비교
          </h5>
          <p className='secondary-text-color mb-3 font-normal dark:text-gray-400'>
            Next.js 특화: next/image는 Next.js 프레임워크에 특화된 이미지 최적화
            기능을 제공합니다.
          </p>
          <Link
            className='highlight-bg-color highlight-bg-hover-color items-center rounded-lg px-3 py-2 text-center text-sm font-medium text-white duration-300'
            href='/nextimage'
          >
            비교하기
          </Link>
        </div>
      </section>
    </>
  );
}
