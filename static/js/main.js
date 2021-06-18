
const app = {}

window.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded()')
  console.log('initializeToolkit()')
  initializeToolkit()
  const input = document.getElementById('input')
  input.addEventListener('change', () => {
    app.file = input.files[0]
    console.log('app.file', app.file)
  })
  const submit = document.getElementById('submit')
  submit.addEventListener('click', async () => {
    console.log('File about to be uploaded!')
    await uploadFile(app.file)
    console.log('File uploaded!')
  })
})

function initializeToolkit () {
  Module.onRuntimeInitialized = async () => {
    console.log('Module.onRuntimeInitialized')
    app.tk = new verovio.toolkit();
    app.tk.setOptions({
      scale: 35,
      landscape:false ,
      adjustPageWidth: true
    });
  }
}

async function uploadFile (file) {
  const body = new FormData()
  body.append('file', file)
  
  const response = await fetch('/', { method: 'POST', body })
  console.log('response', response)
  const responseText = await response.text()
  console.log('uploadFile/responseText', responseText)

  // responseText needs to be a valid MEI
  const svg = app.tk.renderData(responseText, {});
  document.getElementById('rendering').innerHTML = svg;
}
