import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Dressify.css'

import OutfitContext from "../../contexts/OutfitContext";
import MyLayout from '../../layouts/MyLayout';

function OutfitCreated() {
    let navigate = useNavigate();
    const { imageSrc, CroppedSrc, filterStyle } = useContext(OutfitContext)

    const handleAdd = () => { 
        navigate("/")
    }
    const handleCloset = () => {
        console.log(111);
        
        navigate("/ClosetMatch")
     }
    const handlePost = () => {
        
     }
    return (
        <MyLayout>
            <div className="d-flex flex-column px-5 container " style={{ height: '543px', marginTop: '50px' }}>
                <span className='text-center text-s letterSpacing-2 mt-4 mb-3'>新增成功</span>
                <div style={{ height: '375px', width: '285px', overflow: 'hidden' }} className="w-100 rounded-4">
                    <span style={filterStyle}>
                        <img className="" src={CroppedSrc || imageSrc} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </span>
                </div>

                <div className='row mt-3'>
                    <button onClick={handleAdd} className='col btn rounded-pill text-s' style={{ backgroundColor: "var(--color-black)", color: "var(--color-white)" }}>繼續新增</button>
                    <button onClick={handleCloset} className='col btn rounded-pill text-s' style={{ backgroundColor: "var(--color-black)", color: "var(--color-white)" }}>衣櫃首頁</button>
                    <button onClick={handlePost} className='col btn rounded-pill text-s' style={{ backgroundColor: "var(--color-black)", color: "var(--color-white)" }}>發佈到穿搭牆</button>
                </div>

            </div>


        </MyLayout>
    )
}

export default OutfitCreated
