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
            //I was not able to test this because I could not keep this component on the page
            //When I call the function to show the detailed version of the page, a force reload
            //seems to be happening. Because of that I am undable to test if this works

            //display update form hide display table
            this.shadowRoot.querySelector("#hideDetail").style.display = 'grid';
            this.shadowRoot.querySelector("#showDetail").style.display = 'none';
        }
    });
})()