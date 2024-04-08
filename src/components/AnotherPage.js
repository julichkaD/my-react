import React from 'react';

const AnotherPage = (props) => {
  const {username} = props;
 
  return (
    <div>
      <h1 className='another-page'>Hello, {username.toUpperCase()}</h1>
      <h2 className='another-page'>☞ and I am another page 🤪 😜</h2>
    </div>
  );
}

export default AnotherPage
