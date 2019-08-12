(function () {
    customElements.define('customer-options', class extends HTMLElement {
        constructor() {
            super();
            const shadowRoot = this.attachShadow({ mode: 'open' });
            const template = document.currentScript.ownerDocument.querySelector('#template');
            const content = template.content;

            shadowRoot.appendChild(content.cloneNode(true));

            //make sure that sections are accuratly being displayed
            this.shadowRoot.querySelector("#showDetail").style.display = "none";
            this.shadowRoot.querySelector("#hideDetail").style.display = 'initial';
        };
    });
})()