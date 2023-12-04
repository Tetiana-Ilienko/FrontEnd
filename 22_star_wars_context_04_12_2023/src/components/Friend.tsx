import React from 'react'

const Friend: React.FC<{photo: string, i: number}> = ({photo,i}) => {
    if(i === 6){
        return (
            <img className="bottomLeft" src= {photo} alt={`friend1${i + 1}`} />
          )

    }

    if(i === 8){
        return (
            <img className="bottomRight" src= {photo} alt={`friend1${i + 1}`} />
          )

    }
  return (
    <img src= {photo} alt={`friend1${i + 1}`} />
  )
}

export default Friend