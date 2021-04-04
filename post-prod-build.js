const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        './dist/ng-elements-yase/runtime.js',
        './dist/ng-elements-yase/polyfills.js',
        './dist/ng-elements-yase/main.js',
    ]
    await fs.ensureDir('elements/angular-wc-sources')
    await concat(files, 'elements/angular-wc-sources/ws-sources.js');
    await fs.copyFile('./dist/ng-elements-yase/styles.css', 'elements/angular-wc-sources/wc-styles.css')
    
})()