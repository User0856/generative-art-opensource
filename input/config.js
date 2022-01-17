const fs = require("fs");
const width = 1000;
const height = 1000;
const dir = __dirname;
const description = "This is an NFT made by the coolest generative code really. It is a Clumsy Snail limited series to try all the tech";
const baseImageUri = "https://clumsysnails.online/metadata";
const startEditionFrom = 1;
const endEditionAt = 30;
const editionSize = 30;
const raceWeights = [
  {
    value: "snail",
    from: 1,
    to: editionSize,
  },
];

const races = {
  snail: { 
    name: "Snail",
    layers: [
      {
        name: "Background",
        elements: [
          {
            id: 0,
            name: "Pink gradient",
            path: `${dir}/background/_0024_background.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Yellow desert",
            path: `${dir}/background/_0025_background.png`,
            weight: 65,
          },
          {
            id: 2,
            name: "Blue sea",
            path: `${dir}/background/_0026_background.png`,
            weight: 45,
          },
          {
            id: 3,
            name: "Orange",
            path: `${dir}/background/_0027_background.png`,
            weight: 25,
          },
          {
            id: 4,
            name: "Salady",
            path: `${dir}/background/_0028_background.png`,
            weight: 5,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Body",
        elements: [
          {
            id: 0,
            name: "Creamy",
            path: `${dir}/body/_0020_body.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Pink",
            path: `${dir}/body/_0022_body.png`,
            weight: 70,
          },
          {
            id: 2,
            name: "Yellowish",
            path: `${dir}/body/_0023_body.png`,
            weight: 40,
          },
          {
            id: 3,
            name: "Greenish",
            path: `${dir}/body/_0021_body.png`,
            weight: 10,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Shell",
        elements: [
          {
            id: 0,
            name: "Violet",
            path: `${dir}/shell/_0016_shell.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Green",
            path: `${dir}/shell/_0017_shell.png`,
            weight: 80,
          },
          {
            id: 2,
            name: "Blue",
            path: `${dir}/shell/_0018_shell.png`,
            weight: 55,
          },
          {
            id: 3,
            name: "Red",
            path: `${dir}/shell/_0019_shell.png`,
            weight: 30,
          },
          {
            id: 4,
            name: "Shiny",
            path: `${dir}/shell/_0015_shell.png`,
            weight: 5,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Mouth",
        elements: [
          {
            id: 0,
            name: "Dreamy",
            path: `${dir}/mouth/_0007_mouth.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Cool",
            path: `${dir}/mouth/_0008_mouth.png`,
            weight: 80,
          },
          {
            id: 2,
            name: "Focused",
            path: `${dir}/mouth/_0009_mouth.png`,
            weight: 55,
          },
          {
            id: 3,
            name: "Happy",
            path: `${dir}/mouth/_0010_mouth.png`,
            weight: 30,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Eyes",
        elements: [
          {
            id: 0,
            name: "Normal",
            path: `${dir}/eyes/_0011_eyes.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Closed",
            path: `${dir}/eyes/_0012_eyes.png`,
            weight: 80,
          },
          {
            id: 2,
            name: "Stunned",
            path: `${dir}/eyes/_0013_eyes.png`,
            weight: 55,
          },
          {
            id: 3,
            name: "Dreamy",
            path: `${dir}/eyes/_0014_eyes.png`,
            weight: 30,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Hair",
        elements: [
          {
            id: 0,
            name: "Type 1",
            path: `${dir}/hair/_0004_hair.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Type 2",
            path: `${dir}/hair/_0005_hair.png`,
            weight: 65,
          },
          {
            id: 2,
            name: "Type 3",
            path: `${dir}/hair/_0006_hair.png`,
            weight: 35,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Headset",
        elements: [
          {
            id: 0,
            name: "Headphones pink",
            path: `${dir}/headset/_0001_headset.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Headphones yellow",
            path: `${dir}/headset/_0002_headset.png`,
            weight: 70,
          },
          {
            id: 2,
            name: "Headphones red",
            path: `${dir}/headset/_0003_headset.png`,
            weight: 40,
          },
          {
            id: 3,
            name: "Brown warm hat",
            path: `${dir}/headset/_0000_headset.png`,
            weight: 10,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
    ],
  },
};

module.exports = {
  width,
  height,
  description,
  baseImageUri,
  editionSize,
  startEditionFrom,
  endEditionAt,
  races,
  raceWeights,
};
