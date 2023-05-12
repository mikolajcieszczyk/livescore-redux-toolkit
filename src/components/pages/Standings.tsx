import { standingsMock } from "components/mocks/standings";
import StandingsTable from "components/partials/StandingsTable";
import ErrorMessage from "components/partials/atoms/ErrorMessage";
import LoadingSpinner from "components/partials/atoms/LoadingSpinner";
import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "redux/hooks/hooks";
import { fetchStandings } from "redux/slices/standingsSlice";
import { IStandingsRequest, StandingsData, StandingsResponse } from "types";

export default function Standings() {
  const {
    standings: { loading, data, error },
  }: { standings: IStandingsRequest } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(fetchStandings());
    console.log(data);
  }, []);

  const renderStandings = () => {
    // if (loading) return <LoadingSpinner />;
    // if (data?.response[0])
    //   return <StandingsTable data={data?.response[0] ?? {}} />;
    // if (error)
    //   return (
    //     <ErrorMessage title="Error" message={"Something wrong happened"} />
    //   );
    return <StandingsTable data={standingsMock.response[0]} />;
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Standings</h1>
      {renderStandings()}
    </div>
  );
}
