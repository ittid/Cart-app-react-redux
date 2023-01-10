import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { deleteFromCart } from "../rtk/slices/cart-slice";
import { clear } from "../rtk/slices/cart-slice";
import { useSelector, useDispatch } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const calcTotal = () => {
    return cart.reduce((acc, product) => {
      return acc + Number(product.price) * product.quantity;
    }, 0);
  };

  return (
    <>
      <Container>
        <div style={{ margin: "6em 0 3em" }}>
          <div className="blabla center">
            <h1>Welcome To Cart Area</h1>
            <p>
              <Button
                variant="warning"
                onClick={() => {
                  console.log(dispatch(clear()));
                }}
              >
                Clear Cart
              </Button>
            </p>
          </div>

          <Table striped bordered hover size="sm" className="mt-4">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product, index) => {
                return (
                  <tr key={index}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>
                      <Image
                        src={product.images}
                        alt={product.title}
                        style={{
                          height: "70px",
                          padding: "4px",
                          backgroundColor: "#FFF",
                        }}
                      ></Image>
                    </td>
                    <td>${product.price}</td>
                    <td>{product.quantity}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => {
                          console.log(dispatch(deleteFromCart(product.id)));
                        }}
                      >
                        delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <strong>Total Price: {calcTotal().toFixed(2)}$</strong>
        </div>
      </Container>
    </>
  );
}

export default Cart;
