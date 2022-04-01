import React from 'react';
import React, { useState } from 'react';
import './style.css';

export default function App() {
  React.useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('data'));
    setShowData(localData);
  });
  const [showData, setShowData] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [age, setAge] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      password: password,
      age: age,
    };
    localStorage.setItem('data', JSON.stringify(data));
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit}>
        <input
          type="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="age"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
      <table>
        <thread>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Age</th>
          <tbody>
            <tr>
              <td>{showData.name}</td>
              <td>{showData.age}</td>
              <td>{showData.password}</td>
              <td>{showData.age}</td>
            </tr>
          </tbody>
        </thread>
      </table>
    </div>
  );
}
