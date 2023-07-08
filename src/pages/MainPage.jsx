import { styled } from "styled-components";
import Contents from "../components/Contents";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import MockSet from "../components/MockSet";
import {
  NavBar,
  ContentHeading,
  ContentsContainer,
  LoadMore,
} from "../styles/MainPageStyle";

const MainPage = () => {
  const [data, setData] = useState([]);
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [grid, setGrid] = useState(true);
  //무한스크롤
  const loader = useRef(null);
  //
  //axios
  const onLoadMoreHandler = () => {
    setLoading(true);
    axios
      .get(
        `https://api.thedogapi.com/v1/images/search?limit=10&api_key=${API_KEY}&page=${page}&order=ASC`
      )
      .then((res) => {
        console.log("axios동기화중");
        setData((prev) => [...prev, ...res.data]);
        setPage((prev) => prev + 1);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //최초 로드시 작동
  useEffect(() => {
    onLoadMoreHandler();
  }, []);

  useEffect(() => {
    // Intersection Observer를 설정
    let options = {
      root: null, // viewport를 기준으로 함
      rootMargin: "20px",
      threshold: 1.0, // target이 viewport의 100% 경계선을 넘어가면 콜백 실행
    };

    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [loading]);

  //무한스크롤 감지시 작동.
  const handleObserver = (info) => {
    console.log(info); //이벤트 정보 출력
    const target = info[0];
    if (target.isIntersecting && !loading) {
      onLoadMoreHandler();
    }
  };

  return (
    <div>
      <NavBar>✦nube flow</NavBar>
      <ContentHeading>
        <p>Latest Posts</p>
        <button
          onClick={() => {
            setGrid(!grid);
          }}
        >
          Ghance View ♲
        </button>
      </ContentHeading>
      <ContentsContainer grid={grid ? true : false}>
        {data.map((data) => {
          return <Contents key={data.id} data={data} />;
        })}
        {loading ? <MockSet /> : null}
      </ContentsContainer>
      <LoadMore ref={loader} onClick={onLoadMoreHandler}>
        {loading ? "로딩중" : ""}
      </LoadMore>
    </div>
  );
};

export default MainPage;
