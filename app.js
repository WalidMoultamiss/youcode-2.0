import './style.css'
import "tailwindcss/tailwind.css"
import { render } from "./src/helpers"

const path = window.location.pathname.replace('/', "");

path ? render(path) : ""
