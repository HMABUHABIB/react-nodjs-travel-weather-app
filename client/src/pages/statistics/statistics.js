import React from "react";
import Card from "../../components/custom-card/custom-card.component";
import ReactWordcloud from "react-wordcloud";
import { Resizable } from "re-resizable";
const words = [
  {
    text: "told",
    value: 1,
  },
  {
    text: "mistake",
    value: 1,
  },
  {
    text: "thought",
    value: 1,
  },
  {
    text: "bad",
    value: 1,
  },
];

const resizeStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
  borderRadius: "1rem",
};

const Statistics = () => {
  return (
    <Card>
      <Resizable
        defaultSize={{
          width: 600,
          height: 300,
        }}
        style={resizeStyle}
      >
        <div style={{ width: "100%", height: "100%" }}>
          <ReactWordcloud words={words} />
        </div>
      </Resizable>
    </Card>
  );
};

export default Statistics;
