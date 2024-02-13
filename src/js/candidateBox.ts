class CandidateBox extends HTMLElement {
    votes: number = 0;
    votesElement: HTMLParagraphElement = document.createElement('p');
    
    candidateName: string = this.getAttribute('name') || '';
    candidateNameElement: HTMLParagraphElement = document.createElement('p');

    constructor() {
        super();
        const box = document.createElement('div');
        box.className = 'candidate';
        this.candidateNameElement.textContent = this.candidateName;

        const addVoteButton = this.createButton('+', this.addVote.bind(this));
        const removeVoteButton = this.createButton('-', this.removeVote.bind(this));

        this.votesElement.textContent = this.votes.toString();

        box.appendChild(this.candidateNameElement);
        box.appendChild(addVoteButton);
        box.appendChild(removeVoteButton);
        box.appendChild(this.votesElement);
        box.appendChild(this.setupStyles());

        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(box);
    }

    setupStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .candidate {
                border: 1px solid #000;
                padding: 10px;
                margin: 10px;
            }
        `;
        return style;
    }

    createButton(content: string, callback: () => void ): HTMLButtonElement {
        const button = document.createElement('button');
        button.textContent = content;
        button.onclick = callback;
        return button;
    }

    addVote() {
        this.votes++;
        document.dispatchEvent(new CustomEvent("logAdded", {detail: { log: `+vote - total ${this.votes} -  ${this.candidateName}`}}))
        this.votesElement.textContent = this.votes.toString();
    }

    removeVote() {
        if (this.votes === 0) {
            return;
        }
        this.votes--;
        document.dispatchEvent(new CustomEvent('logAdded', {detail: { log: `-vote - total ${this.votes} -  ${this.candidateName}`}}))
        this.votesElement.textContent = this.votes.toString();
    }

    static get observedAttributes() {
        return ['name'];
    }

    attributeChangedCallback(name: string, _: string, newValue: string) {
        if (name === 'name') {
            this.candidateName = newValue;
            this.candidateNameElement.textContent = newValue;
        }
    }
}

customElements.define('candidate-box', CandidateBox);
