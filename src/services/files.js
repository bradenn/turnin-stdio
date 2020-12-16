import config from "../config"
import {createWriteStream, existsSync, mkdirSync} from "fs";
import {get} from "http";

export default {
    downloadFile(fId, fName, taskId) {
        let path = `./cache/${taskId}`;
        if (!existsSync(path)){
            mkdirSync(path);
        }
        const file = createWriteStream(`${path}/${fName}`);
        const request = get(`${config.SWFVolume}/${fId}`, response => response.pipe(file));
    }
}
