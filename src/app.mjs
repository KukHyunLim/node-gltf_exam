import { ConvertGLBtoGltf, ConvertGltfToGLB, ConvertToGLB} from 'gltf-import-export';
import {list} from 'files';

// const inputGlb = 'pathtoyour.glb';
// const extractedGltfFilename = '../bed.gltf';

// Perform the conversion; output paths are overwritten
// ConvertGLBtoGltf(inputGlb, extractedGltfFilename);

// let gltfContent = fs.readFileSync(extractedGltfFilename, 'utf8');
// let gltf = JSON.parse(gltfContent);
const start = async () => {
  const gltfFiles = await list("./").filter(/\.gltf$/);

  gltfFiles.map(item=>{
    const outputGlb = item+".glb";
    const gltfFilename = item;
    ConvertGltfToGLB(gltfFilename, outputGlb);
  })
}

start();

