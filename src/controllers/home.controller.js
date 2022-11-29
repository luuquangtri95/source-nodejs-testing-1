import ResponseHandler from "../helpers/responseHandler.js";
import Services from "../services/home.service.js";

export default {
  get: async (req, res) => {
    try {
      console.log(req.body);
      let data = await Services.get();

      return ResponseHandler.success(res, data);
    } catch (error) {
      return ResponseHandler.error(res, error);
    }
  },
};
