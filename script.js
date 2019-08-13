new ClipboardJS('.btn');
/*


function refreshPage(){
    window.location.reload();
} 

$(document).ready(function(){ 
    $("#siimage").hide(); var iframe = $('#iframe_publica').contents(); 
    iframe.find("#take_payment").click(function(){ 
        $("#siimage").show("slow"); 
    }); 
}); 

onclick="document.getElementById('siimage').src = 'simage/securimage_show.php?sid=' + Math.random(); return false"*/
/*
navigator.clipboard.readText()
.then(texto => {
	console.log("Aquí tenemos el texto: ", texto);
})
.catch(error => {
	// Por si el usuario no da permiso u ocurre un error
	console.log("Hubo un error: ", error);
});
*/

function paste() {
    var pasteText = document.querySelector("#iframe");
    pasteText.focus();
    document.execCommand("paste");
  }
  
  function paste2() {
    document.querySelector(".btn").addEventListener("click", paste);

  }
  