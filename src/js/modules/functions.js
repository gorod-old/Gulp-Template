export function isWebp() {
    // check browser webp support
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    // add .webp and .no-webp classes for HTML
    testWebP(function (support) {
        let classname = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(classname);
    });
}