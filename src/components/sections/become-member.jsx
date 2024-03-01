import backgroundImage from '@/assets/woman-wearing-wireless-earbuds-using-mobile-phone.jpg'

function BecomeMember() {
  return (
    <section
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0) rgba(255, 255, 255, 1)), url(${backgroundImage.src}) no-repeat center/cover`,
      }}
      className='h-screen'></section>
  )
}

export default BecomeMember
