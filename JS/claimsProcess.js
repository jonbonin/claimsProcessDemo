(function () {
    customElements.define('claims-process', class extends HTMLElement {
        constructor() {
            super();
            const shadowRoot = this.attachShadow({
                mode: 'open'
            });
            const template = document.currentScript.ownerDocument.querySelector('#template');
            const content = template.content;

            shadowRoot.appendChild(content.cloneNode(true));

            //add event lister to show/Hide Detail
            this.shadowRoot.querySelector('#hideDetailAction')
                .addEventListener('click', this.hideDetail.bind(this));
        };

        hideDetail() {
            //display update form hide display table
            document.querySelector("#hideDetail").style.display = 'grid';
            document.querySelector("#showDetail").style.display = 'none';
        }
    });
})()