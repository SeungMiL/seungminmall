import styled from "styled-components"

const Container =styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
        전체 무료배송 및 전상품 7% 할인
    </Container>
  )
}

export default Announcement