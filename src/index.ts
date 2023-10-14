import "./components/export"
import { getCatFact, getCat } from "./types/fetch";
class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const something = this.ownerDocument.createElement('div');
        this.shadowRoot?.appendChild(something);

        this.shadowRoot!.innerHTML = `

        <link rel="stylesheet" href="./styles.css">
      <center>  <h1>Cat Facts</h1>
        <button-container></button-container>
        <cat-fact></cat-fact>
        </center>
        `
    }
}

customElements.define('app-container', AppContainer)