import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log({ req });
  if (req.method === "POST") {
    fs.writeFileSync("../public/x.json", req.body);
    return res.status(200);
  }
}
