import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Aboutme from './pages/Aboutme';
import Cv from './pages/Cv';
import Music from './pages/Music';
import Projects from './pages/Projects';
import Layout from './pages/Layout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/aboutme" element={<Aboutme />}></Route>
          <Route path="/cv" element={<Cv />}></Route>
          <Route path="/music" element={<Music />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/*" element={<Home />}></Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
