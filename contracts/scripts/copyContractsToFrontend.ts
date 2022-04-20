import * as fs from "fs";

// Used for copying the contracts artifacts for the frontend

const sourceFolderBase =
  __dirname + "/../starknet-artifacts/contracts/multisig/";
const targetFolder = __dirname + "/../../frontend/public/";

const multisigContract = "Multisig.json";

const copyFile = (sourcePath: string, fileName: string) => {
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder);
  }

  const file = sourceFolderBase + sourcePath + fileName;
  fs.copyFile(file, targetFolder + fileName, (err) => {
    if (err) {
      console.error("Problem copying file " + file, err);
    } else {
      console.log("Copied file " + file + " to " + targetFolder + fileName);
    }
  });
};
copyFile("Multisig.cairo/", multisigContract);
