export const btn = (text, css) => {
  //onclick scale 0.9
  window.scale = () => {
    console.log("qsd");
  };
  const html = `<button class="bg-red-500 text-white ${css}" onclick="scale()">${text}</button>`;
  return {
    html,
    onMount: () => {
      console.log("sdfsdf");
    },
  };
};
