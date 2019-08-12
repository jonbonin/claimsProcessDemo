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

            //make sure that sections are accuratly being displayed
            this.shadowRoot.querySelector("#showDetail").style.display = 'none';
            this.shadowRoot.querySelector("#hideDetail").style.display = 'initial';

            //add event lister to show Hide Detail
            this.shadowRoot.querySelector('#hideDetailAction')
                .addEventListener('click', this.displayDetail.bind(this));
        };

        displayDetail() {
            //display update form hide display table
            this.shadowRoot.querySelector("#showDetail").style.display = 'initial';
            this.shadowRoot.querySelector("#hideDetail").style.display = 'none';
        }
    });
})()