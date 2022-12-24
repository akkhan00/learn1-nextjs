// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/blogs

import * as fs from "fs";


export default function handler(req, res) {
    let files = fs.readdirSync("blogdata");
    let blogpostData = [];
    files.forEach((file) => {
        let filedata = fs.readFileSync(`blogdata/${file}`, "utf-8");
        blogpostData.push(JSON.parse(filedata));
    })
    res.status(200).json(blogpostData)
}
