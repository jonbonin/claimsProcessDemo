(function () {
    customElements.define('customer-options', class extends HTMLElement {
        constructor() {
            super();
            const shadowRoot = this.attachShadow({ mode: 'open' });
            const template = document.currentScript.ownerDocument.querySelector('#template');
            const content = template.content;

            shadowRoot.appendChild(content.cloneNode(true));

            //add event lister to show/Hide Detail
            this.shadowRoot.querySelector('#showDetailAction')
                .addEventListener('click', this.displayDetail.bind(this));
            
        };

        displayDetail() {
            //display update form hide display table
            document.querySelector("#hideDetail").style.display = 'none';
            document.querySelector("#showDetail").style.display = 'grid';
        }
    });
})()