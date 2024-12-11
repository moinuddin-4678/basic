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
    },
    {   
      name:"Saad",
      img:"https://avatars.githubusercontent.com/u/182938196?v=4",
       disc:"I am studying in BCA......",
       btn:"Open Profile",
       btnbody:"https://github.com/shk-sam"
    },
    {   
      name:"Prience",
      img:"https://avatars.githubusercontent.com/u/111479652?v=4",
       disc:"I am studying in BCA...",
       btn:"Open Profile",
       btnbody:"https://github.com/pri810"
    },
    {   
      name:"Tehseen",
      img:"https://avatars.githubusercontent.com/u/182941013?v=4",
       disc:"I am in 12 std",
       btn:"Open Profile",
       btnbody:"https://github.com/jiyashah26"
    },
    {   
      name:"Rumana",
      img:"https://avatars.githubusercontent.com/u/185526264?v=4",
       disc:"I am in 12 std",
       btn:"Open Profile",
       btnbody:"https://github.com/rumanamotiwala"
    },
    {   
      name:"Bhaseer",
      img:"https://avatars.githubusercontent.com/u/182937907?v=4",
       disc:"I am in 12 std",
       btn:"Open Profile",
       btnbody:"https://github.com/Basheer107"
    },
    {   
      name:"Muhammad",
      img:"https://avatars.githubusercontent.com/u/185525438?v=4",
       disc:"I am in 12 std",
       btn:"Open Profile",
       btnbody:"https://github.com/gaghamohammad"
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