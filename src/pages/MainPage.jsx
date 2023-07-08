import { styled } from "styled-components";
import Contents from "../components/Contents";
import { useEffect, useState } from "react";
import axios from "axios";

const NavBar = styled.div`
  padding: 1rem 0;
  font-size: 1.5rem;
  font-align: left;
`;

const ContentHeading = styled.div`
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

const ContentsContainer = styled.div`
  grid-template-columns: 1fr 1fr;
  display: grid;
  width: 100%;
  grid-auto-columns: 1fr;
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  grid-template-rows: auto;
`;

const LoadMore = styled.h2`
  width: 100%;
  font-size: 3rem;
  cursor: pointer;
  text-align: center;
`;

const MainPage = () => {
  const [data, setData] = useState([]);
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [page, setPage] = useState(0);

  const onLoadMoreHandler = () => {
    setPage((prev) => prev + 1);

    axios
      .get(
        `https://api.thedogapi.com/v1/images/search?limit=10&api_key=${API_KEY}&page=${page}&order=ASC`
      )
      .then((res) => setData([...data, ...res.data]));
  };

  useEffect(() => {
    axios
      .get(
        `https://api.thedogapi.com/v1/images/search?limit=10&api_key=${API_KEY}&page=${page}&order=ASC`
      )
      .then((res) => setData(res.data));

    return () => {};
  }, []);

  return (
    <div>
      <NavBar>✦nube flow</NavBar>
      <ContentHeading>
        <p>Latest Posts</p>
        <button>Ghance View ♲</button>
      </ContentHeading>
      <ContentsContainer>
        {data.map((info, i) => {
          return <Contents key={i} data={info} />;
        })}
      </ContentsContainer>
      <LoadMore onClick={onLoadMoreHandler}>LoadMore</LoadMore>
    </div>
  );
};

export default MainPage;
