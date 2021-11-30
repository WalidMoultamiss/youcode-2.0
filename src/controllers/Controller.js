import { render } from '../helpers'

class Controller {

    view = (page, data) => {
        render(page, data)
    }

}

export default Controller;