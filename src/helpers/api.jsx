const BASE_URL = `https://servicodados.ibge.gov.br/api/v1`;

const responseJson = (response) => response.json();

const sortByAscending = (a, b) => {
  return a.label.localeCompare(b.label);

}

export const parseUfs = (ufs) => {
  return ufs.map((uf) => ({ id: uf.id, label: uf.nome, value: uf.sigla })).sort(sortByAscending);

}
// info.municipio.regiao_imediata.regiao_intermediaria.nome
export const parseCityInfo = (city) => {
  return city.map((info) => ({ 
    id: info.id,
    label: info.nome,
    municipioNome:  info.municipio.nome,
    microrregiaoNome: info.municipio.microrregiao.nome,
    mesorregiaoNome: info.municipio.microrregiao.mesorregiao.nome, 
    ufNome: info.municipio.microrregiao.mesorregiao.UF.nome,   
    ufSigla: info.municipio.microrregiao.mesorregiao.UF.sigla,
    regiao: info.municipio.microrregiao.mesorregiao.UF.regiao.nome,
    regiaoSigla: info.municipio.microrregiao.mesorregiao.UF.regiao.sigla,
    regiaoIntermediariaNome: info['municipio']['regiao-imediata']['regiao-intermediaria']['nome']
  }));
}

export const parseCities = (uf) => {
  return uf.map((city) => ({ value: city.id, label: city.nome })).sort(sortByAscending);

}

export const getUfs = async() => {
  const url = `${BASE_URL}/localidades/estados`;
  const ufs = await fetch(url).then(responseJson);
  return ufs;

}

export const getCities = async(uf) => {
  if(!uf) return Promise.resolve([]);

  const url = `${BASE_URL}/localidades/estados/${uf}/municipios`;
  const cities = await fetch(url).then(responseJson);
  return cities;

}

export const getCityInfos = async(id) => {
  if(!id) return Promise.resolve([]);

  const url = `${BASE_URL}/localidades/municipios/${id}/distritos`
  const cityInfos = await fetch(url).then(responseJson);
  return cityInfos;

}



