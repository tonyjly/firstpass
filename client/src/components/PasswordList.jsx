// import React from 'react';
// import ReactDOM from 'react-dom';

const passwords = [
  'Password 1',
  'Password 2',
  'Password 3',
  'Password 4',
  'Password 5',
  'Password 6',
  'Password 7',
  'Password 8',
];

const PasswordList = () => {

  return (
    <>
      <div>
        {passwords.map((password) => (
          <div>{password}</div>
        ))}
      </div>

      <div>

      </div>
    </>
  )
}

export default PasswordList;