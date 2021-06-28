
let btnEncriptar = document.getElementById("encriptar"); 
let btnLimpiar = document.getElementById("limpiar");
let btnDesencriptar = document.getElementById("desencriptar");

btnEncriptar.onclick = function(){
    
    console.log(this.id+": Clicked!");
    let splits= document.getElementById("texto").value.split("");
   
    splits.forEach(function(split, index) { //funcion que convierte todos las letras "e" a "enter"
        
    if(split=="e"){
            splits[index]="enter";
            console.log(splits[index]);
        }

    });
    
    splits.forEach(function(split, index) { //funcion que convierte todos las letras "i" a "imes"

        if(split=="i"){
            splits[index]="imes";
            console.log(splits[index]);
        }

    });

    splits.forEach(function(split, index) { //funcion que convierte todos las letras "a" a "ai"
        
        if(split=="a"){
            splits[index]="ai";
            console.log(splits[index]);
        }

    });

    splits.forEach(function(split, index) { //funcion que convierte todos las letras "o" a "ober"
       
        if(split=="o"){
            splits[index]="ober";
            console.log(splits[index]);
        }

    });

    splits.forEach(function(split, index) { //funcion que convierte todos las letras "u" a "ufat"
       
        if(split=="u"){
            splits[index]="ufat";
            console.log(splits[index]);
        }

    });
    console.log(splits.join(''));//imprimo en consola el arreglo concatenado con la funcion join
    document.getElementById("resultado").value=splits.join('');//muestro la concatenacion del array en el texarea
}

btnDesencriptar.onclick= function(){
   
    let cadena = document.getElementById("texto").value;

    if(cadena.indexOf('enter') != -1){
    
        cadena=cadena.replace('enter','e');

    }
    if(cadena.indexOf('imes') != -1){
    
        cadena=cadena.replace('imes','i');

    }
    if(cadena.indexOf('ai') != -1){
    
        cadena=cadena.replace('ai','a');

    }
    if(cadena.indexOf('ober') != -1){
    
        cadena=cadena.replace('ober','o');

    }
    if(cadena.indexOf('ufat') != -1){
    
        cadena=cadena.replace('ufat','u');

    }
    console.log(cadena);
    document.getElementById("resultado").value = cadena;
}

btnLimpiar.onclick = function(){
    document.getElementById("resultado").value="";
    document.getElementById("texto").value="";
  
}