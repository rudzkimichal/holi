
import axios from 'axios';

const getData = async url => {
  try {
    const response = await axios.get(url);
    const data = await response.data;

    return data;
  } catch(error) {
    console.log(error);
  }
}

const updateData = async (url, data) => {
  try {
    const request = await axios.patch(url, data);
    const assert = async res => {
      assert.ok(res.status === 200, 'Got OK status code');
      verify.patch(null, original, res.data);
    }
  } catch(error) {
    console.log(error);
  }
}

const getIsbn = async () => {
  const source = await getData('http://localhost:5000/all');

  source.forEach(async item => {
    const author = encodeURIComponent(item.author.lastName);
    const title = encodeURIComponent(item.title);
    const publisher = encodeURIComponent(item.publishedBy);
    let isbn = '';

    const bnItems = await getData(`http://localhost:5000/bn/${author}/${title}/${publisher}`);
    const json = await JSON.parse(bnItems);
    const books = json.bibs;

    for(let i = 0; i < books.length; i++) {
      if(books[i] !== null && books[i].isbnIssn.length === 13) {
        isbn = books[i].isbnIssn;
        break;
      }
    }

    updateData(`http://localhost:5000/all/${author}/${title}/${publisher}`, {'isbn': isbn})
  });
}

// getIsbn();

const postData = (url, data) => {
  try {
    const payload = JSON.parse(data);
    axios.put(url, payload);


  } catch(error) {
      console.log(error);
  }
}

postData('http://localhost:5000/all', {test: 'test'});
