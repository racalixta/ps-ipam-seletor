import React from 'react'

const Select = ({text, name, options = [], handleOnChange, value}) => {

  return (
    <div className='mr-6 mb-2 md:mb-0 flex flex-wrap md:flex-nowrap'>

      <label className='text-xl mr-4' htmlFor={name}>{text}:</label>

      <select className='text-black w-fit md:w-48 h-8 rounded-md' 
        name={name} id={name} onChange={handleOnChange}>

        <option value="">Selecione uma opção</option>

        {options.map(({ label, value } ) => {
            
          return (
              <option value={value} key={value}>
                {label}
              </option>
          )

        })}


      </select>

    </div>
  )
}

export default Select