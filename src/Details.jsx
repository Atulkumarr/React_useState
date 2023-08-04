import { useState } from "react"

export function Details(){
    
    //item
    const[item, change_item] = useState('') 
    
    function input_item(e) {
        let item_value = e.target.value
        change_item(item_value)
      }

    // Price
    const[price, change_price] = useState('')
    
    function input_price(e) {
        let item_value = e.target.value
        change_price(item_value)
      }

    // Quantity
    const[quantity_1, quantity_2] = useState(0)


    function less(){
        quantity_2(quantity_1 - 1)
    
    }
  
    function add(){
        quantity_2(quantity_1 + 1)
    }


return(
    <div className="master">

        <div className="show_details">
          <h1>Item: {item}</h1>
          <h1>Price: {price}</h1>
          <h1>Product Left: {quantity_1}</h1>
        </div>

        <div className="put_Details">
                        
            <input onKeyDown={input_item} type="text" placeholder="Item"/>
            <input  onKeyDown={input_price}  type="Number" placeholder="Price"/>


            <div className="quantity">
               <button  onClick={less}> - </button>
               <h2>{quantity_1}</h2>
               <button onClick={add}> + </button>
            </div>

        </div>

    </div>
)

}
