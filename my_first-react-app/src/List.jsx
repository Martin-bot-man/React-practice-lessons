

function List(){
const itemList = props.items

//  fruits.sort((a, b)=> a.name.localeCompare(b.name)) ;   

// const highcalFruits = fruits.filter(fruit => fruit.calories >= 100);
const listItems = itemList.map(item => <li key={item.id}>
    {item.name}&nbsp;
   <b> {item.calories}</b></li>)
return (<ol>{listItems}</ol>)
}
export default List    
