import path from "path";
import ora from "ora";
import select from "@inquirer/select";
import fs from "fs";

const download = require("download-git-repo");

export default async function create(opts: any) {
  const cwd = process.cwd();
  const projectPath = path.join(cwd, opts.name);
  console.log(projectPath);
  const answer = await select({
    message: "please select a template",
    choices: [
      {
        name: "react",
        value: true,
      },
      {
        name: "vue",
        value: true,
      },
    ],
  });
  console.log(answer);

  const spinner = ora("start downloading ...");
  spinner.start();
  if (fs.existsSync(projectPath)) {
    fs.rmdirSync(projectPath, {recursive: true});
  }
  download(
    "github.com:ccctw-ma/ccctw-music#main",
    projectPath,
    (err: any) => {
      if (err) {
        spinner.fail("download failed");
        console.error(err);
      } else {
        spinner.succeed("download successful");
      }
    }
  );
}
