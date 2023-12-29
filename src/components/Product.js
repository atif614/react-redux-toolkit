import {useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";
import { add } from '../store/cartSlice';
import {getProduct}  from "../store/productSlice";

const Product = () => {
    // const [products,setProducts]=useState([]);

    const dispatch = useDispatch();
    const {data:products} = useSelector(state=>state.products);
    console.log(products)
    useEffect(() => {
          dispatch(getProduct());     
            // console.log("useEffect");
            // fetch('https://fakestoreapi.com/products')
            //     .then((products) => products.json())
            //     .then((result) => { setProducts(result) });
            //eslint-disable-next-line
    }, []);

    const addToCart = (product) => {
        // dispatch an add action
        dispatch(add(product));
    }
    const cards = products.map((product) => {
        return <div key={product.id} className="col-md-3" style={{ marginBottom: '10px' }}>
            <Card className="h-100">
                <div className="text-center">
                    <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        INR:{product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer style={{ background: 'white' }}>
                    <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    })
    return (
        <>
            <h1>Product Dashboard</h1>
            <div className="row">
                {cards}
            </div>
        </>
    )
}

export default Product;