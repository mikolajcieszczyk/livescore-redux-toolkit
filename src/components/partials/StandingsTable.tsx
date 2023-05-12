import React from "react";
import { StandingsData, StandingsEntry } from "types";

interface IProps {
  data: StandingsData;
}

export default function StandingsTable({ data }: IProps) {
  const standings = data.league;

  const renderTable = () => {
    return (
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    #
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Team name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Played
                  </th>
                  <th scope="col" className="px-6 py-4">
                    W
                  </th>
                  <th scope="col" className="px-6 py-4">
                    D
                  </th>
                  <th scope="col" className="px-6 py-4">
                    L
                  </th>
                  <th scope="col" className="px-6 py-4">
                    PTS
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Last 5
                  </th>
                </tr>
              </thead>
              <tbody>
                {standings.standings[0].map((team: StandingsEntry, i) => {
                  return (
                    <tr
                      className="border-b dark:border-neutral-500"
                      key={team.team.name}
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {team.rank}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {team.team.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {team.all.played}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {team.all.win}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {team.all.win}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {team.all.lose}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {team.points}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {team.form}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <img
          style={{ display: "inline" }}
          src={standings.flag}
          alt={`${standings.country} flag`}
          width={18}
        />{" "}
        &nbsp;
        {standings.country}
      </div>
      <div className="flex items-center">
        <img
          style={{ display: "inline" }}
          src={standings.logo}
          alt={`${standings?.name} logo`}
          width={18}
        />{" "}
        &nbsp;
        {standings.name}
      </div>
      <div className="flex items-center">
        <span className="font-bold">Season:&nbsp;</span>
        <span>{standings.season}</span>
      </div>

      {renderTable()}
    </div>
  );
}
