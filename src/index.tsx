import React from 'react';
import {createRoot} from 'react-dom/client';import { BrowserRouter } from "react-router-dom";
import './index.css';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './app/app';

const rootElement = document.getElementById('root') as HTMLElement
const root = createRoot(rootElement)

root.render(
    <BrowserRouter>
        <StyledEngineProvider>
            <App />
        </StyledEngineProvider>
    </BrowserRouter>,
);
