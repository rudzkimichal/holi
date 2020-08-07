
import React,{useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import Search from './Search';
import '../scss/style.scss';



const Header = () => {
  return (
    <div className='top-header'>
      <div className='logo-container'>
        Tutaj powinno być logo
      </div>
    </div>
  );
}

const App = () => {

  const [searchResult, setSearchResult] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect((data) => {

    fetch('api/all')
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
  });

  const handleSubmit = (e) => {
  }

  return (
    <div className='app-container'>
      <Header />
      <div className='title'>Ho<span>me<br /></span>Li<span>brary</span></div>
      <Search submitHandler={handleSubmit} />
      <List searchResult={searchResult}/>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
