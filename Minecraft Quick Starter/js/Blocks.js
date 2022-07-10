import * as THREE from 'three';
import * as FS from 'fs';

export class Block {
    constructor({ blockType, materialArray, mesh, count, biomes }) {
        this.blockType = blockType
        this.materialArray = materialArray
        this.mesh = mesh
        this.count = count
        this.biomes = biomes
    }
}

export class BlockMaterials {

    constructor() {
        var loader = new THREE.TextureLoader();

        this.dirtMat = [
            "../texture/dirt/dirt.png",
            "../texture/dirt/dirt.png",
            "../texture/dirt/dirt.png",
            "../texture/dirt/dirt.png",
            "../texture/dirt/dirt.png",
            "../texture/dirt/dirt.png"
        ].map(pic => {
            return new THREE.MeshStandardMaterial({ map: loader.load(pic), side: THREE.DoubleSide });
        });
        this.cobblestoneMat = [
            "../texture/cobblestone/cobblestone.png",
            "../texture/cobblestone/cobblestone.png",
            "../texture/cobblestone/cobblestone.png",
            "../texture/cobblestone/cobblestone.png",
            "../texture/cobblestone/cobblestone.png",
            "../texture/cobblestone/cobblestone.png"
        ].map(pic => {
            return new THREE.MeshStandardMaterial({ map: loader.load(pic), side: THREE.DoubleSide });
        });
        this.oakLogMat = [
            "../texture/oakLog/side.png",
            "../texture/oakLog/side.png",
            "../texture/oakLog/top.jpg",
            "../texture/oakLog/bottom.jpg",
            "../texture/oakLog/side.png",
            "../texture/oakLog/side.png"
        ].map(pic => {
            return new THREE.MeshStandardMaterial({ map: loader.load(pic), side: THREE.DoubleSide });
        });
        this.oakLeavesMat = [
            "../texture/oakLeaves/oakLeaves.png",
            "../texture/oakLeaves/oakLeaves.png",
            "../texture/oakLeaves/oakLeaves.png",
            "../texture/oakLeaves/oakLeaves.png",
            "../texture/oakLeaves/oakLeaves.png",
            "../texture/oakLeaves/oakLeaves.png"
        ].map(pic => {
            return new THREE.MeshStandardMaterial({ map: loader.load(pic), side: THREE.DoubleSide });
        });
        this.sandMat = [
            "../texture/sand/sand.png",
            "../texture/sand/sand.png",
            "../texture/sand/sand.png",
            "../texture/sand/sand.png",
            "../texture/sand/sand.png",
            "../texture/sand/sand.png"
        ].map(pic => {
            return new THREE.MeshStandardMaterial({ map: loader.load(pic), side: THREE.DoubleSide });
        });
        this.waterMat = [
            "../texture/water/water.jpeg",
            "../texture/water/water.jpeg",
            "../texture/water/water.jpeg",
            "../texture/water/water.jpeg",
            "../texture/water/water.jpeg",
            "../texture/water/water.jpeg"
        ].map(pic => {
            return new THREE.MeshStandardMaterial({ map: loader.load(pic), side: THREE.DoubleSide });
        });
        this.grassMat = [
            "../texture/grass/side.jpg",
            "../texture/grass/side.jpg",
            "../texture/grass/top.jpg",
            "../texture/grass/bottom.jpg",
            "../texture/grass/side.jpg",
            "../texture/grass/side.jpg"
        ].map(pic => {
            return new THREE.MeshStandardMaterial( { map: loader.load(pic), side: THREE.DoubleSide } );
        });

        this.textureOpacity();
        //this.textureImagesLoader("../texture/grass");
    }
    textureImagesLoader(fileURL) {
        //joining path of directory 
        const directoryPath = fileURL;
        //passsing directoryPath and callback function
        fs.readdir(directoryPath, function (err, files) {
            //handling error
            if (err) {
                return console.log('Unable to scan directory: ' + err);
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
            if (i == 2 || i == 3) { // top and bottom
                this.waterMat[i].transparent = true;
                this.waterMat[i].opacity = 0.7;
            } else { // sides
                this.waterMat[i].transparent = true;
                this.waterMat[i].opacity = 0.4;
            }
        }
    }
}

export class Blocks {
    constructor() {
        var blockGoem = new THREE.BoxBufferGeometry(5, 5, 5);
        var blockMaterials = new BlockMaterials();
        var renderDistance = 4;
        var chunkSize = 10;
        var depth = 5;

        this.blockGoem = blockGoem
        this.blockMaterials = blockMaterials
        this.renderDistance = renderDistance
        this.chunkSize = chunkSize
        this.depth = depth

        this.grass = new Block({ blockType: "grass", materialArray: blockMaterials.grassMat, mesh: new THREE.Mesh(blockGoem, blockMaterials.grassMat), count: 0, range: [0], biomes: ["plains"] })
        this.dirt = new Block({ blockType: "dirt", materialArray: blockMaterials.dirtMat, mesh: new THREE.Mesh(blockGoem, blockMaterials.dirtMat), count: 0, range: [1, 2], biomes: ["plains"] })
        this.cobblestone = new Block({ blockType: "cobblestone", materialArray: blockMaterials.cobblestoneMat, mesh: new THREE.Mesh(blockGoem, blockMaterials.cobblestoneMat), count: 0, range: [3, 4], biomes: ["plains", "desert"] })
        this.oakLog = new Block({ blockType: "oakLog", materialArray: blockMaterials.oakLogMat, mesh: new THREE.Mesh(blockGoem, blockMaterials.oakLogMat), count: 0, range: [], biomes: ["plains"] })
        this.oakLeaves = new Block({ blockType: "oakLeaves", materialArray: blockMaterials.oakLeavesMat, mesh: new THREE.Mesh(blockGoem, blockMaterials.oakLeavesMat), count: 0, range: [], biomes: ["plains"] })
        this.sand = new Block({ blockType: "sand", materialArray: blockMaterials.sandMat, mesh: new THREE.Mesh(blockGoem, blockMaterials.sandMat), count: 0, range: [0, 1, 2], biomes: ["desert"] })
        this.water = new Block({ blockType: "water", materialArray: blockMaterials.waterMat, mesh: new THREE.Mesh(blockGoem, blockMaterials.waterMat), count: 0, range: [], biomes: ["plains", "desert"] })
    }
}



