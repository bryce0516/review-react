import React, {useEffect, useState} from 'react'
// import getUserApi from '../components/UseEffect1'

export default function useUser(userId) {
  const [user, setUser] = useState(null);
  const value = userId + 10;

  useEffect(() => {
    console.log(value);
    getUserApi(userId).then((res) => setUser(res));
  }, [userId]);
  return user
}

const USER1 = {name: 'mike', age: 23}
const USER2 = {name: 'jane', age: 30}

function getUserApi(userId) {
  return new Promise(res => {
    setTimeout(() => {
      res(userId % 2 ? USER1 : USER2)
    }, 500)
  })
}

