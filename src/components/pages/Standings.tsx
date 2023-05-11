import StandingsTable from "components/partials/StandingsTable";
import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "redux/hooks/hooks";
import { fetchStandings } from "redux/slices/standingsSlice";
import { StandingsData } from "types";

export default function Standings() {
  const standings = useAppSelector((state) => state.standings);
  const dispatch = useAppDispatch();
  const data = standings.data?.response[0];

  useEffect(() => {
    dispatch(fetchStandings());
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold">Standings</h1>
      <StandingsTable data={data ?? ({} as StandingsData)} />
    </div>
  );
}
