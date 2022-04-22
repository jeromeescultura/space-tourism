import { launchpads } from "../../data/launchpads";

export default function handler(req, res) {
  res.status(200).json(launchpads);
}
