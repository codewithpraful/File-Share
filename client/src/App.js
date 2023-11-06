import logo from './logo.svg';
import './App.css';
import {useEffect, useRef, useState} from 'react'
import {UploadFile} from './Services/api'
function App() {
  const fileInputref = useRef()
  const [file,setFile]=useState('');
  const [result,setResult]=useState('');
  const OnUploadClick = ()=>{
    fileInputref.current.click();
   console.log(file)
  }
  const logo =`https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg`;
  useEffect(()=>{
    const getImage = async()=>{
      if(file){
         const data = new FormData();
          data.append("file", file.name)
          data.append("file", file)

         let response =  await UploadFile(data);
        setResult(response.path);
      }
      
    }
    getImage();
  },[file])
  return (
    <div className="container">
      <img src={logo} alt="img"/>
      <div className="wrapper">
      <h1>Simple File Sharing</h1>
      <p>Upload And Share The DownLoad Link</p>
      <button onClick={()=>OnUploadClick()} >Upload</button>
      <input type="file"
       ref={fileInputref}
       style={{display: "none"}}
       onChange={(e)=>setFile(e.target.files[0])}
      />
       <a href={result}>{result}</a>
       
      
      
       
       
       
      
      </div>
    </div>
  );
}

export default App;
