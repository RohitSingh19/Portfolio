import React from "react";
import Typewriter from "typewriter-effect";
import { Profession } from "../../assets/portfolio.model";

interface TypeProps {
  items: Profession[];
}

const Type : React.FC<TypeProps> = ({items}) => {
  return (
    <Typewriter
      options={{
        strings: [
          ...items.map((profession) => profession.value)
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 82,
      }}
    />
  );
}

export default Type;