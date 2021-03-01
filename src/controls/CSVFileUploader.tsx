import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import { confirmWithSingleButton } from "./Confirmation";

interface Props {
  fileUploadCallBack: any;
}

const CSVFileUploader: React.FC<Props> = ({ fileUploadCallBack }) => {
  const csv = require("csvtojson");
  async function handleUpload({ target }: any) {
    if (target?.files[0].size > 1000) {
      //Totally random size to be too big
      confirmWithSingleButton("Ok", "Error", "File is too large to read");
    }
    if (!target.files[0].name.endsWith(".csv")) {
      confirmWithSingleButton("Ok", "Error", "File must be .csv");
      return "";
    }
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      (event) => parseCsv(event?.target?.result),
      false
    );
    reader.removeEventListener(
      "load",
      (event) => parseCsv(event?.target?.result),
      true
    );
    reader.readAsText(target.files[0]);
  }

  async function parseCsv(someText: any) {
    const jsonObj = await csv().fromString(someText);
    console.log(jsonObj);
    fileUploadCallBack(jsonObj);
  }
  return (
    <div>
      <input type="file" accept=".csv" onChange={handleUpload}></input>
      <Tooltip title="Select Image">
        <label htmlFor="faceImage">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          ></IconButton>
        </label>
      </Tooltip>
    </div>
  );
};

export default CSVFileUploader;
