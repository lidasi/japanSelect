/**
 * Created by lidasi on 2018/12/11.
 */
var container;
var camera, scene, renderer;
var object;
var radius = 100, theta = 0;
init();
animate();
initGrid();


function init() {
    container = document.getElementById('info');
    document.body.appendChild( container );

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.layers.enable( 0 ); // enabled by default
    camera.layers.enable( 1 );
    camera.layers.enable( 2 );

    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xf0f0f0 );

    var light = new THREE.PointLight( 0xffffff, 1 );
    light.layers.enable( 0 );
    light.layers.enable( 1 );
    light.layers.enable( 2 );

    scene.add( camera );
    camera.add( light );

    var colors = [ 0xff0000, 0x00ff00, 0x0000ff ];
    var geometry = new THREE.BoxBufferGeometry( 20, 20, 20 );
    var layer;


    for ( var i = 0; i < 300; i ++ ) {
        layer = ( i % 3 );

        object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: colors[ layer ] } ) );


        object.position.x = Math.random() * 800 - 400;
        object.position.y = Math.random() * 800 - 400;
        object.position.z = Math.random() * 800 - 400;

        object.rotation.x = Math.random() * 2 * Math.PI;
        object.rotation.y = Math.random() * 2 * Math.PI;
        object.rotation.z = Math.random() * 2 * Math.PI;

        object .scale.x = Math.random() + 0.5;
        object.scale.y = Math.random() + 0.5;
        object.scale.z = Math.random() + 0.5;

        object.layers.set( layer );

        scene.add( object );

    }

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );

    window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

//

function animate() {
    for (var x = 0; x < 300; x++) {
        scene.children[x].rotation.x += 0.01;
        scene.children[x].rotation.y += 0.01;
    }

    render();
    requestAnimationFrame( animate );
    //stats.update();

}
//生成网格
function initGrid(){
    // 网格的边长是1000，每个小网格的边长是50
    var helper = new THREE.GridHelper( 1000, 50 );
    scene.add( helper );
}

function render() {

    theta += 0.1;

    camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
    camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
    camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );
    camera.lookAt( scene.position );
    renderer.render( scene, camera );

}
