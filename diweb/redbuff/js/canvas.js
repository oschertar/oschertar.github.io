	var contexto;

	function cargaContextoCanvas(idCanvas){
		var elemento = document.getElementById(idCanvas);
		if(elemento && elemento.getContext){
			var contexto = elemento.getContext('2d');
			if(contexto){
				return contexto;
			}
		}
		return false;
	}
	
	window.onload = function(){
		
		contexto = cargaContextoCanvas('micanvas');
			if(contexto){

				for(i=0; i<1200; i+=9){
					for(j=0; j<200; j+=3){
						if((i+j) % 2 ==0){
							contexto.fillStyle = "rgb(80,80,80)";
							contexto.fillRect(i,j,10,10);
						}else{
							contexto.fillStyle = "rgb(193,183,183)";
							contexto.fillRect(i,j,10,10);
						}
					
					}
				}
				
				contexto.fillStyle = "black";
				contexto.font = "40px Calibri";
				contexto.fillText("Red Buff",425,60);

			}
	}
		
		


	
		
