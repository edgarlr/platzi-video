import fs from 'fs';

const getManifest = () => {
  try {
    return JSON.parse(fs.readFileSync(`${process.cwd()}/public/manifest.json`));
  } catch (error) {
    return console.log(error);
  }
};

export default getManifest;
