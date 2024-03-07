import React, { Dispatch, FC, SetStateAction } from 'react'

type Props = {
    searchInput: string;
    setSearchInput: Dispatch<SetStateAction<string>>;
    fetchWeatherData: any
}

const Navbar: FC<Props> = ({ searchInput, setSearchInput, fetchWeatherData }) => {

    return (
        <nav className='h-[60px] flex items-center justify-between p-2'>
            <span className='text-white font-bold text-xl'>Climate Prediction</span>
            <div className='h-full gap-2 flex items-center'>
                <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    type="text"
                    className='h-full w-[300px] rounded-3xl bg-[#292929] px-5 outline-none text-sm text-white placeholder:text-gray-500' placeholder='Search city...'
                />
                <button
                    onClick={() => fetchWeatherData()}
                    className='text-black w-[100px] rounded-3xl bg-[#BAD7EC] h-full'>search</button>
            </div>

        </nav>
    )
}

export default Navbar