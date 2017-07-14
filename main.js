
/*
var saludar = (nombre)=>  reduce la funcion =>
{
	alert("Hola: " +nombre);
}

saludar ( "Juan");  */


/*const razonsocial="abracadabra";
	var nuevoDisco=(artista,titulo)=>
	{
		var fecha=new Dale(); /* new crea un objeto en este caso a fecha// 
		var anio=fecha.getFullYear();
		alert (`$(artist) $(titulo) $(anio)`),
	};
	
	nuevoDisco("album")("banda");*/
	
	
		
		class Cancion{
			constructor (titulo,artista,duracion,codec)
			{
			this.titulo=titulo;
			this.artista=artista;
			this.duracion=duracion;
			this.codec=codec;
			this.estado=false;
			}
			
			reproducir()
			{
				this.estado=true;
			}
				detener()
				{
				this.estado=false;
				}
		}
		
		var nuevaCancion=new Cancion("Almohada De Piedra","La Renga","3:59","mp3");
		nuevaCancion.reproducir();
		alert (nuevaCancion.estado);
			
			
			
			
		