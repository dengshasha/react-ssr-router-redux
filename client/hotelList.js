let id = Math.ceil(Math.random() * 10000)
const mockData = [
    {
        id: id++,
        name: '上海虹橋萬象城CitiGO歡閣酒店 (CitiGO Hotel Hongqiao Shanghai)',
        price: 'HK$754.4'
    },
    {
        id: id++,
        name: '上海萬信R酒店 (Wassim R Hotel)',
        price: 'HK$783.84'
    }
]
const HotelList = () => {
    return (
        <div>
            <h1>Hotel List</h1>
            {
                mockData.map((data) => (
                    <div key={data.id} onClick={this.goToHotelDetail}>
                        <p>{data.name}</p>
                        <p>{data.price}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default HotelList