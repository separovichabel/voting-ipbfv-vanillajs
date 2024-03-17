class CandidateBoxList extends HTMLElement {
    private shadow: ShadowRoot;
    box: HTMLElement;
    candidateBoxList: HTMLElement[] = [];
    constructor() {
        super();

        this.box = document.createElement('div');
        this.box.className = 'candidates-box-list';
        
        document.addEventListener('candidateAdded', (event: Event)=> {
            const candidate = (event as CustomEvent).detail.name;
            this.addCandidate(candidate);
        })

        this.box.appendChild(this.styles());
        
        this.shadow = this.attachShadow({ mode: 'open' });
        this.shadow.appendChild(this.box);
    }

    addCandidate(candidate: string) {
        const candidateBox = document.createElement('candidate-box');
        candidateBox.setAttribute('name', candidate);
        this.box.appendChild(candidateBox);
        this.candidateBoxList.push(candidateBox);
    }

    styles() {
        const style = document.createElement('style');
        style.textContent = `
            .candidates-box-list {
                display: grid;
                grid-template-columns: 50% 50%;
                gap: 10px;
            }
        `;
        return style;
    }
}

customElements.define('candidate-box-list', CandidateBoxList);