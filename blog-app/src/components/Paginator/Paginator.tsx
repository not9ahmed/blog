import React from 'react'
import './paginator.css'

function Paginator() {
  return (
    <div className='paginator'>
        <div className='pagin-item pagin-prev'>Prev</div>
        <div className='pagin-item'>1</div>
        <div className='pagin-item'>2</div>
        <div className='pagin-item'>3</div>
        <div className='pagin-item pagin-next'>Next</div>
    </div>
  )
}

export default Paginator