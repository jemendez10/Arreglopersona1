var persona=[
{
nombre:"Jhon",
edad:24,
cedula: 1121919902,
peliFavorita:"Click: Perdiendo el control",
genero:"comedia"
},
{
nombre:"Jesse",
edad:19,
cedula: 1006856501,
peliFavorita:"spider man 2",
genero:"ciencia ficcion",
},
{
nombre:"Maira",
edad:17,
cedula: 1121658904,
peliFavorita:"la era de hielo",
genero:"animacion"
}
]
console.log(persona)
for (var i = 0; i < persona.length; i++) {
		alert("Hola "+persona[i].nombre+" tu genero favorito en peliculas es: "+persona[i].genero)
if (persona[i].edad>18 ) {
	switch(persona[i].genero){
		case 'ciencia ficcion':
		alert("te recomendamos que veas las siguientes peliculas: ")
		alert("Terminator 2,La purga :la saga, Deadpool 1y2")
		break;
		case 'romantica':
		alert("te recomendamos que veas las siguientes peliculas: ")
		alert("La propuesta, Titanic, Como si fuera la primera vez")
		break;
		case 'comedia':
		alert("te recomendamos que veas las siguientes peliculas: ")
		alert("Scary movie, Amarican pie 2, Zombieland")
		break;
		case 'animacion':
		alert("te recomendamos que veas las siguientes peliculas: ")
		alert("Coraline y la puerta secreta, La princesa Mononoke, Mi vecino Totoro")
		break;
		default:
		alert("Lo sentimos, no encontramos tu genero")
}
}else if (persona[i].edad >= 14) {
	switch(persona[i].genero){
		case 'ciencia ficcion':
		alert("te recomendamos que veas las siguientes peliculas: ")
		alert("Thor Ragnarok, Jurassic Park, Akira")
		break;
		case 'romantica':
		alert("te recomendamos que veas las siguientes peliculas: ")
		alert("La la land, Bajo la misma estrella, Nace una estrella")
		break;
		case 'comedia':
		alert("te recomendamos que veas las siguientes peliculas: ")
		alert("La mascara, Dos tontos muy tontos, Super cool")
		break;
		case 'animacion':
		alert("te recomendamos que veas las siguientes peliculas: ")
		alert("Aladdin, Toy story 1,2 y 3, Shrek:la saga")
		break;
		default:
		alert("Lo sentimos, no encontramos tu genero")
}
}else{
	switch(persona[i].genero){
		case 'infantil':
		alert("te recomendamos que veas las siguientes peliculas: ")
		alert("Bambi, Kun fu Panda, Cars")
		break;
}
	}
}