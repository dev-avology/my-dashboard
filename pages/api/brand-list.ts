import { NextApiHandler, NextApiRequest } from "next";
import formidable from "formidable";
import path from "path";
import fs from "fs/promises";

const handler: NextApiHandler = async (req, res) => {
  let dirs:string[] = [];

  dirs = await fs.readdir(path.join(process.cwd(), "/public/brand-style"));

  res.json(dirs);
};

export default handler;