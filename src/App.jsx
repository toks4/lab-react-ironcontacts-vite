import { useState } from 'react'
import './App.css'
import contacts from './contacts.json'

function App() {

const [firstFiveCeleb, setFirstFiveCeleb] = useState(contacts.slice(0,5)); 
console.log(firstFiveCeleb);
const [listOfContacts, setListOfContacts] = useState(contacts.slice(6));
const getContacts =()=>{
  const randomContact= listOfContacts[Math.floor(Math.random() * listOfContacts.length)];
setFirstFiveCeleb([...firstFiveCeleb,randomContact]);
const filterArray = listOfContacts.filter((contact)=>{
  if(randomContact.name !== contact.name){
   
  }
  return contact

})

setListOfContacts(filterArray);
}


function sortByName() {
  let sortedNameArray = [...firstFiveCeleb].sort((a, b) => {

    if(a.name > b.name){
      return 1
    }else if(a.name < b.name){
      return -1
    }else{
      return 0
    }
  })
  setFirstFiveCeleb(sortedNameArray)
}


function sortByPopularity(){
  let sortedPopArray = [...firstFiveCeleb].sort((a, b) => {

    if(b.popularity > a.popularity){
     return 1

     } else if (b.popularity < a.popularity){
 return -1
     }
     else{
       return 0 
     }
     })

       setFirstFiveCeleb(sortedPopArray)
}

function deleteName(id){
  let deletedNameArr = firstFiveCeleb.filter((celeb) => celeb.id !== id)
  
  
  setFirstFiveCeleb(deletedNameArr)
 
   }
  
   
   


return (
  
  <div className="App">
  <button onClick={getContacts}>addRandom</button>
  <button onClick={sortByPopularity}>Sort by Popularity</button>
  <button onClick={sortByName}>Sort by name</button>


    <h1>Iron Contacts</h1>
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>
      </thead>

      <tbody>
        {firstFiveCeleb.map((celeb) => (
          <tr>
            <td>
              <img src={celeb.pictureUrl} alt="celeb" className="image" />
            </td>
            <td>{celeb.name}</td>
            <td>{Math.round(celeb.popularity * 100) / 100}</td>

            <td>{celeb.wonOscar && <p> 🏆 </p>}</td>
            <td>{celeb.wonEmmy && <p> 🏆 </p>}</td>
            <td><button onClick= {() => deleteName(celeb.id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

)
}




export default App