export const router = () => {
    const url = new URLSearchParams(window.location.search);
    const page = url.get('page');
    console.log(page);
    // route(page)
    console.log(window.history);
    history.pushState({ usreid: 3 }, page, page)
}
router()
