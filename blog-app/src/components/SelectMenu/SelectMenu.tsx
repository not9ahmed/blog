import React from 'react'
import './selectMenu.css'
import { SelectMenuInterface } from './SelectMenuInterface'

// The following component will recieve props of items and returns a select menu
function SelectMenu(props: SelectMenuInterface) {


    console.log(props)



  return (
    <label>
        {props.labelName}
        <select name={props.name} className={props.classNameValue} onInput={props.inputHandler}>
        
            Select Item Component

            {props.options.map(option => 
                <option key={option.id} value={option.value}>
                    {option.name}
                </option>
                
            )}
        </select>

    </label>
  )
}

export default SelectMenu


/*
    <select name='post-type' id='post-type' className='category-filter' onInput={filterCategories}>

    {filteredCategories.map(category => (

        <option key={category.id} value={category.id}>{category.name}</option>
    ))}

</select>
*/