/*
 * File Description
 * Script to generate the images import files
 *
 * Created on Fri Dec 21 2018
 * Created by: Gautam Sharma
 * Copyright (c) 2018
 */

const fs = require('fs');

const imageFileNames = () => {
  const array = fs
    .readdirSync('TestArch/src/res/images')
    .filter(file => {
      return file.endsWith('.png');
    })
    .map(file => {
      return file
        .replace(' ', '')
        .replace('@0.75x.png', '')
        .replace('@1.5x.png', '')
        .replace('@1x.png', '')
        .replace('@2x.png', '')
        .replace('@3x.png', '')
        .replace('@4x.png', '')
        .replace('@5x.png', '')
        .replace('.png', '');
    });
  return Array.from(new Set(array));
};

const generate = () => {
  let properties = imageFileNames()
    .map(name => {
      return `${name}: require('./images/${name}.png')`;
    })
    .join(',\n  ');
  const string = `/**
 * Define all the Image Name 
 * For auto defination run below command 
 * npm run images
 * Created by : Gautam Sharma
 */

const images = {
  ${properties}
}
export default images;
`;
  fs.writeFileSync('TestArch/src/res/images.js', string, 'utf8');
};

generate();
