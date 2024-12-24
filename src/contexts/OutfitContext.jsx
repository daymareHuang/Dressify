import React, { useState, useEffect } from 'react'

const OutfitContext = React.createContext({
    name: '',
    imageSrc: '',
    setName: () => { },
})

export const OutfitContextProvider = (props) => {
    const [tittle, setTittle] = useState("過年小狗");
    const [comment, setComment] = useState("小貓要紅包");
    const [season, setSeason] = useState("winter");

    // 照片 // 獲取 BLOB Image
    // useEffect(() => {
    //     let takePhoto = async function () {
    //         const url = "./src/assets/img/outfit.jpg"
    //         let response = await fetch(url) //使用fetch 去取得資料
    //         const base64 = await response.blob() //將取得的資料 存放到 BLOB

    //         if (base64) {
    //             const reader = new FileReader()
    //             reader.onload = () => {
    //                 setImageSrc(reader.result)
    //             }
    //             reader.readAsDataURL(base64)
    //         }
    //     }
    //     takePhoto();
    // }, [])
    const [imageSrc, setImageSrc] = useState(null)
    const [CroppedSrc, setCroppedSrc] = useState(null)

    // 濾鏡
    const [brightness, setBrightness] = useState(100)
    const [contrast, setContrast] = useState(100)
    const [saturate, setSaturate] = useState(100)
    const filterStyle = {
        filter: `
            brightness(${brightness}%)
            contrast(${contrast}%)
            saturate(${saturate}%)
        `
    }

    // 標籤
    const [tagList, setTagList] = React.useState([
        {
            id: 0,
            brand:"",
            inCloset: 0,
            itemID: '',
            content: '這是什麼服飾',
            comment: '輸入註解',
            type: '',
            size: '',
            x: 150,
            y: 100,
        },
    ]);
    // 穿搭場合
    const [sceneList, setSceneList] = useState(["工作", "約會"])



    return (
        <OutfitContext.Provider value={{
            tittle, setTittle,
            comment, setComment,
            season, setSeason,
            sceneList, setSceneList,
            tagList, setTagList,
            imageSrc, filterStyle,
            CroppedSrc, setCroppedSrc,
            brightness, setBrightness, saturate, setSaturate, contrast, setContrast,
            setImageSrc
        }} >
            {props.children}
        </OutfitContext.Provider>
    )
}

export default OutfitContext
