import Navbar from "./navbar/navbar"
import MyFlashcard from "./Myflashcard"
import {Route,Routes } from "react-router-dom"
import CreateNew from "./CreateNew"


const CreateFlashcard=()=>{
    return(
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<CreateNew/>}/>
                <Route path="myflashcard" element={<MyFlashcard/>}/>
            </Routes>
        </div> 
    ) 

    
}
export default CreateFlashcard