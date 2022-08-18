import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import InfiniteScroll from './pages/InfiniteScroll';
import Pages from './pages/Pages';

function App() {

  return (
    <div className="App">
     <Suspense fallback={<h1>Loading profile...</h1>}>
        <BrowserRouter>
          <Pages/> 
        </BrowserRouter>
     </Suspense>
    </div>
  );
}

export default App;
