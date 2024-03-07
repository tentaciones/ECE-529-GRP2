import React, { Dispatch, FC, SetStateAction } from 'react'

type Props = {
    searchInput: string;
    setSearchInput: Dispatch<SetStateAction<string>>;
    fetchWeatherData: any
}

const Navbar: FC<Props> = ({ searchInput, setSearchInput, fetchWeatherData }) => {

    return (
        <nav className='md:h-[60px] h-[50px] flex items-center justify-between p-2'>
            <span className='text-white font-base md:font-bold md:text-xl text-[12px]'>Climate Prediction</span>
            <div className='h-full gap-2 flex items-center'>
                <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    type="text"
                    className='h-full md:w-[300px] w-[150px] rounded-md md:rounded-3xl bg-[#292929] px-5 outline-none text-sm text-white placeholder:text-gray-500' placeholder='Search city...'
                />
                <button
                    onClick={() => fetchWeatherData()}
                    className='text-black md:w-[100px] w-[60px] rounded-md md:rounded-3xl bg-[#BAD7EC] h-full text-sm md:text-base'>search</button>
            </div>

        </nav>
    )
}

export default Navbar