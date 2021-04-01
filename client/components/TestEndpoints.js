
import React from 'react';
import axios from 'axios';

const Test = () => {

  const [items, setItems] = React.useState([]);

  const getData = () => {
    axios.get('http://localhost:5000')
    .then(resp => resp.data)
    .then(data => setItems(data))
    .catch(err => console.log(err));
  }

  React.useEffect(() => {
    getData();
  }, []);

  console.log(items);

  return (
    items?.map(item => <p key={item._id.$oid}>{item.author.lastName}</p>)
  );
}

export default Test;
