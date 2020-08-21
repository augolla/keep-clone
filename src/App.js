import React,{useContext} from 'react';
import './App.css';
import Header,{ShowContext} from './components/Header'
import AllNotes from './components/AllNotes'
import Form from './components/Form'
import SignUpPage from './components/SignUpPage'
import LogInPage from './components/LogInPage'
// import firebase from './firebase/fbConfig'

function App(){
  // componentDidMount(){
  //   const db=firebase.firestore()
  //   db.collection('Items').get().then((snapshot=>{
  //     snapshot.docs.forEach(doc=>{
  //       console.log(doc.data());
  //     })
  //   }))
  // }
  const cts=useContext(ShowContext)
  return (
    <div className="App">
      <Header/>
      <Form/>
      <AllNotes/>
      <SignUpPage/>
      <LogInPage/>
    </div>
  );
}
  

export default App;
