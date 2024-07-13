import React from 'react'
import { ButtonInterface} from './ButtonInterface'


function Button(props: ButtonInterface) {


    // console.log(props)

    let buttonBG: string;

    // can also take className which is simpler
    switch(props.colors) {
        case 'primary':
            buttonBG= '--primary-color'
            break;
        case 'secondary':
            buttonBG= '--secondary-color'
            break;
    }



    const handleClick = () => {
        console.log(props)
    }


  return (
    <button style={{backgroundColor: `var(${buttonBG})`}} onClick={handleClick}>
        {props.value}
    </button>
  )
}

export default Button