class CandidateBoxList extends HTMLElement {
    private shadow: ShadowRoot;
    candidateBoxList: HTMLElement[] = [];
    constructor() {
        super();

        const box = document.createElement('div');
        box.className = 'candidates-box-list';
        
        document.addEventListener('candidateAdded', (event: Event)=> {
            const candidate = (event as CustomEvent).detail.name;
            this.addCandidate(candidate);
        })


        this.shadow = this.attachShadow({ mode: 'open' });
        this.shadow.appendChild(box);
    }

    addCandidate(candidate: string) {
        const candidateBox = document.createElement('candidate-box');
        candidateBox.setAttribute('name', candidate);
        this.shadow.appendChild(candidateBox);
        this.candidateBoxList.push(candidateBox);
    }
}

customElements.define('candidate-box-list', CandidateBoxList);