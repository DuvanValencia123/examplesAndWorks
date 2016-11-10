/*
esta funcion podria estar dentro de la clase como metodo privado, pero,
esto pesaria en la memoria de la aplicación, ademas tambien la necesitamos
para validar los resultados devueltos del archivo numbers.php,
es decir es una funcion para varios casos.
*/
function showAlert(action, referenceName, alert_){
     var divAlert = document.getElementById('indicateAlert');
     divAlert.style.display = 'block';
     var addClass, removeClass, textAlert;

       if(action == 'error'){
       	addClass    = 'alert-danger';
       	removeClass = 'alert-success';
       	textAlert   =  referenceName + ': '+alert_;
	   	 
       }

       if(action == 'success'){
         addClass    = 'alert-success';
       	 removeClass = 'alert-danger';
       	 textAlert   =  referenceName + ': '+alert_;
       }
      
	   divAlert.classList.add(addClass);
	   divAlert.classList.remove(removeClass); 
	   divAlert.innerHTML = textAlert;		       
}

/*
Creamos la clase principal, donde recorremos los dos elementos (pueden ser más),
que tienen la clase 'validThis', es decir, todos los inputs que tengan esta clase, tendran añadidas la funcionalidad de la clase, primero verificamos que los valores no esten vacios y creamos alertas personzalidas para cada elemento, dentro de cada input colocamos dentro del atributo = data-error, false, en caso de error y true, en caso contrario.

En un metodo o publico, ('plusOperation'),
recorremos cada input y verificamos que datos nos retorna de la validación,
*/
function PractiqueOperations(classInputs){
	this.className = classInputs;
	this.sums = document.querySelectorAll("."+this.className);

    this.validCurrentSum = function(id){
		var elem_to_valid = document.getElementById(id);
		var elem_Name     = elem_to_valid.getAttribute('name')
		var elem_className     = elem_to_valid.getAttribute('class')
		var currentValue  = elem_to_valid.value;
			
			if(currentValue == '' || currentValue.length == 0){
		            //console.log("nada");
		            elem_to_valid.setAttribute('data-error','true');
		            showAlert('error',elem_Name, 'No puede estar vacio');
		            return false;
			}
			
			else if(currentValue != ''){
              elem_to_valid.setAttribute('data-error','false');
              return true;
			}
	}
}

//metodo Público para sumar, se podria hacer un metodo para el resto de operaciones basado en este, pues es casi el mismo, tan solo cambiaria la llamada al archivo.php
PractiqueOperations.prototype.plusOperation =  function(){
     var response_, valueToAdd = [];
     //recorremos todos los inputs con la clase css, pasada por el constructor
      for (var i = 0; i <= this.sums.length -1; i++) {
      	 
      	   var Id =  this.sums[i].getAttribute('id');
      	   response_ =  this.validCurrentSum(Id);
			
			if(response_ == false){
				this.sums[i].style.border = '1px solid red';
			    break;
			}else{
               valueToAdd.push(this.sums[i].value);
			}
      }
      
      //si los valores devueltos desde las funciones de validacion son verdaderas
      if( response_ == true ){
 			//console.log(valueToAdd);

 /*realizamos la consulta al archivo que tiene guardado los numero en ingles*/
 $.post("php/numbers.php",{ Number1: valueToAdd[0],Number2: valueToAdd[1]},
    function(data, status){
       if( data == 'Ingresa un numero válido' ){
           showAlert('error', "Resultado", 'zero');
    	}
       else{ 
    	showAlert('success', "Perfecto!!!", 'Tu resultado es '+ data);
    }
        //alert("Data: " + data + "\nStatus: " + status);
    });

}//fin del if
    
}//fin del prototype.

//instanciamos la clase, pasandole al constructor el nombre de la 'clase css'
var practique = new PractiqueOperations('validThis');

/*click al boton principal*/
function experimentalSum(){
	practique.plusOperation();
}

