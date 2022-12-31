import React from 'react'
import { useSelector } from 'react-redux';
import { parseCoords } from '../../helpers/map';
 
const InfoCard = () => {
  let count = 1;
  const cityInfo = useSelector(state => state.cityInfo);
  const { distritos } = cityInfo;
  const { cidade, municipio, municipioId, microrregiao, mesorregiao, ufNome, ufSigla, regiao, regiaoSigla, regiaoImediata, regiaoIntermediaria } = cityInfo[0];
  parseCoords(municipioId);

  return (
    <div className="bg-gray-200 border border-blue-500 rounded w-full flex flex-wrap items-center justify-center mt-4">
      <ul className='my-4 w-10/12 flex flex-col flex-wrap'>
        <li>
          <span className='font-bold'>Cidade: </span> {cidade}.
        </li>
        <li>
          <span className='font-bold'>Município: </span> {municipio}.
        </li>
        <li>
          <span className='font-bold'>Microrregiao: </span> {microrregiao}.
        </li>
        <li>
          <span className='font-bold'>Mesorregiao: </span> {mesorregiao}.
        </li>
        <li>
          <span className='font-bold'>Uf: </span> {ufNome}, {ufSigla}.
        </li>
        <li>
          <span className='font-bold'>Região: </span> {regiao}, {regiaoSigla}. 
        </li>
        <li>
          <span className='font-bold'>Região-imediata: </span> {regiaoImediata}.
        </li>
        <li>
          <span className='font-bold'>Região-intermediaria: </span> {regiaoIntermediaria}.
        </li>

        {distritos  ? (
          <li>
            <span className='font-bold'>Distritos: </span> 
            
            {distritos.map((distrito) => {
              if(count === distritos.length) {
                return <span key={distrito}>{distrito}. </span>

              } else {
                count += 1;
                return <span key={distrito}>{distrito}, </span>
              }
              
            })}

          </li>


        ) : (
          ''
        )}

      </ul>
    </div>
  )
}

export default InfoCard;
