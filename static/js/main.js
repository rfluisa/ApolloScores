/*
<!-- Score.vue -->
<template>
    <div v-html="renderedScore"></div>
</template>

<script>

*/
/*
import verovio from 'verovio'; // load verovio as a webpack external

export default {
    data() {
        return {
            verovioToolkit: null,
            renderedScore: null,
            scale: 40,
            landscape: false,
            page: 1,
        };
    },
    created() {
        this.verovioToolkit = new verovio.toolkit();
    },
    mounted() {
        this.setVerovioOptions();
        this.loadScoreFile('/path/to/score.mei');
    },
    watch: {
        scale() {
            this.rerenderCurrentView();
        },
        page(value) {
            this.rerenderCurrentView();
        },
    },
    methods: {
        setVerovioOptions() {
            this.verovioToolkit.setOptions({
                scale: this.scale,
                noHeader: true,
                noFooter: true,
                landscape: false,
                pageWidth: this.width * (100 / this.scale),
                pageHeight: this.height * (100 / this.scale),
            });
        },
        async loadScoreFile(path) {
            const response = await fetch(path);
            const data = await response.text();
            this.renderedScore = this.verovioToolkit.renderData(data, {});
        },
        rerenderCurrentView() {
            this.setVerovioOptions();
            this.verovioToolkit.redoLayout();
            this.renderedScore = this.verovioToolkit.renderToSVG(this.page, {});
        },
    },
};*/
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