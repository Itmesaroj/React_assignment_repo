// FootballData.js
import  { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

const FootballData = () => {
  const dispatch = useDispatch();
  const {  footballMatches } = useSelector((state) => state.footballMatches);

  async function fetchDataFun(url) {
    try {
      dispatch({ type: "FETCH_FOOTBALL_MATCHES_REQUEST" });
      const data = await fetch(url);
      const response = await data.json();
      dispatch({ type: "FETCH_FOOTBALL_MATCHES_SUCCESS", payload: response.data });
      
      dispatch({ type: "FETCH_FOOTBALL_MATCHES_REQUEST" });
    }
     catch (error) {
      dispatch({ type: "FETCH_FOOTBALL_MATCHES_FAILURE" });
      dispatch({ type: "FETCH_FOOTBALL_MATCHES_REQUEST" });
      console.log(error);
    }
  }

  useEffect(() => {
    fetchDataFun('https://jsonmock.hackerrank.com/api/football_matches?page=2');
  }, []);


  return (
    <>
     
    
        <ul>
          {footballMatches.map((match, index) => (
            <li key={index}>
              <h3>Cometition:-{match.competition}</h3>
              <p>Round:-{match.round}</p>
              <p>team1:-{match.team1}</p>
              <p>team2:-{match.team2}</p>
            </li>
          ))}
        </ul>
    
    </>
  );
};

export default FootballData;
