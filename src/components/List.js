
import React,{useEffect,useState} from 'react';

const List = ({searchResult}) => {

  if(!searchResult) return <p>No data</p>

  return (
    <>
    {searchResult.map(item => <ListItems key={item._id} item={item} />)}
    </>
  );
}

const ListItems = ({item, image}) => {

  return (
    <div className='item'>
      <div className='basic-info'>
        <div className='img-container'>
          <img src='#' alt='Cover' />
        </div>
        <div className='info'>
          <p className='title'><strong>{item.title}</strong></p>
          <p className='author'>{item.author.firstName}&nbsp;{item.author.lastName}</p>
          <div>{item.publishedBy}</div>
          <p>Year: </p>
          <p><strong>Possible locations:</strong> {item.location}</p>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.
      </p>
    </div>
  );
}

export default List;
