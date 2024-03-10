import Image from "next/image";
import { Roboto } from "next/font/google";
import Navbar from "@/components/Navbar";
import Item from "@/components/Item";
import { FC, useEffect, useState } from "react";

const inter = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"] });

export default function Home() {
  const [searchInput, setSearchInput] = useState("")
  const [forecastData, setForecastData] = useState<any>(null);

  const fetchWeatherData = async () => {
    const city = searchInput ? searchInput : "awka"
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.NEXT_PUBLIC_API_ID}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setForecastData(data)
      return data;
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
  }

  function convertEpochToDate(epochTime: number) {
    var date = new Date(epochTime * 1000);
    return date.toLocaleString();
  }


  useEffect(() => {
    const get = async () => {
      await fetchWeatherData();
    }
    get()
  }, []);
  console.log(forecastData?.list[0])
  return (
    <main
      className={`px-5 md:px-10 ${inter.className}`}
    >
      <Navbar searchInput={searchInput} setSearchInput={setSearchInput} fetchWeatherData={fetchWeatherData} />
      <div className="mt-10 ">
        {forecastData && (
          <div className="flex justify-between flex-col ">
            <City title="Country" value={forecastData?.city.country} />
            <City title="City" value={forecastData?.city.name} />
            <City title="sunrise" value={convertEpochToDate(forecastData?.city.sunrise)} />
            <City title="sunset" value={convertEpochToDate(forecastData?.city.sunset)} />

          </div>
        )}
      </div>


      {/*<div className="grid md:grid-cols-5 grid-cols-1 gap-3  mt-5">
        {forecastData?.list.map(({ clouds, dt_txt, main, weather, visibility, wind }: any) => {
          return (
            <div key={dt_txt}>
              <Item
                time={dt_txt}
                temp={(Number(main.temp) - 273.15)}
                realFeel={(Number(main.feels_like) - 273.15)}
                description={weather[0].description}
                windSpeed={wind.speed}
                pressure={main.pressure}
                humidity={main.humidity}
                visibility={visibility} />


            </div>
          )
        })}


      </div>*/}
      {forecastData?.list[0] && (<div className="flex w-full items-center justify-center mt-3" key={forecastData.list[0].dt_txt}>
        <Item
          time={forecastData.list[0].dt_txt}
          temp={(Number(forecastData.list[0].main.temp) - 273.15)}
          realFeel={(Number(forecastData.list[0].main.feels_like) - 273.15)}
          description={forecastData.list[0].weather[0].description}
          windSpeed={forecastData.list[0].wind.speed}
          pressure={forecastData.list[0].main.pressure}
          humidity={forecastData.list[0].main.humidity}
          visibility={forecastData.list[0].visibility} />


      </div>)}



    </main>
  );
}



type Props = {
  title: string
  value: string
}

const City: FC<Props> = ({ title, value }) => {
  return (
    <div className="text-gray-500 text-center ">
      <p className="text-white md:text-xl text-sm">{title}</p>
      <p className="md:text-base text-sm">{value}</p>
    </div>
  )
}

