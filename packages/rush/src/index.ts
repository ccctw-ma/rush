import { spawnSync } from "child_process";

export default function runCLI() {
  console.log(process.argv);

  // 执行 Rust 二进制文件
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
