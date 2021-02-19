import React, { useEffect, useState } from 'react'
const HotelDetail = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        fetchData()
    },[])

    const fetchData = () => {
        const mockData = {
            id: id++,
            name: '上海虹橋萬象城CitiGO歡閣酒店 (CitiGO Hotel Hongqiao Shanghai)',
            price: 'HK$754.4'
        }
        setData(mockData)
    }
    return (
        <div>
            <h1>Hotel Detail</h1>
        </div>
    )
}

export default HotelDetail