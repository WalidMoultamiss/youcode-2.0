export const popup = (message,id) => {
    return (`
        <div style="display:none;" onclick="document.querySelector('#${id}').style.display = 'none'" id="${id}" class="fixed inscr-popup hidden top-0 backdrop-filter backdrop-blur-lg left-0 w-full h-full items-center justify-center rounded-md shadow-md z-50">
                <div class="bg-white w-full max-w-sm rounded-lg shadow-lg">
                    <div class="w-full p-3 h-24">
                        <div class="flex justify-between items-center">
                            <h1 class="text-2xl font-bold">${message}</h1>
                            <button class="text-sm text-gray-700" onclick="document.querySelector('#${id}').style.display = 'none'">X</button>
                        </div>
                        <div class="flex justify-center mt-3">
                            <button class="text-sm text-gray-700" onclick="document.querySelector('#${id}').style.display = 'none'">Ok</button>
                        </div>
                    </div>
                </div>
            </div>
    `)
}