import './App.css';
import { useRef ,useState,useEffect} from 'react';
import { uploadFile } from './services/api';
const logo='https://cdn.windowsreport.com/wp-content/uploads/2016/10/File-Transfer-Sharing.jpg'


function App() {
const fileInputRef=useRef();
const onUploadClick=()=>{
  fileInputRef.current.click();
}

const [file,setFile]=useState('');
const [result, setResult]=useState('')

useEffect(()=>{
  const getImage=async()=>{
    if(file){
      const data=new FormData()
      data.append('name',file.name)
      data.append('file',file)
     let response= await uploadFile(data);
     setResult(response.path)

    }
  }
  getImage();

},[file])

  return (
   <div className='container'>
    <img src={logo} alt='image'/>
   <div className='wrapper'>
    <h1>File Sharing App</h1>
    <p>upload your files and share to any one any time</p>
    <button onClick={()=>onUploadClick()}>Upload </button>
    <input type='file'
    ref={fileInputRef}
    style={{display:'none'}}
    onChange={(e)=>setFile(e.target.files[0])}
    />
    <a href={result} target='_blank'>{result}</a>
   </div>

   </div>
    
  );
}

export default App;
