
import React,{useState,useEffect} from 'react';

const Search = ({submitHandler}) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <form className='search-module'>
      <input onChange={handleChange} type='text' name='text' value={input} />
      <button type='button' onClick={() => submitHandler(input)} name='button'>Search</button>
  </form>
  );
}

export default Search;
