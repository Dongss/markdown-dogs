var md = new Vue({
    el: '#editor',
    data: {
        input: '# Hello [Vue.js](https://github.com/vuejs/vue)',
        editMode: true
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

var menu = new Vue({
    el: '#menu',
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
        },
        onChangeMode: function(editMode) {
            md.editMode = !md.editMode
        }
    },
    computed: {
        mode: function() {
            return md.editMode ? 'Preview' : 'Edit markdown'
        }
    }
});