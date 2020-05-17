import React from "react"
import './CartItem.scss';

const CartItem = ({ product, total, visibilityConfig, onRemove, onAddOne, onRemoveOne }) => {
  console.log(product)
  const  {
    name,
    size,
    price,
    installments,
    image
  } = product
  const {
    removeButton: removeButtonVisibility,
    size: sizeVisibility,
    quantity: quantityVisibility,
  } = visibilityConfig

  return (
      <div className="cart-item">
        <div className="cart-item__media">
          <img src={image} alt="foto em miniatura do produto escolhido"/>
          { removeButtonVisibility &&
            <button type="button"
              onClick={onRemove}
              name="remover item"
              className="cart-item__button-remove">
            Remover item
          </button>}
        </div>
        <div className="cart-item__description">
          <div className="cart-item__description-details">
            <div className="cart-item__description-title">
              <h4 className="cart-item__name">{name}</h4>
              { sizeVisibility && <p className="cart-item__size">Tam.: {size}</p> }
            </div>
            <div className="cart-item__description-price">
              <p className="cart-item__value">
                {price}
              </p>
              <p className="cart-item__splited-payment">{installments}</p>
            </div>
          </div>
          { quantityVisibility && <div className="cart-item__quantity">
            <button onClick={onRemoveOne} className="cart-item__quantity-button"> - </button>
            <span className="cart-item__quantity-value">{total}</span>
            <button onClick={onAddOne} className="cart-item__quantity-button">+</button>
          </div> }
        </div>
      </div>
  )
}

CartItem.defaultProps = {
  product: {
    name:"<no prop title>",
    image: '',
    style:"<no prop style>",
    code_color:"<no prop code_color>",
    color_slug:"<no prop color_slug>",
    color:"<no prop color_slug>",
    price:"<no prop price>",
    installments:"<no prop installments>",
    size: "<no prop size>",
    sku: "<no prop sku>"
  },
  total: '<no prop total>',
  visibilityConfig: {
    removeButton: true,
    size: true,
    quantity: true,
  },
  onRemove: () => { alert('no fn on prop {onRemove}')},
  onAddOne: () => { alert('no fn on prop {onAddOne}')},
  onRemoveOne: () => { alert('no fn on prop {onRemoveOne}')}
}

export default CartItem;
