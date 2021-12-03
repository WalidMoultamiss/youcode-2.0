export const technique = () => {
    (_.isAuth()).status == 'rejected' ? goTo('viewres') : null
  return `
    <div class="w-full flex flex-col items-center gap-4 h-screen pt-44 overflow-y-scroll py-11 dark:bg-gray-900">
    <div class="bg-white dark:bg-gray-700 shadow-lg rounded-lg ">
                <div class="w-full p-3">
                    <div class="flex justify-start gap-3 items-center">
                        <div class="p-2 rounded-full cursor-pointer bg-red-600"></div>
                        <div class="p-2 rounded-full cursor-pointer bg-yellow-400"></div>
                        <div class="p-2 rounded-full cursor-pointer bg-green-400" ></div>
                        <input type="text" class="w-full bg-gray-200 outline-none p-1 text-xs px-3 rounded-lg" id="url" placeholder="url" value="https://www.youcode2.ma">
                    </div>
                </div>
                <hr/>
            <div class="p-3">
        <h1 class="dark:text-white font-black text-xl">
            Welcome to the technical test
        </h1>
        <div class="w-full text-left">
                <br/>
                <h2 class="dark:text-white">
                    Choose your prefered language
                </h2>
                <br/>
                <div class="w-full flex justify-center gap-8 p-3">
                    <div onclick="goTo('c','c')" class="flex flex-col transition-all transform hover:scale-110 cursor-pointer items-center">
                        <div
                        style="background-image:url('https://geekboots.sfo2.cdn.digitaloceanspaces.com/post/why-c-is-so-popular-and-still-the-best-programming-language-1564571756694.jpg');"
                        class="w-32 h-44 rounded-lg border-2 bg-center bg-cover"
                        >
                        </div>
                        <span class="dark:text-white mt-2 font-bold text-xl text-center">C</span>
                    </div>
                    <div onclick="goTo('js','js')" class="flex flex-col transition-all transform hover:scale-110 cursor-pointer items-center">
                        <div
                        style="background-image:url('https://www.seekpng.com/png/detail/80-803501_javascript-logo-logo-de-java-script-png.png');"
                        class="w-32 h-44 rounded-lg border-2 bg-center bg-cover"
                        >
                        </div>
                        <span class="dark:text-white mt-2 font-bold text-xl text-center">JAVASCRIPT</span>
                    </div>
                    <div onclick="goTo('python','python')" class="flex flex-col transition-all transform hover:scale-110 cursor-pointer items-center">
                        <div
                        style="background-image:url('https://localist-images.azureedge.net/photos/31583518696354/original/0135374d81d3481dd24228d0deea271b904000a5.png');"
                        class="w-32 h-44 rounded-lg border-2 bg-center bg-cover"
                        >
                        </div>
                        <span class="dark:text-white mt-2 font-bold text-xl text-center">PYTHON</span>
                    </div>
                </div>
        
        </div>
    </div>
    </div>
    </div>
    `;
};
