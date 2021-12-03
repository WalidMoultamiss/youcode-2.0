export const C = () => {
    (_.isAuth()).status == 'rejected' ? goTo('viewres') : null
  return `
    <div class="w-full flex flex-col items-center gap-4 h-screen pt-44 overflow-y-scroll py-11 dark:bg-gray-900">
        <div class="bg-white min-w-max dark:bg-gray-700 shadow-lg rounded-lg ">
            <div class="w-full p-3">
            <div class="flex justify-start gap-3 items-center">
                <div class="p-2 rounded-full cursor-pointer bg-red-600"></div>
                <div class="p-2 rounded-full cursor-pointer bg-yellow-400"></div>
                <div class="p-2 rounded-full cursor-pointer bg-green-400"></div>
                <input type="text" class="w-full bg-gray-200 outline-none p-1 text-xs px-3 rounded-lg" id="url"
                placeholder="url" value="https://www.youcode2.ma">
            </div>
            </div>
            <hr />
            <div class="p-3">
            <h1 class="dark:text-white text-left font-black text-xl">
                Welcome to the technical<br/> test using C
            </h1>
            <div class="w-full text-left">
                <br />
                <h2 class="dark:text-white">
                Create a function that sort the array [1,12,54,3,9] descending using C
                </h2>
                <br />
                <div class="py-2 px-2 rounded-md  flex flex-col bg-gray-900">
                <div class="flex gap-3 justify-start">
                    <div
                    style="background-image:url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png');"
                    class="bg-center bg-cover w-4 h-4"></div>
                    <span class="dark:text-white text-sm cursor-pointer">
                    File
                    </span>
                    <span class="dark:text-white text-sm cursor-pointer">
                    Edit
                    </span>
                    <span class="dark:text-white text-sm cursor-pointer">
                    Selection
                    </span>
                    <div>
                    </div>
                </div>
                <textarea autofocus style="font-family: monospace;"
                    class="dark:bg-gray-800 dark:text-white w-full h-48 rounded-md p-3 outline-none "></textarea>
                </div>
                <div class="w-full flex justify-end">
                <button class=" bg-blue-500 text-white p-2 mt-3 rounded-md hover:bg-blue-600" id="submit">
                    Submit your answers
                </button>
                </div>
            </div>
            </div>
        </div>
    </div>
    `;
};
