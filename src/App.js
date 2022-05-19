
import { Routes,
  Route,
} from 'react-router-dom';
import Persons from '../src/Routing/persons/persons';
import Brands from '../src/Routing/brands/brands';
import AppLayout from '../src/Routing/AppLayout';
import Stats from '../src/Routing/statistic/stats';
import './style.scss';
import NotFound from "./Routing/Notfound/Notfound";
import { useState } from 'react';

function App() {





  return (
    <>
    
      
         <Routes>  
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<Persons />} />
                    <Route path='Stats' element={<Stats />} />
                    <Route path='Brands' element={<Brands />} />
                    <Route path="*" element={<NotFound />} />
                </Route>                
         </Routes>
         
   
    </>
  );
}

export default App;
