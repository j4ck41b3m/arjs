window.onLoad = ()=>
{


}
function cargarModelos()
{
	let latitud=37.1923862364263;
	let longitud = -3.616753700621774;

	var modelo = document.createElement('a-box');
	modelo,setAttribute('material','color:yellow');
	modelo.setAttribute('scale','10 10 10');
	modelo.setAttribute('gps-entity-place','latitude: ${latitud}; longitude: ${longitud};');
}