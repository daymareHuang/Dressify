import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Dressify.css'

import OutfitContext from "../../contexts/OutfitContext";
import MyLayout from '../../layouts/MyLayout';



function Image() {
    const { imageSrc, CroppedSrc, filterStyle } = useContext(OutfitContext)

    let navigate = useNavigate();

    // 頁面跳轉
    function handleNext() {
        navigate("/AddTag")
    }
    function handlePrev() {
        navigate(-1)
    }
    function handleImgEdit() {
        navigate("/ImgEditList")
    }

    return (
        <MyLayout>
            <div className="d-flex flex-column px-5 " style={{ height: '543px', marginTop: '50px' }}>
                <span className='text-center text-s letterSpacing-2 mt-4 mb-3'>穿搭照片</span>

                {/* 圖片框 */}
                <div className="mb-4" style={{ position: 'relative' }}>
                    <div style={{ height: '375px', width: '285px', overflow: 'hidden' }} className="w-100 rounded-4">
                        <span style={filterStyle}>
                            <img className="" src={CroppedSrc || imageSrc} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </span>
                    </div>

                    {/* 編輯 */}
                    <button className="btn d-flex rounded-pill" style={{ backgroundColor: 'var(--color-highlight)', position: 'absolute', top: '1rem', left: '1rem', }} onClick={handleImgEdit}>
                        <span className='text-m mx-1 letterSpacing-1' style={{ color: 'var(--color-white)' }}><img src="./src/assets/img/icon/pencil-white.svg" width="16px" className='pb-1 me-2' />編輯</span>
                    </button>
                </div>

                {/* 上下頁 */}
                <div className="d-flex justify-content-between  w-100">
                    <button className="text-m btn rounded-pill px-3" style={{ backgroundColor: 'var(--color-black)', color: 'var(--color-white)' }} onClick={handlePrev}>上一步</button>
                    <button className="text-m btn rounded-pill px-3" style={{ backgroundColor: 'var(--color-black)', color: 'var(--color-white)' }} onClick={handleNext}>下一步</button>
                </div>
            </div>
        </MyLayout>
    )
}

export default Image
