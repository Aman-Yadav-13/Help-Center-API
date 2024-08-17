import { createRoot } from 'react-dom/client'; // Import the createRoot function from react-dom for React 18+
import App from './component/App'; // Import the main App component

// Create a root for the React application and attach it to the DOM element with id 'root'
const root = createRoot(document.getElementById('root'));

// Render the App component inside the created root
root.render(<App />);
