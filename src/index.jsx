import { createRoot } from "react-dom/client"
import Header from "./Header.jsx"
import Main from "./MainContent.jsx"
import Footer from "./Footer.jsx"
import App from "./App.jsx"
import './index.css';

const root = createRoot(document.getElementById("root"))

function Page() {   
    return (
        <>
            <App />
        </>
    )

}

root.render(
    <Page />
)
