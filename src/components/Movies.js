import React from 'react';
import Image from '../banner.jpg'
function Movies() {
  return <>
    <div className='mb-8'>
        <div className='mt-8 mb-8 font-bold text-center'>Trending Movies</div>
        <div className='flex flex-wrap justify-center'>
            <div className={`
            bg-[url(${Image})] md:h-[30vh] md:w-[250px]
            h-[25vh] w-[150px]
            bg-center bg-cover
            rounded-xl
            flex items-end
            m-4 hover:scale-110
            ease-out duration-300
            `}>
                <div className='w-full bg-gray-900 text-white font-bold py-2 text-center rounded-b-xl'>Title</div>

            </div>
            <div className={`
            bg-[url(${Image})] md:h-[30vh] md:w-[250px]
            h-[25vh] w-[150px]
            bg-center bg-cover
            rounded-xl
            flex items-end
            m-4 hover:scale-110
            ease-out duration-300
            `}>
                <div className='w-full bg-gray-900 text-white font-bold py-2 text-center rounded-b-xl'>Title</div>

            </div>
            <div className={`
            bg-[url(${Image})] md:h-[30vh] md:w-[250px]
            h-[25vh] w-[150px]
            bg-center bg-cover
            rounded-xl
            flex items-end
            m-4 hover:scale-110
            ease-out duration-300
            `}>
                <div className='w-full bg-gray-900 text-white font-bold py-2 text-center rounded-b-xl'>Title</div>

            </div>
            <div className={`
            bg-[url(${Image})] md:h-[30vh] md:w-[250px]
            h-[25vh] w-[150px]
            bg-center bg-cover
            rounded-xl
            flex items-end
            m-4 hover:scale-110
            ease-out duration-300
            `}>
                <div className='w-full bg-gray-900 text-white font-bold py-2 text-center rounded-b-xl'>Title</div>

            </div>
            <div className={`
            bg-[url(${Image})] md:h-[30vh] md:w-[250px]
            h-[25vh] w-[150px]
            bg-center bg-cover
            rounded-xl
            flex items-end
            m-4 hover:scale-110
            ease-out duration-300
            `}>
                <div className='w-full bg-gray-900 text-white font-bold py-2 text-center rounded-b-xl'>Title</div>

            </div>
        </div>
    </div>
  </>;
}

export default Movies;
