javascript:($=>{
  switch(window.location.host.trim().toLowerCase()){
    /* Valor Globo */
    case "valor.globo.com":
      ((x)=>{
        x();
        window.setTimeout(x, 500);
      }(()=>{
        $("main")[0].style += ";overflow: scroll !important;max-height:100vh !important";
        $("div.barreiraJornada").remove();
        $("footer").remove();
      }))      
      break;
  }
})($)
