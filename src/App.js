import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Books } from './components/Books';

function App() {
  const [books, setBooks] = React.useState([]);
  const [invites, setInvites] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [success, setSuccess] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
    .then((res) => res.json())
    .then((json) => {
      setBooks(json.books);
    })
    .catch((err) => {
      console.warn(err);
      alert('Ошибка при получении данных');
    })
    .finally(()=>setLoading(false));
  }, []);

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter(_id => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };

  const onClickSendInvites = () => {
    setSuccess(true);
  }

  return (
    <div className="App">
    {success ? (
      <Success count={invites.length}/>
    ):(
      <Books 
      onChangeSearchValue={onChangeSearchValue}
      searchValue={searchValue} 
      items = {books} 
      isLoading={isLoading}
      invites={invites}  
      onClickInvite={onClickInvite}
      onClickSendInvites={onClickSendInvites}
      />
    )}
    </div>
  );
}

export default App;

