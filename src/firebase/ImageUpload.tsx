import React, { useState } from 'react'
import { storage } from './firebase'
import {v4} from 'uuid'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'

export default function ImageUpload() {
    const [images,setImages]=useState<File[]>([])
    const [imagesUrl,setImagesUrl]=useState<string[]>([])

    //handel input changes
    const handelChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const files = e.target.files
        if(files){
            const selectedFiles = Array.from(files).slice(0,4)//only upload up to 4 images
            const selectedFilesUrl = selectedFiles.map(file => URL.createObjectURL(file))
            setImages(selectedFiles)
            setImagesUrl(selectedFilesUrl)
        }
    }

    //handel submit
    const handelSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(images && images.length >=2){
            images.map(async image =>{
                const imageRef = ref(storage,`images/${image?.name + v4()}`)
                await uploadBytes(imageRef,image)
                const url = await getDownloadURL(imageRef)
                console.log(url)
            })
        }else{
            alert("upload minimum 2 images")
        }
    }
  return (
   <>
   <div className="">
    <p>upload multiple photos</p>
    <div className="">
       {imagesUrl.map((img,index)=>(
        <div className=""key={index}>
            <img src={img} alt="" />
        </div>
       ))}
        <form action="" onSubmit={handelSubmit}>
            <div className="">
                <input type="file" accept='image/*' name="" id="" onChange={handelChange} multiple />
            </div>
            <div className="">
                <button type='submit'>Upload</button>
            </div>
        </form>
    </div>
   </div>
   </>
  )
}
