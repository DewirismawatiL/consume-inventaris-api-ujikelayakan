import React from 'react'
import Navbar from './components/Navbar'
// import Case from './components/Case'
// import Card from './components/Card'

export default function App() {
  return (
    <>
    <Navbar></Navbar>
    
    <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl flex flex-col lg:flex-row items-center lg:py-16 z-10 relative">
        <div class="text-center lg:text-left lg:w-1/2">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Selamat Datang di Inven<span class="text-[#754EF9]">taris</span></h1>
            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-0 dark:text-gray-200">Di Flowbite, kami fokus pada pasar di mana teknologi, inovasi, dan modal dapat membuka nilai jangka panjang dan mendorong pertumbuhan ekonomi.</p>
        </div>
        <div class="lg:w-1/2 flex justify-center lg:justify-end">
            <img src='/public/images/animation.png' class="max-w-full h-auto" />
        </div>
    </div>
    
</section>





</>
  )
}