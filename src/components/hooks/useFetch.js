import { useState, useEffect } from 'react';

const useFetchData = fetchUrl => {
  //useState()
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  //Fetch
  useEffect(() => {
    fetch(fetchUrl)
      .then(response => response.json())
      .then(data => {
        const dataUsers = setData(data);
        console.log(dataUsers);
        setIsLoading(false);
        return dataUsers;
      })
      .catch(error => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchUrl]);

  //return / Alimenter le state
  return {
    data,
    isLoading,
  };
};

export default useFetchData;

// 'https://jsonplaceholder.typicode.com/users';
