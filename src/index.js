import { createRoot } from "react-dom/client"
import './index.css';

import Accordion from 'react-bootstrap/Accordion';

const root = createRoot(document.getElementById("root"))
const reactElement = <h1>Hello from JSX! Poop</h1>

console.log(reactElement)

root.render(
    reactElement
)

//Basic React Component
function MainContent() {
  return (
    
    <h1>React is great!</h1>
  );
}
// Export default MainContent;
export default MainContent;

const mainContent = createRoot(document.getElementById("accordion"))
//Rendering the MainContent component
mainContent.render (
    <div>
        <MainContent />
    </div>
)