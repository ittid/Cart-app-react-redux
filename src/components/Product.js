import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/products-slice";
import { addToCart } from "../rtk/slices/cart-slice";

function Product() {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <Container>
        <Row style={{ margin: "7em 0 3em" }}>
          {products.map((product, index) => {
            return (
              <Col key={product.id}>
                <Card
                  style={{ width: "18rem", height: "500px", margin: "0 0 2em" }}
                >
                  <Card.Img variant="top" src={product.images} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>${product.price}</Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => {
                        console.log(dispatch(addToCart(product)));
                      }}
                    >
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Product;
