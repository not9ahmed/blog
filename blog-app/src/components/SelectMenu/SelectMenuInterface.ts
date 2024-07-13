export interface SelectMenuInterface {

    id: number,
    name: string,
    classNameValue: string,
    value: string,
    color: 'primary' | 'secondary',
    options: Array<ItemInterface>
}


export interface ItemInterface {
    key: string,
    value: string,
    name: string
}


export 

/**
 

<select name='post-type' id='post-type' className='category-filter' onInput={filterCategories}>
                          <option key={category.id} value={category.id}>{category.name}</option>

 */