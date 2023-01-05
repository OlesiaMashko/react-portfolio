import React from 'react'
import tictactoe from '../assets/portfolio/tictactoe.png'
import spring from '../assets/portfolio/spring.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import clabin from '../assets/portfolio/clabin.jpg'
import employee from '../assets/portfolio/employee.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: tictactoe,
      href: 'https://github.com/OlesiaMashko/TicTacToe'
    },
    {
      id: 2,
      src: installNode,
      href: 'https://github.com/OlesiaMashko/Node-Express-Web-App'
    },
    {
      id: 3,
      src: clabin,
      href: 'https://github.com/OlesiaMashko/Clabibn-project'
    },
    {
      id: 4,
      src: reactSmooth,
      href: 'https://github.com/OlesiaMashko/Node-Express-Web-App'
    },
    {
      id: 5,
      src: spring,
      href: 'https://github.com/OlesiaMashko/Service-Center-Management-System'
    },
    {
      id: 6,
      src: employee,
      href: 'https://github.com/OlesiaMashko/Employee-Management-Service'
    }
  ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

        <div className='pt-20 pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here.</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

        {
          portfolios.map(({id, src, href}) => (
          <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105 ' />
            <div className='flex items-center justify-center'>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
              <a href={href} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
            </div>
          </div>
          ))
        }
          
        </div>
      </div>
    </div>
  )
}

export default Portfolio