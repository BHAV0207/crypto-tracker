import { HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
      <button variant={"unstyled"} color={"white"}>
        <Link to="/">Home</Link>
      </button>
      <button varient={"unstyled"} color={"white"}>
        <Link to="/exchanges">Exchanges</Link>
      </button>
      <button varient={"unstyled"} color={"white"}>
        <Link to="/coins">Coins</Link>
      </button>
    </HStack>
  );
}

export default Header;
