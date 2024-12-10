import './App.css';
import Profile from './componrts/Profile';
function App() {

  const profiles = [
    {
      name:"Moin",
      img:"https://avatars.githubusercontent.com/u/186063909?v=4",
       disc:"I am in 7 std",
       btn:"Open Profile",
       btnbody:"https://github.com/moinuddin-4678"
    },
    {
      name:"Nawaf",
      img:"https://avatars.githubusercontent.com/u/182943003?v=4",
       disc:"I am in 11 std",
       btn:"Open Profile",
       btnbody:"https://github.com/Sknawaf05"
    },
    {   
      name:"Vocab",
      img:"https://avatars.githubusercontent.com/u/185526098?v=4",
       disc:"I am a Full stack devoloper",
       btn:"Open Profile",
       btnbody:"https://github.com/Vocabstudents"
    }
  ]
  return (
    <div className='container'>
      <h1>Profiles</h1>
      <div className='row'>
        {
          profiles.map((profile)=>{
            return <Profile profile={profile}/>
          })
        }
      </div>
      {/* <Btn login="Log In"/>*/}
    </div>
  );
}
export default App;