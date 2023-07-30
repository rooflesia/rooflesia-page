"use client"

import React from 'react'
import Link from 'next/link';
import MetaSeo from '../components/MetaSeo';
import http from '../utilities/http';
import constant from '../utilities/constant';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';

const setting = {
  "img": {
      "path": "/2023/02/01/bg_uid_63d37b3e7e203_uid_63d9ce6d1b244.webp",
      "title": "bg.png",
      "mime": "image/webp",
      "type": "image",
      "description": "",
      "tags": [],
      "size": 233822,
      "colors": [
          "#040404",
          "#080404",
          "#080404",
          "#080404",
          "#080404"
      ],
      "width": 3253,
      "height": 4679,
      "_hash": "39ee66537d5e3cf162270cd5209de145",
      "_created": 1674804030,
      "_modified": 1675218557,
      "_cby": "74081d5d313037a19c000256",
      "folder": "",
      "_id": "74fe4f8d636635b63b0001ce",
      "_mby": "74081d5d313037a19c000256"
  },
  "title": "Hi, I `m Rooflesia | Frontend Web and Mobile Developer",
  "subtitle": "I’m a Junior Mobile and Web Developer representative with 1 year experience in handling web/mobile projects and research. Currently, I’m do projects and also improving my portfolio. Those experience taught me about doing continous improvement day by day, collaborative skills, and social impact creation.",
  "_model": "home",
  "_state": 1,
  "_modified": 1689220588,
  "_mby": "74081d5d313037a19c000256",
  "_created": 1674804038,
  "_cby": "74081d5d313037a19c000256",
  "_id": "74ff669f663437b95a000062",
  "cv_link": "https://drive.google.com/drive/folders/1HW6-FqCzvaatZ5hxKeo4LAqIwtOVVMe2?usp=sharing"
}

export default function Home() {
  return (
    <div className='lg:h-screen mt-20 lg:mt-0  xl:mt-0 mb-10 xl:mb-0 flex xl:items-center xl:flex-row flex-col-reverse' >
      <MetaSeo
        title='Hello World, i`m Harithya Wisesa'
        description='Hello World, nama saya Harithya Wisesa, saat ini saya bekerja di sebuah IT Contsultant di Tasikmalaya sebagai fullstack developer. Tapi untuk saat ini saya lebih cenderung bekerja di bagian mobile developer dan juga fontend menggunakan ekosistem React baik itu React JS ataupun React Native.'
      />
      <div className='xl:w-7/12' data-aos="fade-up">
        <h1 className='font-doodle h-20 lg:h-auto  tracking-widest xl:text-4xl text-3xl  text-center xl:text-left'>
          <Typewriter
            options={{
              strings: setting.title.split('|'),
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </h1>
        <p className='mt-5 mb-4 text-center xl:text-left leading-7'>{setting.subtitle}</p>
        <p className='text-center z-50 xl:text-left'>Lihat
          <Link legacyBehavior href={"/portfolio"}>
            <a><span className='font-semibold underline'> Portfolio Saya</span></a>
          </Link> dan juga <a href={setting.cv_link} target={"_blank"} rel="noreferrer"><span className='font-semibold underline'>Unduh CV Saya</span></a></p>
      </div>
      <div className='xl:w-5/12 flex xl:justify-end justify-center h-80 '>
        <Image src={constant.storage + `${setting.img?.path}`} layout="fixed" height={300} width={300} alt='BG-Image' className={`object-contain mb-10 xl:mb-0 dark:invert invert-0`} />
      </div>
    </div>
  )
}