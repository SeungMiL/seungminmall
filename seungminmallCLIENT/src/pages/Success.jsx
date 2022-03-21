import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { userRequest } from "../requestMethod";
import { Link } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  console.log(location);
  const data = location.state.data;
  const cart = location.state.cart;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(location.state.created);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
      } catch (err) {}
    };
    data && createOrder();
  }, [cart, data, currentUser]);

  function handleClick(e) {
    window.location.replace("/");
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        whiteSpace: "pre-wrap"
      }}
    >
      <img
        src="https://user-images.githubusercontent.com/89256060/159132430-8db5ddf6-7da2-42c9-9081-278262c2d118.png"
        alt="로고"
        style={{
          marginBottom: "20px",
        }}
      />
      {orderId
        ? `주문이 완료되었습니다. 
주문번호는 ${orderId} 입니다`
        : `주문이 완료되었으나 결제대기중 입니다`}

      <button onClick={handleClick} style={{ padding: 10, marginTop: 20 }}>
        홈페이지 돌아가기
      </button>
    </div>
  );
};

export default Success;

// import { useLocation } from 'react-router-dom'

// const Success = () => {

//   const location = useLocation()

//   console.log(location)

//   return (
//     <div>success</div>
//   )
// }

// export default Success
