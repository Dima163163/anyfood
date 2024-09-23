import { createRoot } from 'react-dom/client';
import { App } from './components/App/App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<App/>);