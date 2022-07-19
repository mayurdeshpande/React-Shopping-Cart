import React from 'react';
import react from 'react';

const ProductList = (props) => {
    const { products, isCart } = props;
    return (
        <div className='container'>
            {products.length && products.map((item) => <div className='product-main-div' key={item.id}>
                <img className='product-img' src={process.env.PUBLIC_URL + item.url} />
                <div>
                    <div>{item.title}</div>
                    <div>₹ {item.price} /-</div>
                    {isCart?
                        <div>
                            <span><button className='btn-secondary' onClick={()=>props.addAndRemoveItem(item)}>-</button></span>
                            <span>{item.quantity}</span>
                             <span><button className='btn-secondary'>+</button></span>
                        </div> :
                        <div>
                            <button className='btn-primary' onClick={() => props.addToCart(item)}>Add to Cart</button>
                            <button className='btn-primary' onClick={() => props.addToCart(item, true)}>Buy Now</button>
                        </div>
                    }
                </div>
            </div>)
            }
            <div>

            </div>
        </div>
    )
}

export default ProductList;