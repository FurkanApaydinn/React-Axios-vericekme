import React,{useState,useEffect} from 'react'
import './App.css';
import axios from 'axios'

function App() {
  const [veri, setVeri] = useState("")
  const [veri1, setVeri1] = useState("")
  const [veri2, setVeri2] = useState("")
  const [veri3, setVeri3] = useState("")
  const [veri4, setVeri4] = useState("")

  const [id,setId]=useState(0)
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      // .then(res=>console.log(res.data))
      .then(res => setVeri(res.data[id].name))
      
  }, [veri, id])
   useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setVeri1(res.data[id].phone))
      
   }, [veri1, id])
   useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setVeri2(res.data[id].username))
      
   }, [veri2, id])
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      // .then(res=>console.log(res.data))
      .then(res => setVeri3(res.data[id].email))
      
  }, [veri3, id])
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      // .then(res=>console.log(res.data))
      .then(res => setVeri4(res.data[id].address.city))
      
  }, [veri4, id])
  
  return (
    <div className="App">
      <div className='container'>
       
        <h1>Servisten dönen response değerleri</h1>
        <p>Name</p>
        <p style={{fontWeight:"bold"}}>{veri}</p>
        <p>Username</p>
        <p style={{ fontWeight: "bold" }}>{veri2}</p>
        <p>Email</p>
        <p style={{fontWeight:"bold"}}>{veri3}</p>
        <p>Address</p>
        <p style={{fontWeight:"bold"}}>{veri4}</p>
        <p>Phone</p>
        <p style={{ fontWeight: "bold" }}>{veri1}</p>
        
      </div>
      <p style={{fontWeight: "bold"}}>Aşağıdaki alana id numarası giriniz:</p>
      <p style={{ margin: "20px auto" }}><input type="number" value={id} onChange={a => setId(a.target.value)} style={{ width: "400px", height: "30px" }} /></p>
      <p style={{fontWeight: "bold"}}>Not:Liste 10 kişiden oluşmaktadır. Yukarıdaki textbox'a id numarası giriniz("0,1,2"). id numarası girdiğinizde yukarıda yer alan alanda bilgiler güncellenecektir.</p>
    </div>
  );
}

export default App;
