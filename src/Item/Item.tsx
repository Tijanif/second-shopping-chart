import Button from '@material-ui/core/Button'
import React from 'react'

// Types
import { CartItemType } from '../App'

// Styles
import { Wrapper } from './Item.style'

type itemProps = {
 item: CartItemType
 handleAddToCart: (clickedItem: CartItemType) => void
}

export const Item: React.FC<itemProps> = ({item, handleAddToCart}) => (

 <Wrapper>
  <img src={item.image} alt={item.title} />
  <div>
   <h3>{item.title}</h3>
   <p>{item.description}</p>
   <h3>{item.price}</h3>
  </div>
  <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
 </Wrapper>
)