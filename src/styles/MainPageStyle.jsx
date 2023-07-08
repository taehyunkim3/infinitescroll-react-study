import { styled } from "styled-components";

export const NavBar = styled.div`
  padding: 1rem 0;
  font-size: 1.5rem;
  font-align: left;
`;

export const ContentHeading = styled.div`
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 4rem;
  }
  button {
    font-size: 0.8rem;
    border: 1px solid gray;
    border-radius: 0.5rem;
    height: 2rem;
    width: 9rem;
  }
`;

export const ContentsContainer = styled.div`
  grid-template-columns: ${(props) => (props.grid ? "1fr 1fr" : "1fr")};
  display: grid;
  width: 100%;
  grid-auto-columns: 1fr;
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  grid-template-rows: auto;
`;

export const LoadMore = styled.h2`
  width: 100%;
  font-size: 3rem;
  cursor: pointer;
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 10rem;
`;
