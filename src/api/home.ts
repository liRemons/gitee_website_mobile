import req from "../axios";
let service: any = req.service;
const HOME = {
  getFileOption(name: string) {
    return service({
      url: `/summarize/html/${name}.html`,
      method: "get"
    });
  },


}

export default HOME