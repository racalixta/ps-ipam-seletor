import React, { useEffect, useState } from 'react'

import Select from '../form/Select';
import { getUfs, getCities, parseUfs, parseCities, getCityInfos, parseCityInfo } from '../../helpers/api';
import InfoCard from '../card/InfoCard';

const Home = () => {
  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);
  const [cityInfo, setCityInfo] = useState([]);
  const [selectedUf, setSelectedUf] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    getUfs()
    .then(parseUfs)
    .then((ufs) => {
      setUfs(ufs);

    });

  }, []);

  useEffect(() => {
    getCities(selectedUf)
    .then(parseCities)
    .then((cities) => {
      setCities(cities);

    });

  }, [selectedUf])

  const handleSelectedUf = (event) => {
    const uf = event.target.value;
    setSelectedUf(uf);

  }

  const handleSelectedCity = (event) => {
    const city = event.target.value;
    setSelectedCity(city);

  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    // const info = await getCityInfos(data.city);

    const info = await getCityInfos(data.city)
    .then(parseCityInfo)
    .then((infos) => setCityInfo(infos));
    // console.log('cityInfo ', cityInfo)

  }

  return (
    <div className='bg-gray-100 min-h-screen p-8'>

      <div className="bg-gray-200 border border-blue-500 rounded h-40 w-full flex items-center justify-center">

        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row">

          <Select text="Estados" name="state" options={ufs} value="state" handleOnChange={handleSelectedUf} />
          <Select text="Cidades" name="city" options={cities} value="city" handleOnChange={handleSelectedCity}  />

          <button className='bg-green-600 px-3 py-2 text-white rounded-md hover:bg-green-500' type='submit'>
            Buscar
          </button>

        </form>

      </div>

      {cityInfo.length > 0 ? (
        <div className="bg-gray-200 border border-blue-500 rounded w-full flex flex-wrap items-center justify-center mt-4">

          <InfoCard cityInfo={cityInfo} />

        </div>
      ) : (
        ''
      )}

    </div>
  )
}

export default Home