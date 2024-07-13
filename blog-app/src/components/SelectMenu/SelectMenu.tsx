import React from 'react'
import './selectMenu.css'
import { SelectMenuInterface } from './SelectMenuInterface'

// The following component will recieve props of items and returns a select menu
function SelectMenu(props: SelectMenuInterface) {


    console.log(props)


  return (
    <select>SelectMenu</select>
  )
}

export default SelectMenu