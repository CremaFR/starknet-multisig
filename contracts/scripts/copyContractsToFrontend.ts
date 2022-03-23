import * as fs from "fs";

const sourceFolderBase = __dirname + "/../starknet-artifacts/contracts/";
const targetFolder = __dirname + "/../../frontend/src/contracts/";

const targetContract = "Target.json";
const multisigContract = "MultiSig.json";

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
copyFile("mock/Target.cairo/", targetContract);
copyFile("MultiSig.cairo/", multisigContract);
