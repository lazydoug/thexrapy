import { ArrowRight } from 'iconsax-react'

function StepsCard({ title, subtitle, image }) {
  return (
    <div className='flex flex-col gap-5 w-80 h-[580px]'>
      <div className='w-full flex justify-between items-center'>
        <h4 className='text-lg leading-none font-bold'>{title}</h4>
        <ArrowRight size='20' color='#0e0e0e' className='inline' />
      </div>
      <p className='text-sm'>{subtitle}</p>
      <div
        className='relative w-full h-[400px] bg-cover bg-center bg-no-repeat mt-auto'
        style={{
          backgroundImage: `url(${image.src}), linear-gradient(135deg, #f2f2f2, #979797)`,
        }}></div>
    </div>
  )
}

export default StepsCard
