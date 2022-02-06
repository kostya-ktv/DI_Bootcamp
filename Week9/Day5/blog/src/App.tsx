import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AboutPage } from './components/AboutPage-component';
import { ContactPage } from './components/ContactPage-component';
import HomePage from './components/HomePage-component';

import { MainLayout } from './components/MainLayout-component';
import PostPage  from './components/PostPage-component';
import './index.css';
export const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<HomePage/>}/>        
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/post" element={<PostPage/>}/>
          <Route path="*" element={<HomePage/>}/>
        </Route>
        </Routes>
    </div>
  );
}

