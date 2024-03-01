import { ArrowRight } from 'iconsax-react'
import Image from 'next/image'

import img1 from '@/assets/female-hands-consoling-friend.jpg'
import img2 from '@/assets/family-enjoying-their-quality-winter-time.jpg'
import img3 from '@/assets/african-family-spending-time-together.jpg'
import img4 from '@/assets/happy-girl-sitting-on-yellow-sofa.jpg'
import img5 from '@/assets/young-couple-discussing-relationship-problems-with-their-therapist.jpg'

function Clients() {
  return (
    <section className='bg-white text-[#0e0e0e] p-16'>
      <h3 className='text-[4.25rem] leading-[1.15] font-medium'>
        personalized mental <br /> health care for <span>&#10230;</span> everyone
      </h3>
      <div className='flex gap-40 my-5'>
        <p className='shrink-0'>What we help our clients with</p>
        <p>
          We offer compassionate support and guidance to help our clients
          navigate life's challenges with resilience and strength. Whether
          you're struggling with anxiety, depression, relationship issues, or
          navigating major life transitions, our dedicated team of therapists is
          here to assist you on your journey towards healing and growth. We
          provide a safe and non-judgmental space where you can explore your
          thoughts and feelings, develop coping skills, and gain insight into
          your experiences. Our therapeutic approach is tailored to meet your
          individual needs, empowering you to overcome obstacles, improve your
          mental well-being, and cultivate a greater sense of self-awareness and
          fulfillment. Let us accompany you on your path towards positive change
          and personal transformation.
        </p>
      </div>
      <div className='grid grid-cols-4 gap-5'>
        <div style={{backgroundImage:`url(${img1.src}), linear-gradient(135deg, #f2f2f2, #979797)`}} className='bg-center bg-cover bg-no-repeat h-[450px] rounded-3xl col-span-3 hover:'></div>
        <div style={{backgroundImage:`url(${img2.src}), linear-gradient(135deg, #f2f2f2, #979797)`}} className='bg-center bg-cover bg-no-repeat rounded-3xl'></div>
        <div style={{backgroundImage:`url(${img3.src}), linear-gradient(135deg, #f2f2f2, #979797)`}} className='bg-center bg-cover bg-no-repeat rounded-3xl'></div>
        <div style={{backgroundImage:`url(${img4.src}), linear-gradient(135deg, #f2f2f2, #979797)`}} className='bg-center bg-cover bg-no-repeat rounded-3xl'></div>
        <div style={{backgroundImage:`url(${img5.src}), linear-gradient(135deg, #f2f2f2, #979797)`}} className='bg-center bg-cover bg-no-repeat h-[450px] rounded-3xl col-span-2'></div>
      </div>
    </section>
  )
}

export default Clients
