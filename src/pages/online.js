
export const online = () => {
  let data = _.Questions()
  let html = data.map(element => (`<h3>${element.question}</h3>`)).join('')
  console.log(html);
  return (`${html}`)
};
