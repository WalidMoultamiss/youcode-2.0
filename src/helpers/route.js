export const router = () => {
    const url = new URLSearchParams(window.location.search);
    const page = url.get('page');
    history.pushState({ usreid: 3 }, page, page)

}
