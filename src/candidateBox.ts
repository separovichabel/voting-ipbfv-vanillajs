class CandidateBox extends HTMLElement {
    votes: number = 0;
    votesElement: HTMLParagraphElement = document.createElement('h1');
    
    candidateName: string = this.getAttribute('name') || '';
    candidateNameElement: HTMLParagraphElement = document.createElement('h1');

    constructor() {
        super();
        const box = document.createElement('div');
        box.className = 'candidate';
        this.candidateNameElement.textContent = this.candidateName;

        const addVoteButton = this.createAddButton(this.addVote.bind(this));
        const removeVoteButton = this.createRemoveButton(this.removeVote.bind(this));

        this.votesElement.textContent = this.votes.toString();

        box.appendChild(this.candidateNameElement);
        box.appendChild(addVoteButton);
        box.appendChild(this.votesElement);
        box.appendChild(removeVoteButton);
        box.appendChild(this.setupStyles());

        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(box);
    }

    setupStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .candidate {
                padding: 10px;
                display: grid;
                grid-template-columns: 60% 40%;
                background-color: #a0d8a7;
                height: 100px;
                border-radius: 10px;
            }

            .add-button {
                background-color: #44ad6694;
                height: 100%;
                width: 100%;
                border: 0;
                padding: 0;
                font-size: 2em;
                border-radius: 10px 10px 0 0;
            }

            .remove-button {
                background-color: #ff000094;
                border: 0;
                padding: 0;
                font-size: 2em;
                border-radius: 0 0 10px 10px;
            }

            h1 {
                margin: 0;
                padding: 0;
                text-align: center;
                align-self: center;
                font-size: 2em;
            }
        `;
        return style;
    }

    createAddButton(callback: () => void ): HTMLButtonElement {
        const button = document.createElement('button');
        button.className = 'add-button';
        button.textContent = '+';
        button.onclick = callback;
        return button;
    }


    createRemoveButton(callback: () => void ): HTMLButtonElement {
        const button = document.createElement('button');
        button.className = 'remove-button';
        button.textContent = '-';
        button.onclick = callback;
        return button;
    }

    addVote() {
        this.votes++;
        document.dispatchEvent(new CustomEvent("logAdded", {
            detail: { 
                log: `+vote - total ${this.votes} -  ${this.candidateName}`,
                eventType: 'voteAdded'
            }
        }))
        this.votesElement.textContent = this.votes.toString();
    }

    removeVote() {
        if (this.votes === 0) {
            return;
        }
        this.votes--;
        document.dispatchEvent(new CustomEvent('logAdded', {
            detail: { 
                log: `-vote - total ${this.votes} -  ${this.candidateName}`,
                eventType: 'voteRemoved'
            }
        }))
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
