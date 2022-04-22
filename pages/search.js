import { Combobox } from "@headlessui/react";
import { useState, useEffect } from "react";

export default function Search() {
  const [launchesData, setLaunchesData] = useState([]);
  const [searchLaunchesData, setSearchLaunchesData] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const data = [
      {
        flight_number: 2,
        launch_site: {
          site_id: "kwajalein_atoll",
          site_name: "Kwajalein Atoll",
        },
        rocket: { rocket_id: "falcon1", rocket_name: "Falcon 1" },
      },
      {
        flight_number: 3,
        launch_site: { site_id: "ccafs_slc_40", site_name: "CCAFS SLC 40" },
        rocket: { rocket_id: "falcon9", rocket_name: "Falcon 9" },
      },
      {
        flight_number: 4,
        launch_site: { site_id: "dawdw_23", site_name: "wdas 23" },
        rocket: { rocket_id: "eagle25", rocket_name: "Eagle 25" },
      },
      {
        flight_number: 5,
        launch_site: { site_id: "xxxx_44", site_name: "XXXX 44" },
        rocket: { rocket_id: "spaceX", rocket_name: "Space X" },
      },
    ];
    setLaunchesData(data);
    setSearchLaunchesData(data);
  }, []);
  const handleSearch = () => {
    const newData = searchLaunchesData.filter((x) =>
      x.launch_site.site_id.toLowerCase().includes(query.toLowerCase())
    );
    setLaunchesData(newData);
  };
  return (
    <>
      <table className="table-auto bg-red-300">
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                placeholder="Search"
                onChange={(e) => setQuery(e.target.value)}
              />
            </td>
            <td>
              <button className="btn button" onClick={handleSearch}>
                Search
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="table-auto bg-gray-200">
        <thead>
          <tr>
            <th>flight_number</th>
            <th>launch_site</th>
            <th>rocket</th>
          </tr>
        </thead>
        <tbody>
          {launchesData && launchesData.length > 0 ? (
            launchesData.map((launch, id) => (
              <tr key={id}>
                <td>{launch.flight_number}</td>
                <td>{launch.launch_site.site_name}</td>
                <td>{launch.rocket.rocket_name}</td>
              </tr>
            ))
          ) : (
            <p>No Data</p>
          )}
        </tbody>
      </table>
    </>
  );
}
