import { useState } from "react";
import Moment from "react-moment";

import ImageWithFallback from "../components/ImageWithFallback";

function SearchRow({
  flight_number,
  launch_date_local,
  rocket,
  launch_site,
  payloads,
  land_success,
  links,
  launchpads,
}) {
  const [fallback] = useState(
    "https://spacexpatchlist.space/thumbs/spacex_f1_001_first_flight.png"
  );

  const redditCampain = links.reddit_campaign;
  const redditLaunch = links.reddit_launch;
  const redditRecovery = links.reddit_recovery;
  const redditMedia = links.reddit_media;
  const pressKit = links.presskit;
  const article = links.article_link;
  const video = links.video_link;

  const openNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="flex p-4 gap-4 border-b border-slate-700 md:py-6 bg-slate-900">
      <div className="text-left w-[100px]">
        <ImageWithFallback
          src={links.mission_patch}
          objectFit="contain"
          fallbackSrc={fallback}
          alt="thumbnail"
          height={70}
          width={70}
        />
      </div>
      <div className="flex-grow">
        <div>
          <h4 className="barlow text-white">
            {rocket.rocket_name} -{" "}
            {payloads.map((payload) => payload.payload_id)} -{" "}
            {!land_success && (
              <span className="text-red-400">Failed Mission</span>
            )}
          </h4>
          <p className="barlow mt-2 text-gray-300 text-xs md:text-sm md:w-4/5">
            Launched on{" "}
            <Moment format="Do MMM YYYY">{launch_date_local}</Moment> at{" "}
            <Moment format="h:mm a">{launch_date_local}</Moment> from{" "}
            {launchpads.map(
              (pad) => pad.id === launch_site.site_id && pad.full_name
            )}
          </p>
        </div>
        <div className="space-x-2 lg:space-x-4 space-y-2 mt-2 md:mt-8">
          {!redditCampain ||
            (redditCampain !== "" && (
              <button
                onClick={() => openNewTab(redditCampain)}
                className="barlow-condensed border p-1 md:px-4 rounded-sm text-sm text-gray-400 border-gray-400 hover:border-white hover:text-white"
              >
                Reddit Campaign
              </button>
            ))}

          {!redditLaunch ||
            (redditLaunch !== "" && (
              <button
                onClick={() => openNewTab(redditLaunch)}
                className="barlow-condensed border p-1 md:px-4 rounded-sm text-sm text-gray-400 border-gray-400 hover:border-white hover:text-white"
              >
                Reddit Launch
              </button>
            ))}
          {!redditRecovery ||
            (redditRecovery !== "" && (
              <button
                onClick={() => openNewTab(redditRecovery)}
                className="barlow-condensed border p-1 md:px-4 rounded-sm text-sm text-gray-400 border-gray-400 hover:border-white hover:text-white"
              >
                Reddit Recovery
              </button>
            ))}
          {!redditMedia ||
            (redditMedia !== "" && (
              <button
                onClick={() => openNewTab(redditMedia)}
                className="barlow-condensed border p-1 md:px-4 rounded-sm text-sm text-gray-400 border-gray-400 hover:border-white hover:text-white"
              >
                Reddit Media
              </button>
            ))}
          {!pressKit ||
            (pressKit !== "" && (
              <button
                onClick={() => openNewTab(pressKit)}
                className="barlow-condensed border p-1 md:px-4 rounded-sm text-sm text-gray-400 border-gray-400 hover:border-white hover:text-white"
              >
                Press kit
              </button>
            ))}
          {!article ||
            (article !== "" && (
              <button
                onClick={() => openNewTab(article)}
                className="barlow-condensed border p-1 md:px-4 rounded-sm text-sm text-gray-400 border-gray-400 hover:border-white hover:text-white"
              >
                Article
              </button>
            ))}

          {!video ||
            (video !== "" && (
              <button
                onClick={() => openNewTab(video)}
                className="barlow-condensed border p-1 md:px-4 rounded-sm text-sm text-gray-400 border-gray-400 hover:border-white hover:text-white"
              >
                Watch Video
              </button>
            ))}
        </div>
      </div>
      <div className="text-center w-[100px] md:w-[150px]">
        <h2 className="barlow text-white">{flight_number}</h2>
        <p className="text-gray-400 barlow-condensed">Flight Number</p>
      </div>
    </div>
  );
}
// https://spacexpatchlist.space/thumbs/usaf_30sw_f1_001_tacsat_1.png
export default SearchRow;
