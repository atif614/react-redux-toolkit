import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // console.log("useEffect");
        fetch('https://fakestoreapi.com/products')
            .then((products) => products.json())
            .then((result) => { setProducts(result) });
    }, [])
    const cards = products.map((product) => {
        return <div key={product.id} className="col-md-3" style={{ marginBottom: '10px' }}>
            <Card  className="h-100">
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
                        <Button variant="primary">Add to Cart</Button>
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