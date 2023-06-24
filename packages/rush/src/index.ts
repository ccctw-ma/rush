import { spawnSync } from "child_process";
import { program, Command } from "commander";
import create from "./create";
export default function runCLI() {
  const program = new Command();
  program
    .name("rush")
    .description("a CLI to create a JavaScript project")
    .version("0.0.1");

  program
    .command("split")
    .description("Split a string into substrings and display as an array")
    .argument("<string>", "string to split")
    .option("--first", "display just the first substring")
    .option("-s, --separator <char>", "separator character", ",")
    .option("-n, --number <numbers...>", "specify numbers")
    .action((str, options) => {
      const limit = options.first ? 1 : undefined;
      console.log(str.split(options.separator, limit));
      console.log(options);
    });

  program
    .command("dev")
    .description("run the project in developer mode")
    .action(() => {
      console.log("Hello dev 2333");
    });

  program
    .command("build")
    .description("build this project")
    .action(() => {
      console.log("Hello build in production mode");
    });

  program
    .command("create")
    .description("create an react app")
    .argument("<projectName>", "the project name you want to create")
    .action((projectName) => {
      create({ name: projectName });
    });

  program.parse();
}

// 执行 Rust 二进制文件
export function runRustProgram() {
  const result = spawnSync(
    "/root/vscodeprojects/rush/packages/core/target/release/core",
    ["arg1", "arg2"],
    { encoding: "utf-8" }
  );

  if (result.error) {
    console.error("执行命令时出错:", result.error);
  } else {
    console.log("输出:", result.stdout);
  }
}
