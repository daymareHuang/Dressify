import React, { useEffect, useState } from 'react'
import ClosetLayout from '../../layouts/ClosetLayout'

function ClosetMatch() {
  const [outfits, setOutfits] = useState([]);
  useEffect(() => {
    async function getData() {
      const url = 'http://127.0.0.1:8000/api/outfits';
      try {
        const response = await fetch(url);
        const jsonObj = await response.json();
        // console.log(jsonObj);
        setOutfits(jsonObj);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getData();
  }, [])

  return (
    <ClosetLayout isActive="穿搭">
      <div style={{ paddingTop: '24px' }}></div>
      <div className='row container'>
        {outfits.length > 0 ? (
          outfits.map((outfit) => (
            <a href={`http://localhost:5173/ClosetMatch/${outfit.OutfitID}`} key={outfit.OutfitID} className="col-6 pt-4 px-4 text-decoration-none text-dark">
              <div >
                <p className="mb-1 ps-1 md-18">{outfit.Title}</p>
                <img className="border rounded" src={outfit.EditedPhoto} width="160" height="220" alt="loading..." />
              </div>
            </a>
          )
          )
        ) : <p>Loading...</p>
        }
      </div>
    </ClosetLayout>
  )
}

export default ClosetMatch