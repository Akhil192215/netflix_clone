import React  from 'react'
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {originals,romantic,action,comedy,documentries,trending} from './URLs'

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost url={originals} title={'Netflix Originals'} />
     <RowPost url={trending}  title={'Trending'} isSmall/>
     <RowPost url={action}  title={'Action'} isSmall/>
     <RowPost url={romantic}  title={'Romantic'} isSmall/>
     <RowPost url={comedy}  title={'Comedy'} isSmall/>
     <RowPost url={documentries}  title={'Documentries'} isSmall/>
    </div>
  );
}

export default App;
