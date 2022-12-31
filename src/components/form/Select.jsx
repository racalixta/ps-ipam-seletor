import React from 'react'

const Select = ({text, name, options = [], handleOnChange}) => {

  return (
    <div className='mr-6 mb-2 md:mb-0 w-full flex flex-nowrap'>

      <label className='text-xl mx-2 md:mx-0 md:mr-4' htmlFor={name}>{text}:</label>

      <select className='text-black mx-2 md:mx-0 w-4/6 md:w-48 h-8 rounded-md cursor-pointer' 
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