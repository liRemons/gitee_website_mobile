import req from "../axios";
let service= req.service;
const HOME = {
  getFileOption(name) {
    return service({
      url: `/summarize/html/${name}.html`,
      method: "get"
    });
  },


}

export default HOME