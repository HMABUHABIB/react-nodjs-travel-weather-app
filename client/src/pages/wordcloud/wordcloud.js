import React, { useEffect, useState } from "react";
import Card from "../../components/custom-card/custom-card.component";
import ReactWordcloud from "react-wordcloud";
import { Resizable } from "re-resizable";

const resizeStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
  borderRadius: "1rem",
};

const options = {
  colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
  enableTooltip: true,
  deterministic: false,
  fontFamily: "impact",
  fontSizes: [5, 60],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 1,
  rotations: 3,
  rotationAngles: [0, 90],
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 1000,
};

const Wordcloud = () => {
  const [citis, updateCityList] = useState(
    JSON.parse(localStorage.getItem("wordsList"))
  );

  useEffect(() => {
    updateCityList(JSON.parse(localStorage.getItem("wordsList")));
  }, []);

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
          <ReactWordcloud options={options} words={citis} />
        </div>
      </Resizable>
    </Card>
  );
};

export default Wordcloud;
