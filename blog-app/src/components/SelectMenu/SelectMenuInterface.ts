export interface SelectMenuInterface {
    id: number,
    name: string,
    labelName: string,
    classNameValue: string,
    value: string,
    color: 'primary' | 'secondary',
    options: OptionInterface[],
    inputHandler?: () => void 
}


export interface OptionInterface {
    id: number,
    name: string,
    value: string
}




/**
 

<select name='post-type' id='post-type' className='category-filter' onInput={filterCategories}>
                          <option key={category.id} value={category.id}>{category.name}</option>

 */