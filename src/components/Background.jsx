import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white '>
        <div className='pt-32 max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-teal-100 border-sky-500'>Background</p>
            </div>
            <p className='text-xl mt-8 '>
                I am a recent IT Solutions graduate at Humber College where I was building things for the web and software with some awesome people. 
            </p>
            <br />
            <p className='text-xl'>
                Lately, I have discovered my passion for the world of web development and the beauty behind building useful websites like the one you will find in this portfolio. I am now looking for a junior dev position to finally kick start my career and learn among professionals. My goal is to always build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences. 
            </p>
            <br />
            <p className='text-xl'>
                When I'm not in front of a computer screen, I'm probably snowboarding, discovering the city, or crossing off another item on my bucket list.
            </p>
        </div>
    </div>
  )
}

export default About