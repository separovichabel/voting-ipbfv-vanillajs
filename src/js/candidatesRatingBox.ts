class CandidatesRatingBox extends HTMLElement {
    private shadow: ShadowRoot;
    constructor() {
        super();

        const box = document.createElement('div');
        box.className = 'candidates-rating-box';
        box.innerHTML = `
            <h1>Votações</h1>
        `;
        const addCandidateBox = document.createElement('add-candidate-box');
        addCandidateBox.addEventListener('candidateAdded', (event: Event)=> {
            console.log("evento recebido", event)
            const candidate = (event as CustomEvent).detail.name;
            this.addCandidate(candidate);
        })

        box.appendChild(addCandidateBox);
        box.appendChild(this.setupStyles());

        this.shadow = this.attachShadow({ mode: 'open' });
        // shadow.innerHTML = `Inside the shadow DOM`;
        this.shadow.appendChild(box);
    }

    setupStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .candidates-rating-box {
                border: 1px solid #000;
                padding: 10px;
                margin: 10px;
            }
        `;
        return style;
    }

    addCandidate(candidate: string) {
        const candidateBox = document.createElement('candidate-box');
        candidateBox.setAttribute('name', candidate);
        this.shadow.appendChild(candidateBox);
    }
}

customElements.define('candidates-rating-box', CandidatesRatingBox)
