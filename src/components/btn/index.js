export const btn = (text, css) => {
  //onclick scale 0.9
  window.scale = () => {
    console.log("qsd");
  };
  return `<button class="bg-red-500 text-white ${css}" onclick="scale()">${text}</button>`;
};
