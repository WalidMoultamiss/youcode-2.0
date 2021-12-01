export const Fire = (element, eventHandler, cb) => {
    let elm = document.querySelector(element)
    console.log(document.querySelector(element));
    elm.setAttribute('onclick', cb())
}