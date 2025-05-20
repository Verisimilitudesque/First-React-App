import { createRoot } from "react-dom/client"
import './index.css';

// const root = createRoot(document.getElementById("root"))
// const reactElement = <h1>Hello from JSX!</h1>

// root.render(
//     reactElement
// )

//Basic React Component
// function MainContent() {
//   return (
    
//     <h1>React is great!</h1>
//   );
// }
// // Export default MainContent;
// export default MainContent;

// const mainContent = createRoot(document.getElementById("accordion"))
// //Rendering the MainContent component
// mainContent.render (
//     <div>
//         <MainContent />
//     </div>
// )


// This is imperative coding
// Creates new element
//const h1 = document.createElement("h1")
// Appends text to the element
//h1.textContent = "This is imperative coding"
// Adds css class to the element
//h1.className = "header"
// Renders the element to the DOM
//document.getElementById("root").appendChild(h1)

const root = createRoot(document.getElementById("root"))

function Header() {
    return (
        <>
            <header>
                <img src="/public/logo192.png" alt="React Logo" className="logo" />
                <h1>OMG React</h1>
            </header>
        </>
    )
}

function Main() {
    return (
        <>
                <ol>
                    <li>Was first release in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 200K stars on GitHub</li>
                    <li>Is maintained by Meta</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ol>
        </>    
    )
}

function Footer() {
    return (
        <>
            <footer>
                <small>© 2025 Visual Anxiety. All rights reserved.</small>
            </footer>
        </>
    )
}

function Page() {   
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )

}

root.render(
    <Page />
)
