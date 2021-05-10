import React, { useEffect, useState } from "react";
import CustomCard from "../../components/custom-card/custom-card.component";
import "./wordcloud.styles.scss";
import ReactWordcloud from "react-wordcloud";
import { Resizable } from "re-resizable";

/**
 * ReactWordcloud: Imported component from "react-wordcloud" cloud used to create the word cloud.
 * Resizable : Imported component from "re-resizable" used to add the resizable function to the ReactWordcloud component.
 */

// resizeStyle: props to be pass to Resizable component
const resizeStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
  borderRadius: "1rem",
};

// options: props to be pass to ReactWordcloud component
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

/**
 *
 * Wordcloud: React component to be render in Wordcloud page
 * The component used to import resizeStyle and ReactWordcloud component
 *
 */

const Wordcloud = () => {
  /**
   * citis: is the State for list of the cities that been imported from the localStorage
   */

  const [cities, updateCityList] = useState(
    JSON.parse(localStorage.getItem("wordsList"))
  );

  /**
   *
   * useEffect: used to get the updated list from localStorage then update cities array
   */

  useEffect(() => {
    updateCityList(JSON.parse(localStorage.getItem("wordsList")));
  }, []);

  return (
    <CustomCard>
      <Resizable
        defaultSize={{
          width: 600,
          height: 300,
        }}
        style={resizeStyle}
      >
        <div className="react-word-cloud">
          <ReactWordcloud options={options} words={cities} />
        </div>
      </Resizable>
    </CustomCard>
  );
};

export default Wordcloud;
