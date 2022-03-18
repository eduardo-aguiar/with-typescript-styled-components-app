import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import fetcher from "../../utils/fetcher";

interface ISunSigns {
  signs: string[];
}

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  button {
    padding: 1rem 0.4rem;
    font-size: 1.5rem;
    text-transform: capitalize;
  }
`;

const Home: React.FunctionComponent<ISunSigns> = ({ signs }) => {
  const [useSelectedSign, setUseSelectedSign] = useState();
  const handleClick = (e: any) => {
    setUseSelectedSign(e.target.innerHTML);
  };

  return (
    <>
      <h1>Horoscope Home</h1>
      <StyledDiv>
        {signs.map((sign) => (
          <Link href={`/horoscope/${sign}`}>
            <button onClick={handleClick}>{sign}</button>
          </Link>
        ))}
      </StyledDiv>
    </>
  );
};

export const getStaticProps = async () => {
  const signs = await fetcher<ISunSigns>(
    "http://sandipbgt.com/theastrologer/api/sunsigns/"
  );

  return {
    props: {
      signs,
    },
  };
};

export default Home;
