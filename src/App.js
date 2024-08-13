import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Newz from './components/Newz';
import LoadingBar from 'react-top-loading-bar';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

const App = () => {
  
  const apikey = process.env.REACT_APP_NEWZ_API; 

  const [progress, setProgress] = useState(0);

  const pageSize = 12;

  return (
    <div>
      <Router>
        <Navbar/>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route 
            exact 
            path='/' 
            element={<Newz 
              setProgress={setProgress} 
              apikey={apikey} 
              key="general" 
              pageSize={pageSize} 
              country="in" 
              category="general" 
            />} 
          />
          <Route 
            exact 
            path='/business' 
            element={<Newz 
              setProgress={setProgress} 
              apikey={apikey} 
              key="business" 
              pageSize={pageSize} 
              country="in" 
              category="business" 
            />} 
          />
          <Route 
            exact 
            path='/entertainment' 
            element={<Newz 
              setProgress={setProgress} 
              apikey={apikey} 
              key="enter" 
              pageSize={pageSize} 
              country="in" 
              category="entertainment" 
            />} 
          />
          <Route 
            exact 
            path='/health' 
            element={<Newz 
              setProgress={setProgress} 
              apikey={apikey} 
              key="health" 
              pageSize={pageSize} 
              country="in" 
              category="health" 
            />} 
          />
          <Route 
            exact 
            path='/science' 
            element={<Newz 
              setProgress={setProgress} 
              apikey={apikey} 
              key="science" 
              pageSize={pageSize} 
              country="in" 
              category="science" 
            />} 
          />
          <Route 
            exact 
            path='/sports' 
            element={<Newz 
              setProgress={setProgress} 
              apikey={apikey} 
              key="sports" 
              pageSize={pageSize} 
              country="in" 
              category="sports" 
            />} 
          />
          <Route 
            exact 
            path='/technology' 
            element={<Newz 
              setProgress={setProgress} 
              apikey={apikey} 
              key="technology" 
              pageSize={pageSize} 
              country="in" 
              category="technology" 
            />} 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
