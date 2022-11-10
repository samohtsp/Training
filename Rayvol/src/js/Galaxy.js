import * as THREE from 'three';


const params = {
  count: 200000,
  size: 0.01,
  radius: 10,
  branches: 4,
  spin: 0.5,
  randomAmplitude: 1,
  insideColor: "#ff6030",
  outsideColor: "#1b3984"
};

function randomSign() {
  let sign = Math.random() - 0.5;
  if (sign >= 0) { return sign = 1 }
  else { return sign = -1 }
}

export function generateGalaxy() {

  let geometry = null;
  let material = null;
  let points = null;

  if (points) {
    scene.remove(points);
    material.dispose();
    geometry.dispose();
  }

  const loader = new THREE.TextureLoader();
  var texture = loader.load('discg.png');


  // Setting up few variables for the main loop
  const group = new THREE.Group()
  geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(params.count * 3);
  const colors = new Float32Array(params.count * 3);

  const colorInside = new THREE.Color(params.insideColor);
  const colorOutside = new THREE.Color(params.outsideColor);

  // Galaxy point instanciation and positioning
  for (let i = 0; i < params.count; i++) {
    const i3 = i * 3;
    //Select a random radius for point i
    const r = Math.random() * params.radius;

    //give color to the point i function of radius
    const mixedColor = colorInside.clone();
    mixedColor.lerp(colorOutside, r / params.radius);
    colors[i3] = mixedColor.r;
    colors[i3 + 1] = mixedColor.g;
    colors[i3 + 2] = mixedColor.b;

    //randomization of X Y Z coordinates with an amplitude
    let sign = randomSign();
    const randomX = sign * Math.random() * params.randomAmplitude;

    sign = randomSign();
    const randomY = sign * Math.random() * params.randomAmplitude;

    sign = randomSign();
    const randomZ = sign * Math.random() * params.randomAmplitude;

    //Selecting wich branches of the galaxie the point should be
    const branchIndex = i % params.branches;
    const branchAngle = branchIndex / params.branches;
    const rotation = branchAngle * Math.PI * 2;
    const spinAngle = r * params.spin;

    //computing the value X Y Z of the given point those équation will modify the shape of our galaxy
    // X and Z should be on a logarithmique spirale where r = a*exp( k * psy)
    //so basicaly we get those equations
    const a = 2 ;
    const psy = rotation + spinAngle;
    const k = 0.005;
    const linearRandom = 1
    positions[i3] = r * ( a * Math.exp(k*psy)*Math.cos(psy) + randomX * linearRandom);
    positions[i3 + 2] = r * ( a * Math.exp(k*psy)*Math.sin(psy) + randomZ * linearRandom);

    //Y axis should be on a flat gaussian shape equation y= A * (1 / (theta * Math.sqrt(2 * Math.PI)))*exp( -(r*r)/(theta*theta))
    const theta = 5;
    const A = 30; 
    const expo = (1 / (theta * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * (r * r) / (theta * theta))
    sign = randomSign();
    positions[i3 + 1] = sign * A * expo * randomY + randomY;
  }

  // Branches
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));



  material = new THREE.PointsMaterial({
    transparent: true,
    color: "#6359ee",
    map: texture,
    size: params.size,
    sizeAttenuation: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexColors: true
  });
  points = new THREE.Points(geometry, material);
  group.add(points);

  console.log("generateGalaxy");
  return group;
};

export function galaxyRender(){
  
}
