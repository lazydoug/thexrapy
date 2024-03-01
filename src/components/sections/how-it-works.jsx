import { ArrowRight } from 'iconsax-react'
import StepsCard from '../steps-card'

import img1 from '@/assets/young-depressed-adult-home.jpg'
import img2 from '@/assets/patients-talking-about-healthcare.jpg'
import img3 from '@/assets/full-shot-woman-relaxing-home.jpg'

function HowItWorks() {
  const steps = [
    {
      title: 'Schedule your first session',
      subtitle:
        "Getting started is the hardest step, and we're here to make it painless and stress-free for all. Our client coordination team will make sure you feel heard, understood, and cared for from the first phone call or text.",
      image: img1,
    },
    {
      title: 'Begin your journey',
      subtitle:
        'Get feedback and a plan in your first 1-3 sessions from a clinically trained therapist who can help you navigate relational conflict and the issues that brought you here. Leave with a clear path forward. (This is the part where clients would say "I\'m so glad we did this.")',
      image: img2,
    },
    {
      title: 'Experience growth and thrive!',
      subtitle:
        "Feel less anxiety and more hope and connection as you move forward with clarity and a healthy understanding of what your unique relationship needs. we know you've got this!",
      image: img3,
    },
  ]

  return (
    <section className='relative bg-white text-[#0e0e0e] px-16 py-20'>
      <p className='absolute text-lg left-[100px] leading-[4.8875rem] font-medium'>
        Mental health platform
      </p>
      <h3 className='text-right text-[4.25rem] leading-[1.15] font-medium indent-64'>
        You're hitting a breaking point in your life and relationship, and you
        need help from someone who gets it. Are you tired, feeling so stuck and
        disconnected?
      </h3>
      <hr className='border-[1px] border-[#979797] w-[95%] ml-auto mt-12'/>
      <div className='w-11/12 flex justify-end ml-auto mt-24'>
        <div className='mr-auto'>
          <ArrowRight size='32' color='#0e0e0e' className='mb-3' />
          <p className='text-sm'>How it works/</p>
        </div>
        <div className='flex gap-5'>
          {steps.map(step => (
            <StepsCard key={step.title} {...step} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
