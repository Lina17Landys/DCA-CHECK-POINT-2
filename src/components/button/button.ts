class Button extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }



 render() {
    this.shadowRoot!.innerHTML = `
        <button>Cat Fact!</button>
        `;
  }

}
 


customElements.define("button-container", Button);
export default Button;
