import React from 'react'
import { ButtonInterface} from '../../types/button'


function Button(props: ButtonInterface) {


    // console.log(props)

    let buttonBG: string;

    switch(props.colors) {
        case 'primary':
            buttonBG= '  --primary-color'
            break;
        case 'secondary':
            buttonBG= '  --secondary-color'
            break;

    }



    const handleClick = () => {
        console.log(props)
    }


  return (
    <button style={{backgroundColor: `var(${buttonBG})`}} onClick={handleClick}>
        button
    </button>
  )
}

export default Button