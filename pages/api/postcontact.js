import * as fs from 'fs';

export default function handler(req, res) {
  if (req.method === 'POST') {
    let data = fs.readdirSync('contactdata');

    let writefile = fs.writeFileSync(
      `contactdata/${data.length}.json`,
      JSON.stringify(req.body)
    );
    res.status(200).json({ msg: 'Successfully Added to database' });
  } else {
    res.status(200).json(['Welcome to postcontact api']);
  }
}
