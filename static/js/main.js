document.addEventListener("DOMContentLoaded", (event) => {
  Module.onRuntimeInitialized = async _ => {
    let tk = new verovio.toolkit();
    console.log("Verovio has loaded!");
    
    if(typeof fileList !== 'undefined')
      fetch(fileList[0])
    else
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

const inputElement = document.getElementById("input");

inputElement.addEventListener("change", handleFiles, false);

function handleFiles() {
  const fileList = this.files; /* now you can work with the file list */
}