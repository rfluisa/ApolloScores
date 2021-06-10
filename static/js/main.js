function handleFiles() {
  const fileList = this.files; /* now you can work with the file list */
  
  Module.onRuntimeInitialized = async _ => {
    let tk = new verovio.toolkit();
      
    fetch(fileList[0])
    .then( (response) => response.text() )
    .then( (meiXML) => {
        let svg = tk.renderData(meiXML, {});
        document.getElementById("rendering").innerHTML = svg;
      });

    tk.setOptions({
        scale: 35,
        landscape:false ,
        adjustPageWidth: true
    });
  }
}