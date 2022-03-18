import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";


const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })}

`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}

`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}

`

const Option = styled.option`

`

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>상품 옵션별정렬:</FilterText>
          <Select>
              <Option disabled selected>선택옵션</Option>
              <Option>화이트</Option>
              <Option>블랙</Option>
              <Option>레드</Option>
              <Option>블루</Option>
              <Option>옐로우</Option>
              <Option>그린</Option>
          </Select>
          <Select>
              <Option disabled selected>사이즈</Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>최신/가격순 정렬:</FilterText>
          <Select>
              <Option selected>최신</Option>
              <Option>높은 가격순</Option>
              <Option>낮은 가격순</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;