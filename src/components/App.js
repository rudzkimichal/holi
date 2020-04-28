
import React,{useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import Search from './Search';
import '../scss/style.scss';
import logo from '../logo.png';



const Header = () => {
  return (
    <div className='top-header'>
      <div className='logo-container'>
        <img src={logo} alt='Logo' />
      </div>
    </div>
  );
}

const App = () => {

  const [searchResult, setSearchResult] = useState(null);
  const [keyword, setKeyword] = useState(null);

  const handleSubmit = (keyword) => {
    fetch('http://localhost:3000/books')
    .then(resp => resp.json())
    .then(data => data.filter(item => item.author.lastName.includes(keyword)))
    .then(data => setSearchResult(data))
    .catch(err => console.log(err));
  }

  if(!searchResult) return 'Loading data....';

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
