import React from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import NavbarComp from "../components/NavbarComp";
import AnnouncementComp from "../components/AnnouncementComp";
import FooterComp from "../components/FooterComp";
import NewsletterComp from "../components/NewsletterComp";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 46px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 88vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 52px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Descr = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span``;

const FilterContainer = styled.div``;

const Filter = styled.div``;

const FilterHeader = styled.span``;

const FilterColor = styled.div``;

const FilterSize = styled.select``;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div``;

const AmountWrap = styled.div``;

const Amount = styled.span``;

const Button = styled.button``;
// add it to github
const ProductPage = () => {
  return (
    <Container>
      <AnnouncementComp />
      <NavbarComp />
      <Wrapper>
        <ImgContainer>
          <Image src="https://m.media-amazon.com/images/I/51a4RogKGnL._AC_UL1023_.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title> Pants</Title>
          <Descr>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint harum
            dolore veritatis aut nihil voluptatibus iure at tempora quis saepe.
          </Descr>
          <Price>$ 33</Price>
          <FilterContainer>
            <Filter>
              <FilterHeader>Color</FilterHeader>
              <FilterColor color="red" />
              <FilterColor color="green" />
              <FilterColor color="black" />
            </Filter>
            <Filter>
              <FilterHeader>Size</FilterHeader>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountWrap>
              <RemoveIcon />
              <Amount>1</Amount>
              <AddIcon />
            </AmountWrap>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsletterComp />
      <FooterComp />
    </Container>
  );
};

export default ProductPage;
