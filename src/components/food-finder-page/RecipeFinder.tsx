import React from "react";
import ResultsSection from "./ResultSection/ResultsSection";
import TabBar from "./TabBar/TabBar";

const RecipeFinder: React.FC<{}> = () => {
    return <div>
        <TabBar />
        <ResultsSection show={false} />
    </div>;
};

export default RecipeFinder;