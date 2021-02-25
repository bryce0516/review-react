import React, { useEffect,useState } from "react";

const UseEffect1 = ({userId}) => {
  const [ user, setUser ] = useState(null)
  const value = userId + 10; 

  useEffect(() => {
    console.log(value)
    getUserApi(userId).then(res => setUser(res))
  },[userId])

  return (  
    <div>
      {!user && <p>getting user info</p>}
      {user && (
        <>
          <p>{`name is ${user.name}`}</p>
          <p>{`age is  ${user.age}`}</p>
        </>
      )}
    </div>
  );
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

export default UseEffect1;