import React, { ChangeEvent } from 'react'

interface InputBookProps{
    label: string,
     placeholder: string,  
     onChange: (e: ChangeEvent<HTMLInputElement>) => void;
     required: boolean
}

const InputBook: React.FC<InputBookProps> = ({ label, placeholder, onChange, required = true }): JSX.Element => {
  return (
    <div>
         <label form="name">{label}:</label>
                <input
                    type="text"
                    placeholder={placeholder}
                    onChange={onChange}
                    required={required}
                />
    </div>
  )
}

export default InputBook