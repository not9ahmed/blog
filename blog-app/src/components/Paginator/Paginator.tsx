import React from 'react'
import './paginator.css'

function Paginator() {
  return (
    <div className='paginator'>
        <div className='page-num'>Prev</div>
        <div className='page-num'>1</div>
        <div className='page-num'>2</div>
        <div className='page-num'>3</div>
        <div className='page-num'>Next</div>
    </div>
  )
}

export default Paginator