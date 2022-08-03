import React from 'react'
import img1 from './images/image-header-mobile.jpg'
import img2 from './images/image-header-desktop.jpg'

const Stats = () => {
  return (
    <div className='w-screen h-[956px] flex bg-[#0A0C1C] lg:w-screen lg:h-[900px]'>
        <div className='relative w-[327px] h-[780px] bg-[#1B1937] mx-auto my-auto overflow-hidden rounded-lg lg:opacity-0'>
            <div className='absolute w-[327px] h-[240px] overflow-hidden bg-[#AB5CDB] opacity-50'>
                <img className='relative mix-blend-overlay drop-shadow-2xl' src={img1} alt=''></img>
                <img className='opacity-0 relative mix-blend-overlay' src={img2} alt=''></img>
            </div>
            <h1 className='text-white text-[28px] font-inter font-bold mt-[275px] text-center leading-[32px] mr-[31.5px] ml-[31.5px]'>Get <span className='text-[#AB5CDB]'>insights</span> that help your business grow</h1>
            <h2 className='text-white text-[15px] mx-[30px] mt-[16px] text-center font-inter'>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</h2>
            <div className='flex flex-col'>
              <h2 className='text-white text-[24px] font-inter font-bold text-center mt-[40px]'>10k+</h2>
              <p className='text-white text-[12px] text-center font-lexend font-light'>COMPANIES</p>
              <h2 className='text-white text-[24px] font-inter font-bold text-center mt-[24px]'>304</h2>
              <p className='text-white text-[12px] text-center font-lexend font-light'>TEMPLATES</p>
              <h2 className='text-white text-[24px] font-inter font-bold text-center mt-[24px]'>12M+</h2>
              <p className='text-white text-[12px] text-center font-lexend font-light'>QUERIES</p>
            </div>
        </div>
        <div id='desktop div 1110 446' className='w-[1110px] h-[446px] opacity-0 lg:opacity-100 bg-[#1B1937] mt-[275px] mr-[350px] rounded-xl flex flex-row'>
          <div>
          <h1 className='text-white text-[28px] font-inter font-bold mt-[71px] text-center leading-[32px] mr-[31.5px] ml-[31.5px] lg:text-[36px] lg:text-left lg:leading-[44px] lg:ml-[72px]'>Get <span className='text-[#AB5CDB]'>insights</span> that help your business grow</h1>
            <h2 className='text-white text-[15px] mx-[30px] mt-[25px] text-left font-inter lg:ml-[72px] lg:mr-[90px]'>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</h2>
            <div className='flex flex-row'>
              <div className='flex-col ml-[72px] mr-[65px]'>
                <h2 className='text-white text-[24px] font-inter font-bold text-center mt-[72px]'>10k+</h2>
                <p className='text-white text-[12px] text-center font-lexend font-light'>COMPANIES</p>
              </div>
              <div className='flex-col mr-[65px]'>
              <h2 className='text-white text-[24px] font-inter font-bold text-center mt-[72px]'>304</h2>
              <p className='text-white text-[12px] text-center font-lexend font-light'>TEMPLATES</p>
              </div>
              <div className='flex-col'>
              <h2 className='text-white text-[24px] font-inter font-bold text-center mt-[72px]'>12M+</h2>
              <p className='text-white text-[12px] text-center font-lexend font-light'>QUERIES</p>
              </div>
            </div>
          </div>
          <img className=' mix-blend-overlay' src={img2} alt=''></img>
          <div className='relative bg-purple-500 w-540 h-446'></div>
        </div>
    </div>
  )
}

export default Stats