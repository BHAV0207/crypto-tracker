import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Container, HStack } from "@chakra-ui/react";
import Loader from "./Loader";
import ExchangeCard from "./ExchangeCard";
function Exchanges() {
  let [exchanges, setExchanges] = useState([]);
  let [loading, setLoading] = useState(true);

  const fetchExchanges = async () => {
    const { data } = await axios.get(`${server}/exchanges`);
    setExchanges(data);
    setLoading(false);
    console.log(data);
  };

  useEffect(() => {
    fetchExchanges();
  }, []);

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          <HStack wrap={"wrap"}>
            {exchanges.map((i) => (
              <ExchangeCard
                id={i.id}
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              ></ExchangeCard>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
}

export default Exchanges;
