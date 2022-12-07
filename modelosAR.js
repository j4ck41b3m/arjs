window.onLoad = ()=>
{


}
function cargarModelos()
{
	let latitud=37.192274783068676 ;
	let longitud =-3.6165853004243886;

	var modelo = document.createElement('a-box');
	modelo,setAttribute('material','color:yellow');
	modelo.setAttribute('scale','0.5 0.5 0.5');
	modelo.setAttribute('gps-entity-place','latitude: ${latitud}; longitude: ${longitud};');
}