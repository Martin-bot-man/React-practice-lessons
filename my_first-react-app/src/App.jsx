// conditional rendering  = allows you to control what gets rendered in your application based on certain conditions (show, hide, or change components)


import UserGreeting from './UserGreeting.jsx'
// import Student from './Student.jsx';

function App() {
  return(
    <>
    <UserGreeting isLoggedIn = {true} username ="Martin Owino" />
    </>
  );
}

export default App
