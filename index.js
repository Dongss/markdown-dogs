var md = new Vue({
    el: '#editor',
    data: {
        input: '# Hello [Vue.js](https://github.com/vuejs/vue)'
    },
    filters: {
        marked: marked
    }
});

md.$watch('input', function(oldVal, newVal) {
    var elements = document.getElementsByTagName("code");
    
    for (var i= 0; i < elements.length; i++) {
        hljs.highlightBlock(elements[i]);
    }
});

var dl = new Vue({
    el: '#download',
    data: {
        selected: '.md',
        options: [
            { text: '.md', value: '.md' },
            { text: '.txt', value: '.txt' }
        ]
    },
    methods: {
        onDownload: function(type) {
            var fileName = 'download' + type;
            download(md.input, fileName, "text/plain");
        }
    }
});