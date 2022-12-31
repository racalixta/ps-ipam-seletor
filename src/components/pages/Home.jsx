import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities, fetchUfs, setSelectedUf,  fetchCityInfo } from '../../actions/HomeActions';

import Select from '../form/Select';
import InfoCard from '../card/InfoCard';

const Home = () => {

  const ufs = useSelector(state => state.ufs);
  const cities = useSelector(state => state.cities);
  const selectedUf = useSelector(state => state.selectedUf);
  const cityInfo = useSelector(state => state.cityInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUfs());
  }, [])

  useEffect(() => {
    dispatch(fetchCities(selectedUf));
  }, [selectedUf])
  
  const handleSelectedUf = (event) => {
    const uf = event.target.value;
    dispatch(setSelectedUf(uf));

  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    dispatch(fetchCityInfo(data.city));

  }

  return (
    <div className='bg-gray-100 min-h-screen p-8'>

      <div className="bg-gray-200 border border-blue-500 rounded h-40 w-full flex items-center justify-center">

        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row">

          <Select text="Estados" name="state" options={ufs} value="state" handleOnChange={handleSelectedUf} />
    
          <Select text="Cidades" name="city" options={cities} value="city"  />

          <button className='bg-green-600 mx-2 md:mx-0 px-3 py-2 text-white rounded-md hover:bg-green-500' type='submit'>
            Buscar
          </button>

        </form>

      </div>

      {cityInfo.length > 0 ? (
          
        <div className='w-full flex flex-col md:flex-row mt-2'>
          <div className="w-full md:w-2/6 md:mr-4">

            <InfoCard cityInfo={cityInfo} />

          </div>

          <div className='w-full md:w-4/6 '>
            <div id="map" className='h-96 mt-4 w-full border border-blue-500 rounded'></div>

          </div>

        </div>
      ) : (
        ''
      )}

    </div>
  )
}

export default Home;
