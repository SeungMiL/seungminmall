import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
    
`
const Filter = styled.div`
    
`
const FilterTitle = styled.div`
    
`
const FilterColor = styled.div`
    
`
const FilterSize = styled.div`
    
`
const FilterSizeOption = styled.div`
    
`

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="../product1M.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>VALENTINE'S DAY 22 타이다이 후디 와이드핏 레드</Title>
          <Desc>
            발렌타인 데이 22 레드, 핑크, 화이트 미디엄 플리스 소재의 타이다이
            후디 와이드 핏. 이 제품은 화학 비료, 살충제 또는 GMO 없이 재배된
            100% 유기농 면을 사용합니다. 이 재배 방법은 평균적으로 일반 면화보다
            절반의 물을 필요로 하고 토양 품질을 개선하며 생태계와 생물 다양성을
            존중합니다. 유기농 면 재배는 재배자들에게 더 나은 보수와 노동 조건을
            보장합니다.
          </Desc>
          <Price>$ 30</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>선택옵션</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="red" />
            </Filter>
            <Filter>
              <FilterTitle>사이즈</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
