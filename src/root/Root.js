import React from 'react';
import axios from 'axios';
import ContactList from '../components/ContactList';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../components/styles.css';

const Root = () => {
  const [listContent, setlistContent] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((result) => {
        setlistContent(result.data).catch((err) => {
          console.log(err);
        });
      });
  };

  const addUser = async (name, email) => {
    const request = {
      id: uuidv4(),
      name: name,
      email: email,
    };

    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/users',
      request
    );
    console.log(response);
    setlistContent([...listContent, response.data]);
  };
  // fetch
  // const addUser = async (name, email) => {
  //   await fetch('https://jsonplaceholder.typicode.com/users', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       name: name,
  //       email: email,
  //     }),
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     },
  //   })
  //     .then((res) => {
  //       if (res.status !== 201) {
  //         return;
  //       } else {
  //         return res.json();
  //       }
  //     })
  //     .then((data) => {
  //       setlistContent((listContent) => [...listContent, data]);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const deleteUser = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    const deleteContact = listContent.filter((listContentEl) => {
      return listContentEl.id !== id;
    });

    setlistContent(deleteContact);
  };
  // fetch
  // const deleteUser = async (id) => {
  //   await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
  //     method: 'DELETE',
  //   })
  //     .then((res) => {
  //       if (res.status !== 200) {
  //         return;
  //       } else {
  //         setlistContent(
  //           listContent.filter((listContentEl) => {
  //             return listContentEl.id !== id;
  //           })
  //         );
  //       }
  //     })

  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const updateData = async (id1, name1, email1) => {
    const request = {
      id: id1,
      name: name1,
      email: email1,
    };

    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id1}`,
      request
    );
    console.log(response);
    const { id } = response.data;
    setlistContent(
      listContent.map((listContentEl) => {
        return listContentEl.id === id ? { ...response.data } : listContentEl;
      })
    );
  };

  return (
    <div className="content-wrapper">
      <h1>User List</h1>
      <ContactList
        listContent={listContent}
        deleteUser={deleteUser}
        addUser={addUser}
        updateData={updateData}
      />
    </div>
  );
};

export default Root;
