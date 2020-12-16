import {writeFileSync} from "fs";

export class Submission {
    constructor(submissionObject) {
        this.sessionUUID = Math.random().toString(36).substring(7);
        submissionObject.fileList.forEach(file => this.generateFile(file));
    }

    generateFile(file) {
        writeFileSync(`../cache/${this.sessionUUID}/${file.fileName}`, file.fileContent, {encoding: "utf8", flag: "w"});
    }
}
