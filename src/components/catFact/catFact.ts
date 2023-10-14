class CatFact extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }

    connectedCallback(){
        this.render()
    }

    render(){
        this.shadowRoot!.innerHTML = `
        <img class="img1" src="https://cataas.com/cat/says/idk"></img>
        <img class="img1" src="https://cataas.com/cat/says/idk%20what%20im%20doing"></img>
        <img class="img1" src="https://cataas.com/cat/says/comunism"></img>
        <img class="img1" src="https://cataas.com/cat/says/omggg"></img>

        `
    }
}

customElements.define("cat-fact", CatFact);
export default CatFact;