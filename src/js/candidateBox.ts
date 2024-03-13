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

        const addVoteButton = this.createAddButton(this.addVote.bind(this));
        const removeVoteButton = this.createRemoveButton(this.removeVote.bind(this));

        this.votesElement.textContent = this.votes.toString();

        box.appendChild(this.candidateNameElement);
        box.appendChild(this.votesElement);
        box.appendChild(addVoteButton);
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
                grid-template-columns: 60% 30% 5% 5%;
                background-color: #2e7c39;
                margin-top: 10px;
            }

            .add-button {
                background-color: #00ff5294;
                border: 0;
                padding: 0;
            }

            .remove-button {
                background-color: #ff000094;
                border: 0;
                padding: 0;
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
