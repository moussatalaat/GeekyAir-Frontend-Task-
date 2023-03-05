
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main/main';
import Posts from './components/Posts/posts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/posts/:id' element={<Posts/>}></Route>
      </Routes>   
      </BrowserRouter>
      
    </div>
  );
}

export default App;
