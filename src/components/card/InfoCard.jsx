import React from 'react'

const InfoCard = (cityInfo = []) => {
  let count = 1;
  const { distritos } = cityInfo.cityInfo;
  const cidadeInfo = cityInfo.cityInfo[0]
  const { id, label, municipioNome, microrregiaoNome, mesorregiaoNome, ufNome, ufSigla, regiao, regiaoSigla, regiaoIntermediariaNome } = cidadeInfo;

  return (
    <ul className='my-4 w-3/5 flex flex-col flex-wrap items-center' key={id}>
      <li key={`nome${label}`}>
        <span className='font-bold'>Cidade: </span> {label}.
      </li>
      <li key={`municipio${municipioNome}`}>
        <span className='font-bold'>Município: </span> {municipioNome}.
      </li>
      <li key={`microrregiao${microrregiaoNome}`}>
        <span className='font-bold'>Microrregiao: </span> {microrregiaoNome}.
      </li>
      <li key={`mesorregiao${mesorregiaoNome}`}>
        <span className='font-bold'>Mesorregiao: </span> {mesorregiaoNome}.
      </li>
      <li key={`ufSigla${ufNome}`}>
        <span className='font-bold'>Uf: </span> {ufNome}, {ufSigla}.
      </li>
      <li key={regiao}>
        <span className='font-bold'>Região: </span> {regiao}, {regiaoSigla}. 
      </li>
      <li key={regiaoIntermediariaNome}>
        <span className='font-bold'>Região-intermediaria: </span> {regiaoIntermediariaNome}.
      </li>

      {distritos  ? (
        <li key='distritos' className='text-center'>
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
  )
}

export default InfoCard
