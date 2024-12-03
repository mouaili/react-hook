import React, { useEffect, useState } from 'react';
import TableUsers from './TableUsers';
import InputFilterResult from '../inputs/InputFilterResult';
import useFetchData from './useFetch';

function Users() {
  const [search, setSearch] = useState('');
  const [resultSearch, setResultSearch] = useState([]);

  //custom hook useFetchData()

  const { data, isLoading } = useFetchData(
    'https://jsonplaceholder.typicode.com/users'
  );

  const filterUsers = () => {
    // eslint-disable-next-line array-callback-return
    const findResults = data.filter(user => {
      return Object.values(user)
        .join(' ')
        .toLowerCase()
        .includes(search.toLowerCase());
    });

    setResultSearch(findResults);
  };
  useEffect(() => {
    if (search !== '') {
      //Filter
      filterUsers();
    } else {
      setResultSearch([]);
    }
  }, [search]);

  const handleFindUsers = event => {
    setSearch(event.target.value);
  };

  const displayMsgResults = (color, message) => {
    return <div className={`alert alert-${color} text-center`}>{message}</div>;
  };

  return (
    <div className="col">
      {isLoading ? (
        displayMsgResults('warning', 'Veuillez patienter..')
      ) : (
        <InputFilterResult searchStr={search} searchHandler={handleFindUsers} />
      )}

      <hr />
      {isLoading && resultSearch.length === 0 && search !== '' ? (
        displayMsgResults(
          'danger',
          "Vous n'avez pas accès à la base de données.."
        )
      ) : search === '' ? (
        displayMsgResults('success', 'Veuillez effectuer une recherche..')
      ) : (
        <TableUsers users={resultSearch} />
      )}
    </div>
  );
}

export default Users;
