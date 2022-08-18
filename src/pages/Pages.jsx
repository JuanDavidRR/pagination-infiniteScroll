import React, { Suspense } from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import Loading from '../components/Loading';
import InfiniteScroll from './InfiniteScroll';
import Pagination from './Pagination';


const Pages = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<Loading/>}>
    <Routes Location={location} key={location.pathname}>
        <Route path='/' element={<InfiniteScroll/>}/>
        <Route path='/pagination' element={<Pagination/>}/>
        <Route path='/pagination/page/:type' element={<Pagination/>}/>
    </Routes>
    </Suspense>
  )
}

export default Pages