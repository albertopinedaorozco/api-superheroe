const btMostrar = document.getElementById("btMostrar");
const resultado = document.getElementById("resultado");


btMostrar.addEventListener("click", generarHeroe)


function generarHeroe(){

     consecutivo = Math.floor((Math.random() * 732))+1;
     console.log(consecutivo);
    fetch("https://www.superheroapi.com/api.php/645665809279716/"+ consecutivo)
    .then((response)=>{
        console.log(response);
        return response.json();
        
    })
    .then((data)=>{

        console.log(data);
        res = ""
        res += "<p>"+ data.name +"</p>"
        res += "<p><img src='"+ data.image.url +"' width='300px' height='300px'/></p>"
      
        resultado.innerHTML = res;
    })
    


}