document.addEventListener("DOMContentLoaded", (event) => {
   Module.onRuntimeInitialized = async _ => {
     let tk = new verovio.toolkit();
     console.log("Verovio has loaded!");

     fetch("https://www.verovio.org/examples/downloads/Schubert_Lindenbaum.mei")
       .then( (response) => response.text() )
       .then( (meiXML) => {
         let svg = tk.renderData(meiXML, {});
         document.getElementById("rendering").innerHTML = svg;
       });

       tk.setOptions({
         scale: 35,
         portrait: true,
         adjustPageWidth: true
       });
   }
});