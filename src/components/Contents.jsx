import React from "react";
import { styled } from "styled-components";

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
  console.log(data);
  return (
    <ItemBox>
      <img src={data.url}></img>
      <Description>
        <h2>{data.breeds[0].name}</h2>
        <p>{data.breeds[0].bred_for}</p>
      </Description>
      <p>{data.breeds[0].breed_group}</p>
      <h6>{data.breeds[0].temperament}</h6>
    </ItemBox>
  );
};

export default Contents;
