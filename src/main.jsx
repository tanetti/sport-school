/* eslint-disable no-undef */
import { createRoot } from 'react-dom/client';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import 'modern-normalize';
import './index.css';
import { App } from './App';

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}

createRoot(document.getElementById('root')).render(<App />);
