import React from 'react'
import './dummy.css'
// import Button from '../../components/Button/Button'
// import { ButtonInterface } from '../../components/Button/ButtonInterface'

function Dummy() {

    //   const buttonProps1: ButtonInterface = {
  //     id: 123,
  //     value: "Button One",
  //     colors: "primary"
  // }

  //   const buttonProps2: ButtonInterface = {
  //     id: 123,
  //     value: "Button Two",
  //     colors: "secondary"
  // }



  return (
    <div className='dummy'>
        <h1>
            Dummy Page to Experiment
        </h1>




        <dialog open>
        <p>Greetings, one and all!</p>
        <form method="dialog">
            <button>OK</button>
        </form>
        </dialog>
        
        
              {/* conditional rendering of button
        <Button {...buttonProps1} />
        <Button {...buttonProps2} /> */}


          <details >
            <summary style={{ backgroundColor: 'lightblue' }}>Summary: </summary>
              <p>
                details here here
              </p>
          </details>

    </div>
  )
}

export default Dummy