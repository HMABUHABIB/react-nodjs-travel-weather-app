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

const Statistics = () => {
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
          <ReactWordcloud words={citis} />
        </div>
      </Resizable>
    </Card>
  );
};

export default Statistics;
