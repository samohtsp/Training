import * as THREE from "three";

export class Block {
  constructor({ blockType }) {
    const blockGoem = new THREE.BoxGeometry(1, 1, 1);
    const blockMaterials = new BlockMaterials();
    const renderDistance = 4;
    const chunkSize = 10;
    const depth = 5;

    this.blockGoem = blockGoem;
    this.blockMaterials = blockMaterials;
    this.renderDistance = renderDistance;
    this.chunkSize = chunkSize;
    this.depth = depth;

    if (blockType == "grass") {
      this.blockType = blockType;
      this.materialArray = blockMaterials.grassMat;
      this.mesh = new THREE.Mesh(blockGoem, blockMaterials.grassMat);

      this.count = 0;
      this.range = [0];
      this.biomes = ["plains"];
    }
    if (blockType == "dirt") {
      this.blockType = blockType;
      this.materialArray = blockMaterials.dirtMat;
      this.mesh = new THREE.Mesh(blockGoem, blockMaterials.dirtMat);
      this.count = 0;
      this.range = [0];
      this.biomes = ["plains"];
    }
    if (blockType == "cobblestone") {
      this.blockType = blockType;
      this.materialArray = blockMaterials.cobblestoneMat;
      this.mesh = new THREE.Mesh(blockGoem, blockMaterials.cobblestoneMat);
      this.count = 0;
      this.range = [0];
      this.biomes = ["plains", "desert"];
    }

    if (blockType == "oakLog") {
      this.blockType = blockType;
      this.materialArray = blockMaterials.oakLogMat;
      this.mesh = new THREE.Mesh(blockGoem, blockMaterials.oakLogMat);
      this.count = 0;
      this.range = [0];
      this.biomes = ["plains"];
    }
    if (blockType == "oakLeaves") {
      this.blockType = blockType;
      this.materialArray = blockMaterials.oakLeavesMat;
      this.mesh = new THREE.Mesh(blockGoem, blockMaterials.oakLeavesMat);
      this.count = 0;
      this.range = [0];
      this.biomes = ["plains"];
    }
    if (blockType == "sand") {
      this.blockType = blockType;
      this.materialArray = blockMaterials.sandMat;
      this.mesh = new THREE.Mesh(blockGoem, blockMaterials.sandMat);
      this.count = 0;
      this.range = [0];
      this.biomes = ["plains"];
    }
    if (blockType == "water") {
      this.blockType = blockType;
      this.materialArray = blockMaterials.waterMat;
      this.mesh = new THREE.Mesh(blockGoem, blockMaterials.waterMat);
      this.count = 0;
      this.range = [0];
      this.biomes = ["plains"];
    }
  }
}

export class BlockMaterials {
  constructor() {
    var loader = new THREE.TextureLoader();

    this.dirtMat = [
      "/assets/texture/dirt/dirt.png",
      "/assets/texture/dirt/dirt.png",
      "/assets/texture/dirt/dirt.png",
      "/assets/texture/dirt/dirt.png",
      "/assets/texture/dirt/dirt.png",
      "/assets/texture/dirt/dirt.png",
    ].map((pic) => {
      return new THREE.MeshStandardMaterial({
        map: loader.load(pic),
        side: THREE.DoubleSide,
      });
    });
    this.cobblestoneMat = [
      "/assets/texture/cobblestone/cobblestone.png",
      "/assets/texture/cobblestone/cobblestone.png",
      "/assets/texture/cobblestone/cobblestone.png",
      "/assets/texture/cobblestone/cobblestone.png",
      "/assets/texture/cobblestone/cobblestone.png",
      "/assets/texture/cobblestone/cobblestone.png",
    ].map((pic) => {
      return new THREE.MeshStandardMaterial({
        map: loader.load(pic),
        side: THREE.DoubleSide,
      });
    });
    this.oakLogMat = [
      "/assets/texture/oakLog/side.png",
      "/assets/texture/oakLog/side.png",
      "/assets/texture/oakLog/top.jpg",
      "/assets/texture/oakLog/bottom.jpg",
      "/assets/texture/oakLog/side.png",
      "/assets/texture/oakLog/side.png",
    ].map((pic) => {
      return new THREE.MeshStandardMaterial({
        map: loader.load(pic),
        side: THREE.DoubleSide,
      });
    });
    this.oakLeavesMat = [
      "/assets/texture/oakLeaves/oakLeaves.png",
      "/assets/texture/oakLeaves/oakLeaves.png",
      "/assets/texture/oakLeaves/oakLeaves.png",
      "/assets/texture/oakLeaves/oakLeaves.png",
      "/assets/texture/oakLeaves/oakLeaves.png",
      "/assets/texture/oakLeaves/oakLeaves.png",
    ].map((pic) => {
      return new THREE.MeshStandardMaterial({
        map: loader.load(pic),
        side: THREE.DoubleSide,
      });
    });
    this.sandMat = [
      "/assets/texture/sand/sand.png",
      "/assets/texture/sand/sand.png",
      "/assets/texture/sand/sand.png",
      "/assets/texture/sand/sand.png",
      "/assets/texture/sand/sand.png",
      "/assets/texture/sand/sand.png",
    ].map((pic) => {
      return new THREE.MeshStandardMaterial({
        map: loader.load(pic),
        side: THREE.DoubleSide,
      });
    });
    this.waterMat = [
      "/assets/texture/water/water.jpeg",
      "/assets/texture/water/water.jpeg",
      "/assets/texture/water/water.jpeg",
      "/assets/texture/water/water.jpeg",
      "/assets/texture/water/water.jpeg",
      "/assets/texture/water/water.jpeg",
    ].map((pic) => {
      return new THREE.MeshStandardMaterial({
        map: loader.load(pic),
        side: THREE.DoubleSide,
      });
    });
    this.grassMat = [
      "/assets/texture/grass/side.jpg",
      "/assets/texture/grass/side.jpg",
      "/assets/texture/grass/top.jpg",
      "/assets/texture/grass/bottom.jpg",
      "/assets/texture/grass/side.jpg",
      "/assets/texture/grass/side.jpg",
    ].map((pic) => {
      return new THREE.MeshStandardMaterial({
        map: loader.load(pic),
        side: THREE.DoubleSide,
      });
    });

    this.textureOpacity();
    //this.textureImagesLoader("/assets/texture/grass");
  }
  textureImagesLoader(fileURL) {
    //joining path of directory
    const directoryPath = fileURL;
    //passsing directoryPath and callback function
    fs.readdir(directoryPath, function (err, files) {
      //handling error
      if (err) {
        return console.log("Unable to scan directory: " + err);
      }
      //listing all files using forEach
      files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file);
      });
    });
    return file;
  }
  textureOpacity() {
    for (var i = 0; i < this.waterMat.length; i++) {
      if (i == 2 || i == 3) {
        // top and bottom
        this.waterMat[i].transparent = true;
        this.waterMat[i].opacity = 0.7;
      } else {
        // sides
        this.waterMat[i].transparent = true;
        this.waterMat[i].opacity = 0.4;
      }
    }
  }
}

export class Blocks {
  constructor() {
    this.grass = new Block({
      blockType: "grass",
    });

    this.dirt = new Block({
      blockType: "dirt",
    });

    this.cobblestone = new Block({
      blockType: "cobblestone",
    });

    this.oakLog = new Block({
      blockType: "oakLog",
    });

    this.oakLeaves = new Block({
      blockType: "oakLeaves",
    });

    this.sand = new Block({
      blockType: "sand",
    });

    this.water = new Block({
      blockType: "water",
    });
  }
  getBlockByType(blockType) {
    if (blockType == "grass") {
      return this.grass;
    }
    if (blockType == "dirt") {
      return this.dirt;
    }
    if (blockType == "cobblestone") {
      return this.cobblestone;
    }

    if (blockType == "oakLog") {
      return this.oakLog;
    }
    if (blockType == "oakLeaves") {
      return this.oakLeaves;
    }
    if (blockType == "sand") {
      return this.sand;
    }
    if (blockType == "water") {
      return this.water;
    }
  }
}
