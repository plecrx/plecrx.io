import React from 'react';
import {createRoot} from 'react-dom/client';import { BrowserRouter } from "react-router-dom";
import './index.css';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './components/App';

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
    <BrowserRouter>
        <StyledEngineProvider injectFirst>
            <App />
        </StyledEngineProvider>
    </BrowserRouter>,
);
