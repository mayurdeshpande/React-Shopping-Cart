import react from 'react';
import data from './data.json';
import ProductList from '../../components/product/list';
import { useNavigate } from "react-router-dom";

const Dashboard = () =>{
    let navigate = useNavigate(); 
    const addToCart=(item, buyNow = false)=>{
        let products = localStorage.getItem('products')? JSON.parse(localStorage.getItem('products')) : []
        let obj = products.find(o => o.id === item.id);
       let newArr = [];
        if(obj){
             newArr = products.map(ob => {
                if (ob.id === item.id) {
                  return {...ob, quantity: ob.quantity + 1};
                }
                return ob;
              });
            }else{
                item.quantity = 1
                products.push(item);
              newArr = products;
            }
            localStorage.setItem('products', JSON.stringify(newArr));
            alert('Item added to cart successfully!')
            if(buyNow){
                navigate('/cart');
            }
    }
return (
    <div>
        <ProductList addToCart={addToCart} products={data.products} isCart={false}/>
    </div>
)
}

export default Dashboard;