window.onLoad = ()=>
{
	cargarModelos();

}
function cargarModelos()
{
	let modelos = [
		{
			latitud: 37.192274783068676 ;
			longitud: -3.6165853004243886;
			color: 'yellow',
			escala: 0.1
		} ,

		{
			latitud: 37.192274783068676 ;
			longitud: -3.6165853004243886;
			color: 'red',
			escala: 0.3


		} ,

		{
			latitud: 37.192274783068676 ;
			longitud: -3.6165853004243886;
			color: 'blue',
			escala: 0.5

		}

	];
// let latitud=37.192274783068676 ;
	//let longitud =-3.6165853004243886;
	for(let i = 0 ; i < modelos.length; i++)
	{
		var modelo = document.createElement('a-box');
	modelo,setAttribute('material','modelos[i].color');
	modelo.setAttribute('scale','' + modelos[i].escala + modelos[i].escala + modelos[i].escala  );
	modelo.setAttribute('gps-entity-place','latitude: ${modelos[i].latitud}; longitude: ${modelos[i].longitud};');
}   
    let scene = document.querySelector('a-scene');
    scene.apenChild(model);
	}
	