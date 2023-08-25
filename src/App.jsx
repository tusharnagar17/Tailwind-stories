import React from 'react'

const App = () => {
  return (
    <>
        <div className="max-w-2xl mx-auto p-8">
            <h1 className="bold text-lg uppercase text-colors tracking-wide text-fuchsia-600">Introducing...</h1>
            <p className='text-5xl lg:text-6xl leading-none font-extrabold text-gray-900'>Tailwind Stories.</p>

            <ul className='flex space-x-6'>
                <li className='flex flex-col items-center space-y-1'>
                    <div className='relative block bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full'>
                    <a href="#" className='block bg-white p-1 rounded-full  tranform transition hover:-rotate-6'>
                        <img className='h-24 w-24 rounded-full' src="https://placekitten.com/200/201" alt="" />
                    </a>
                    <button className='absolute bottom-0 right-1 h-8 w-8 bg-blue-700 rounded-full text-white font-semibold text-2xl border-4 border-white flex justify-center items-center hover:bg-blue-900'>+</button>
                    </div>
                    <a href="" className=''>Kitty_one</a>
                    
                </li>
                <li className='flex flex-col items-center content-center space-y-1'>
                <div className='block bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full'>
                    <a href="#" className='block bg-white p-1 rounded-full  tranform transition hover:-rotate-6'>
                        <img className='h-24 w-24 rounded-full' src="https://placekitten.com/200/202" alt="" />
                    </a>
                    </div>
                    <a href="">meoww</a>
                    
                </li>
                <li className='flex flex-col items-center content-center space-y-1'>
                <div className='block bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full'>
                    <a href="#" className='block bg-white p-1 rounded-full  tranform transition hover:-rotate-6'>
                        <img className='h-24 w-24 rounded-full' src="https://placekitten.com/200/203" alt="" />
                    </a>
                    </div>
                    <a href="">sniggles</a>
                    
                </li>
                <li className='flex flex-col items-center content-center space-y-1'>
                    <div className='block bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full'>
                    <a href="#" className='block bg-white p-1 rounded-full  tranform transition hover:-rotate-6'>
                        <img className='h-24 w-24 rounded-full' src="https://placekitten.com/200/204" alt="" />
                    </a>
                    </div>
                    <a href="">krippy</a>
                    
                </li>
               
            </ul>
            
        </div>
    </>
  )
}

export default App