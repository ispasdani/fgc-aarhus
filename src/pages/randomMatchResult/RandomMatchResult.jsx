import { useEffect, useState } from "react";
import { ResultLoader } from "../../components/resultLoader/ResultLoader";
import { SuggestedMatch } from "../../components/suggestedMatch/SuggestedMatch";
import "./randomMatchResult.css";

export const RandomMatchResult = () => {
  const [loadingResult, setLoadingResult] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadingResult(true);
    }, 3000);
  });

  return (
    <div className="random-match-result">
      {loadingResult ? <SuggestedMatch /> : <ResultLoader />}
    </div>
  );
};
