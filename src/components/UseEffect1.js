import React, { useEffect,useState } from "react";
import useUser from '../hooks/useUser'

const UseEffect1 = ({userId}) => {
  const user = useUser(userId)

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

export default UseEffect1;