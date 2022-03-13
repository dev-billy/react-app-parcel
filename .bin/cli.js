#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (error) {
    console.error(`Failed to execute ${command}`, error);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/dev-billy/react-app-parcel ${repoName}`;
const installCommand = `cd ${repoName} && yarn install`;

console.log("Cloning into repository...");
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log("Installing dependencies...");

const installDeps = runCommand(installCommand);
if (!installDeps) process.exit(-1);

console.log("Congratulations 🎉 your project is ready");

console.log("Run the following commands to start: ");
console.log(`cd ${repoName} && yarn start`);
