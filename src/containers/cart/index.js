import React from 'react';
import react, {useEffect, useState} from 'react';
import ProductList from '../../components/product/list';

const Cart = () =>{
    const [products, setProducts] = useState([]);
    const [totalPrice, setPrice] = useState(0);

    useEffect(()=>{
       const products = JSON.parse(localStorage.getItem('products'))
       if(products){
       var price = products.reduce((total, object) => {
        return total + (object.price * object.quantity);
      }, 0);
      setProducts(JSON.parse(localStorage.getItem('products')));
      setPrice(price);
    }

    }, [])

    const buyNow=()=>{
        alert('Payment Successful');
    }

    const addAndRemoveItem=(item)=>{
        let products = localStorage.getItem('products')? JSON.parse(localStorage.getItem('products')) : []
        let newArr = [];
        if(item.quantity > 1){
              newArr = products.map((ob, index) => {
                 if (ob.id === item.id) {
                        return {...ob, quantity: ob.quantity - 1};
                }
                return ob;
            });
            localStorage.setItem('products', JSON.stringify(newArr));
        }
            else{
                const index = products.findIndex(object => {
                    return object.id === item.id;
                  });
                   products.splice(index, 1);
                   localStorage.setItem('products', JSON.stringify(products));
               }
            window.location.reload();
    }

return (
    <React.Fragment>
        <div className='cartTotalDiv'>
            <span>Total: ₹ {totalPrice} /-</span>
            <button className='btn-primary' onClick={buyNow}>Buy Now</button>
        </div>
        <ProductList products={products} addAndRemoveItem={addAndRemoveItem} isCart={true}/>
    </React.Fragment>
)
}

export default Cart;