'use client';
import Image from 'next/image';
import HouseImage from 'public/images/house.jpg';
/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function NextImagePage() {
  return (
    <main>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <div className='relative max-w-xs rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800'>
          <img
            className='rounded-t-lg'
            src='/images/house.jpg'
            alt='img_house'
          />
          <div className='p-5'>
            <h5 className='primary-text-color mb-2 text-2xl font-bold tracking-tight dark:text-white'>
              기본 img Tag
            </h5>
            <p className='secondary-text-color mb-3 font-normal dark:text-gray-400'></p>
          </div>
        </div>
        <div className='relative max-w-xs rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800'>
          <Image
            className='rounded-t-lg'
            src={HouseImage}
            alt='img_house'
            width={318}
            height={212}
          />
          <div className='p-5'>
            <h5 className='primary-text-color mb-2 text-2xl font-bold tracking-tight dark:text-white'>
              Next/image 컴포넌트
            </h5>
            <p className='secondary-text-color mb-3 font-normal dark:text-gray-400'></p>
          </div>
        </div>
      </div>
    </main>
  );
}
