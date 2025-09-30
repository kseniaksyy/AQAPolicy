const axios = require("axios").default;

class BaseController {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "https://bookstore.toolsqa.com",
      validateStatus: function () {
        return true;
      },
    });
  }
}
module.exports = BaseController;
