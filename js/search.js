// Search

(function () {
    let $imgs = $('.column-search img');
    let $search = $('#filter');
    let cache = [];

    $imgs.each(function () {
        cache.push({
            element: this,
            text: this.alt.trim().toLowerCase()
    });
    });

    function filter() {
        let query = this.value.trim().toLowerCase();
        cache.forEach(function (img) {
            let index = 0;
            if (query) {
                index = img.text.indexOf(query);
                img.element.style.display = 'none';
            }
            img.element.style.display = index === -1 ? 'none' : '';
        })
    }

    if ('oninput' in $search[0]) {
        $search.on('input', filter);
    } else {
        $search.on('keyup', filter);
    }
}());
