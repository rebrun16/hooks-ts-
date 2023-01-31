import {useContext, useState} from 'react';

import UserContext, { UserState } from "./store";

function ConsumerComponent() {
  const user = useContext<UserState>(UserContext);

  return (
    <div>
      <div>First: {user.first}</div>
      <div>Last: {user.last}</div>
    </div>
  )
}

const UseContextComponent = () => {
  const [user, setUser] = useState<UserState>({
    first: "jane",
    last: "smith"
  })
  return (
    <UserContext.Provider value={user}>
    </UserContext.Provider>
  )
}

export default UseContextComponent;