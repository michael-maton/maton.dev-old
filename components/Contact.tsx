'use client';
import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Contact() {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    const body = `${encodeURIComponent(data.message)}%0D%0A%0D%0A(${data.email})`;

    console.log(body);
    console.log(encodeURIComponent(body));

    window.location.href = `mailto:matonmichaelj@gmail.com?subject=${data.subject}&body=${body}`;
  };

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>

      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          <span className='underline decoration-[#F7AB0A]/50'>Let&apos;s Talk</span>
        </h4>

        {/* <div className='space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p>+1 (123) 123-1233</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p>+1 (123) 123-1233</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p>+1 (123) 123-1233</p>
          </div>
        </div> */}

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input {...register('name')} placeholder='Name' className='contact-input' type='text' />
            <input {...register('email')} placeholder='Email' className='contact-input' type='email' />
          </div>

          <input {...register('subject')} placeholder='Subject' className='contact-input' type='text' />

          <textarea {...register('message')} placeholder='Message' className='contact-input' />
          <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
