import req from "../axios";
let service = req.service;
const HOME = {
  getFileOption(name) {
    return service({
      url: `/summarize/html/${name}.html`,
      method: "get"
    });
  },
  getMenuOption(name) {
    return service({
      url: `/summarize/website/data/${name}.xlsx`,
      method: "get",
      responseType: 'arraybuffer',
    });
  }


}

export default HOME