

export const Home = () => {

    return (` 
        <div class="bg-white pb-6 sm:pb-8 lg:pb-12 dark:bg-gray-900 pt-40 h-full ">
            <div class="max-w-screen-2xl px-4 md:px-8 mx-auto opacity-90 ">
                <section class="h-full flex justify-center items-center flex-1 flex-shrink-0 bg-gray-100 overflow-hidden shadow-lg rounded-lg relative py-16 md:py-20 xl:py-28">
                <img src="https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&q=75&fit=crop&w=1500" loading="lazy" alt="Photo by Fakurian Design" class="w-full h-full object-cover object-center absolute inset-0" />
                <div class="bg-red-900 mix-blend-multiply absolute inset-0"></div>
                <div class="sm:max-w-xl flex flex-col items-center relative p-4">
                    <p class="text-gray-200 text-lg sm:text-xl text-center mb-4 md:mb-8">You Finally Make The Step</p>
                    <h1 class="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 md:mb-12">Youcode the best School is here </h1>
                    <div class="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
                    <button onclick="goTo('online')" class="inline-block bg-red-500 hover:bg-red-600 active:bg-red-700 focus-visible:ring ring-red-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">START NOW</button>
                    </div>
                </div>
                </section>
            </div>
        </div>
    `)
}
