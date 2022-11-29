import ResponseHandler from "../helpers/responseHandler.js";
import fs from "fs";
import path from "path";

const EXTENSION_FONT = ["ttf", "otf", "eot", "woff"];

const UPLOAD_DIR = `${process.cwd()}/uploads`;
console.log("🚀🚀🚀 ~ UPLOAD_DIR", UPLOAD_DIR);

if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR);
}

const get = (req, res) => {
  try {
    return ResponseHandler.success(res, data);
  } catch (error) {
    return ResponseHandler.error(res, error);
  }
};

const upload = async (req, res) => {
  try {
    let files = req.files;

    files = files.map((file) => ({
      ...file,
      path: `${process.cwd()}/${file.path}`,
    }));

    let filename = "";
    let filepath = "";
    let content = "";

    for (let i = 0; i < files.length; i++) {
      filename = files[i].originalname.replace(/\s+/g, "-");
      filepath = `${UPLOAD_DIR}/${filename}`;
      content = await fs.readFileSync(files[i].path);

      await fs.writeFileSync(filepath, content);

      fs.unlink(files[i].path, () => {});
      files[i].url = `${process.env.HOST}/uploads/${filename}`;
    }

    files = files.map((file) => file.url);

    return ResponseHandler.success(res, files);
  } catch (error) {
    return ResponseHandler.error(res, error);
  }
};

export default {
  get,
  upload,
};
