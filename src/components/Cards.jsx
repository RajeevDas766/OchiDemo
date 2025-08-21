import React from 'react'

function Cards() {
    return (
        <div className='w-full bg-zinc-900 flex flex-col md:flex-row items-stretch md:items-center px-6 md:px-32 gap-5 py-10 md:py-0 md:h-screen'>
            <div className="cardcontainer h-56 sm:h-72 md:h-[50vh] w-full md:w-1/2">
                <div className="card relative flex items-center justify-center rounded-xl w-full h-full bg-[#004D43]">
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;2019</button>
                </div>
            </div>
            <div className="cardcontainer flex flex-col sm:flex-row gap-5 w-full md:w-1/2 h-56 sm:h-72 md:h-[50vh]">
                <div className="card relative flex items-center justify-center rounded-xl w-full sm:w-1/2 h-full bg-[#192826]">
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;2019</button>
                </div>
                <div className="card relative flex items-center justify-center rounded-xl w-full sm:w-1/2 h-full bg-[#192826]">
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;2019</button>
                </div>
            </div>
        </div>
    )
}

export default Cards