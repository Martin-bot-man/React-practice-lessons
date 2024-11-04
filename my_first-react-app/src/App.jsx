// conditional rendering  = allows you to control what gets rendered in your application based on certain conditions (show, hide, or change components)
import List from './List.jsx'

import UserGreeting from './UserGreeting.jsx'
// import Student from './Student.jsx';

function App() {
  const fruits = [{id: 1,name:"apple", calories:95},
                  {id: 2,name:"orange", calories:45},
                  {id: 3,name:"banana", calories:105},
                  {id: 4,name:"coconut" ,calories:159},
                  {id: 5,name:"pineapple", calories:37}];

    return (<List items ={fruits}/>)
}

export default App
