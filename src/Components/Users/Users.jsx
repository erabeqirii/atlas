import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './users.scss';

const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://example-data.draftbit.com/users?_limit=5')
      .then((response) => {
        setData(response.data);

      })
      .catch((error) => {
        console.log('error', error);
      });
  }, []);

  return (
    <div className='Users-component'>
      <div className='header-users'>
      <h1>USERS</h1>     
      <h3>These are the users of our platform!</h3>
      </div>
      <div className="Users">
        <div className="Users-row">
          {data.map((el) => (
            <div key={el.id} className='users-element'>
              <div>
              <img src={el.avatar} alt="image" />
              </div>
              <div>
                <h3>{el.fullName}</h3>
                <p>First name: {el.firstName}</p>
                <p>Last name: {el.lastName}</p>
                <p>Username: {el.username}</p>
                <p>E-mail: {el.email}</p>
                <p>Phone: {el.phone}</p>
                <p>Twitter: {el.twitterHandle}</p>
                <p>Biography:<br/> {el.bio}</p>
              </div>
              </div>
          ))}
        </div>
      </div>
      <div className='footer-users'>
        <h2>Users © Era Beqiri</h2>
      </div>
    </div>
  );
};

export default Users;
