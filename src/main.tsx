import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/tokens.css'; import './styles/globals.css'; import './styles/scrapbook.css'; import './styles/animations.css'; import './styles/night.css';
createRoot(document.getElementById('root')!).render(<App />);
