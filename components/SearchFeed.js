import React from "react";
import SearchRow from "./SearchRow";

function SearchFeed({ launchesData, launchpads }) {
  // const launchToRender = launches.filter((val) => {
  //   if (searchTerm === "" || searchTerm === "Any") {
  //     return val;
  //   } else if (
  //     val.flight_number.toString().includes(searchTerm.toLowerCase())
  //   ) {
  //     return val;
  //   } else if (
  //     val.rocket.rocket_name.toLowerCase().includes(searchTerm.toLowerCase())
  //   ) {
  //     return val;
  //   } else if (dropdownLaunchPad === "" || dropdownLaunchPad === "Any") {
  //     return val;
  //   } else if (
  //     val.launch_site.site_name.toLowerCase() ===
  //     dropdownLaunchPad.toLowerCase()
  //   ) {
  //     return val;
  //   }
  // });

  return (
    <div>
      {launchesData.map((launch, key) => (
        <SearchRow
          key={key}
          flight_number={launch.flight_number}
          launch_date_local={launch.launch_date_local}
          rocket={launch.rocket}
          launch_site={launch.launch_site}
          land_success={launch.land_success}
          payloads={launch.payloads}
          links={launch.links}
          launchpads={launchpads}
        />
      ))}
    </div>
  );
}

export default SearchFeed;
