import React from "react";
import { styled } from "styled-components";
const NO_IMAGE =
  "https://bestlifeonline.com/wp-content/uploads/sites/3/2022/12/small-dog-breeds.jpg?quality=82&strip=1&resize=800%2C450";

const ItemBox = styled.div`
  grid-template-columns: 1fr;

  display: grid;

  grid-auto-columns: 1fr;
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  -ms-grid-columns: 12.5rem;
  img {
    aspect-ratio: 1/1;
    width: 100%;
    border-radius: 0.5rem;
    object-fit: cover;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    font-size: 2rem;
    line-height: 1.2;
    font-weight: 500;
    letter-spacing: -0.021em;
    text-transform: uppercase;
  }
  p {
    text-transform: uppercase;
    margin-bottom: 0rem;
    font-size: 1rem;
  }
`;

const Contents = ({ data }) => {
  const breed = data.breeds ? data.breeds[0] : null;
  return (
    <ItemBox>
      <img src={data.url ? data.url : NO_IMAGE}></img>
      <Description>
        <h2>{breed ? breed.name : "Anonymous Dog"}</h2>
        <p>{breed ? breed.bred_for : "Bred for unknown"}</p>
        {/* <h2>{data.breeds[0].name || ""}</h2>
        <p>{data.breeds[0].bred_for || ""}</p> */}
      </Description>
      <p>{breed ? breed.breed_group : "Breed group unknown"}</p>
      <h6>{breed ? breed.temperament : "Temperament unknown "}</h6>
    </ItemBox>
  );
};

export default Contents;
