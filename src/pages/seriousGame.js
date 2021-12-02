export const seriousGame = () => {
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
            Welcome to serious game
        </h1>
        <div class="w-full text-left">
                <h2 class="dark:text-white">
                    Lets pretend you are creating a startup,
                    and you want to convince your customers to buy your product.
                </h2>
                <br/>
                <h2 class="dark:text-white">
                    Write a business model that will convince a business angel to invest in your startup.
                </h2>
                
                <br/>
        <textarea class="w-full rounded-md shadow-md bg-gray-600 p-3 border-2  outline-none dark:text-white h-64" id="textarea"></textarea>
        <div class="w-full flex justify-end">
            <button class=" bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600" id="submit" onclick="goTo('motivation')" >
                Submit your business model
            </button>
        </div>
        </div>
    </div>
    </div>
    </div>
    `;
};
