import React, { FC } from 'react'

type ItemProps = {
    temp: number
    time: string
    realFeel: number
    description: string
    windSpeed: string;
    visibility: string
    humidity: string
    pressure: string
}
const Item: FC<ItemProps> = ({ time, temp, realFeel, description, pressure, windSpeed, humidity, visibility }) => {

    return (
        <div className='w-full h-[350px] rounded-md bg-[#BAD7EC]'>
            <div className='w-full font-bold rounded-md bg-[#8db6d3] h-[60px] items-center flex px-5 justify-between'>
                <h2 className='text-xl text-gray-900'>{time}</h2>

            </div>
            <div className='flex items-center justify-center border-b'>
                <h1 className='text-[60px] font-bold'>{`${temp.toFixed(2)}°`}</h1>

            </div>



            <div className="grid grid-cols-2 grid-rows-3 gap-3 px-3 mt-5">
                <GridComponent title="Real feel" value={`${realFeel.toFixed(2)}°`} />
                <GridComponent title="Description" value={description} />
                <GridComponent title="Pressure" value={`${pressure}hPa`} />
                <GridComponent title="Humidity" value={`${humidity}%`} />
                <GridComponent title="Wind speed" value={`${windSpeed}m/s`} />
                <GridComponent title="Visibility" value={`${visibility}m`} />

            </div>
        </div>
    )
}

export default Item



type Props = {
    title: string
    value: string
}

const GridComponent: FC<Props> = ({ title, value }) => {
    return (
        <div className='flex flex-col text-sm text-gray-500'>
            <p>{title}</p>
            <p className='mt-1 text-black'>{value}</p>
        </div>
    )
}

