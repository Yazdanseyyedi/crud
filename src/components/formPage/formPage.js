import React, { useState, useEffect } from "react";
import "./formPage.css"
import image from "../../assets/images/static.png"



const FormPage = (props) => {

    const [list,setList]=useState(null)
    const [name,setName]=useState(null)
    const [age,setAge]=useState(null)
    const [lastname,setLastname]=useState(null)
    const [ifedit,setIfEdit]=useState(false)
    const [editID,setEditID]=useState(false)

    useEffect(() => {

    }, []);


    const submit=()=>{
        let tempList
        if(ifedit){
            tempList=[...list]
            tempList[editID]={name:name,lastname:lastname,age:age}
            setEditID(null)
            setIfEdit(false)
        }
        else{
            if (list){
                tempList=[...list,{name:name,lastname:lastname,age:age}]
                console.log(tempList)
            }
            else{
                tempList=[{name:name,lastname:lastname,age:age}]
                console.log(tempList)
            }
        }
        
        setName("")
        setLastname("")
        setAge("")
        
        setList(tempList)
    }

    const edit=(id)=>{
        let tempList=[...list]
        // tempList[id]
        console.log(id)
        console.log(tempList[id])
        setName(tempList[id].name)
        setLastname(tempList[id].lastname)
        setAge(tempList[id].age)
        setIfEdit(true)
        setEditID(id)
        
    }


    const delete_card =(id)=>{
        let tempList=[...list]
        // tempList[id]
        console.log(id)
        console.log(tempList[id])
        tempList.splice(id,1)
        setList(tempList)
    }
    

    return (
        <div className="page">
                <div className="form">
                <input onChange={(e) => setName(e.target.value)} value={name} className="input" label="نام"
                           placeholder="نام را وارد کنید."/>
                <input onChange={(e) => setLastname(e.target.value)} value={lastname} className="input" label="نام خانوادگی"
                           placeholder="نام خانوادگی را وارد کنید."/>
                <input onChange={(e) => setAge(e.target.value)} value={age} className="input" label=""
                           placeholder="سن خود را وارد کنید."/>
                <p className="submit" onClick={()=>submit()}>{ifedit?"edit":"submit"}</p>
                </div>
                <div className='my-list-page'>
                    {
                        list &&
                        list.map((item,index) => (
                            
                                <div key={index} className="list-card">
                                <div className="cover-div">
                                    <img alt='cover' className="cover"
                                        src={image} />
                                </div>
                                <div className='content'>
                                    <p className="in-line-item">نام: {item.name}</p>
                                    <p className="in-line-item">نام خانوادگی: {item.lastname}</p>
                                    <p className="in-line-item">سن: {item.age}</p>
                                    <div className="end-line-button">
                                        <p  className="detail" onClick={()=>{edit(index)}}>ویرایش</p>
                                        <p className="delete" onClick={()=>{delete_card(index)}} >حذف</p>
                                    </div>
                                </div>
                            </div> 
                        ))
                    }
                </div>
    </div>
    )
}


export default FormPage;