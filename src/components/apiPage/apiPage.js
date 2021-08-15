import React, { useState, useEffect } from "react";
import "./apiPage.css"
import image from "../../assets/images/static.png"
import axios from "axios";
import { APIPath } from "../../data/api";


const ApiPage = (props) => {

    const [list,setList]=useState(null)

    useEffect(() => {
        axios.get(APIPath.getdata).then(data=>{
            console.log("data",data)
            setList(data.data)
        }
            
        )
    }, []);


    return (
        <div className="page">
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
                                </div>
                            </div> 
                        ))
                    }
                </div>
    </div>
    )
}


export default ApiPage;