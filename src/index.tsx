import * as React from 'react';
import Popup from './popup';
import './index.css';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
    <Popup />
);
