import { useState } from "react"
import Button from "./Button"
import ImageUpload from "./firebase/ImageUpload"

function App() {
  const [show,setShow]=useState(false)

  const handelClick=()=>{
    setShow(!show)
  }

  return (
    <>
     <div className="">
        <p className="text-2xl text-blue-600 text-center">{show ? 'This is suneel learning props': 'lala'}</p>
        <div className="">
          <Button backgroundColor="red500" displayText="k cha halkhabar" onclick={handelClick} />
        </div> 
        <div className=" mt-52">
          <ImageUpload/>
        </div>
     </div>
    </>
  )
}

export default App
