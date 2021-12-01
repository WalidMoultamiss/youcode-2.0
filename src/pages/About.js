import { terminalUI } from "../components"

export const About = () => (`
        <h1>About page</h1>
        <button
        class="bg-green-700 p-3 rounded-md outline-none text-white"
        onclick="goTo('home')"
        >
            Home
        </button>
        <button
            class="bg-green-700 p-3 rounded-md outline-none text-white"
            onclick="goTo('about')"
        >
            About
      </button>
      <!-- ${terminalUI()} -->
      `)
