import { launches } from "../../data/launches";

export default function handler(req, res) {
  res.status(200).json(launches);
}
