import { FilledButton, OutlinedButton } from '@/components/button'
import { ArrowRight } from 'iconsax-react'

import backgroundImage from '@/assets/happy-woman-wearing-headphones.jpg'
import healthNet from '@/assets/vectors/health-net.svg'
import integrisMental from '@/assets/vectors/integris-mental-health.svg'
import primaryHealth from '@/assets/vectors/primary-health.svg'
import providenceHealth from '@/assets/vectors/providence-health-services.svg'
import newYorkTimes from '@/assets/vectors/the-new-york-times.svg'

function Hero() {
  const organisations = [
    healthNet,
    integrisMental,
    primaryHealth,
    providenceHealth,
    newYorkTimes,
  ]

  return (
    <section>
      <div
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${backgroundImage.src})`,
        }}
        className='w-full h-screen bg-cover bg-bottom bg-no-repeat bg-neutral-900 p-16 flex flex-col justify-end gap-8 text-right'>
        <h1 className='text-[6.5em] font-medium leading-none'>
          you deserve an &nbsp; &nbsp; epic relationship, we'll <br />
          help you get there.
        </h1>
        <div className='flex justify-end gap-12 text-[#f2f2f2]'>
          <p className='basis-10 grow'>You deserve to be happy.</p>
          <p className='basis-3/12 text-left'>
            Much more than just therapy and sharing, <br />
            it's a complete happiness toolbox. Get matched with a qualified
            therapist within minutes.
          </p>
        </div>
        <div className='flex justify-end items-center'>
          <div className='flex gap-7 mr-20'>
            <FilledButton text='Individual therapy &nbsp;'>
              <ArrowRight className='inline' size='20' color='#000' />
            </FilledButton>
            <OutlinedButton text='Couples therapy' />
          </div>
          <div>
            {organisations.map(org => (
              <img
                className='h-8 inline px-2 grayscale'
                key={organisations.indexOf(org)}
                src={`${org.src}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
