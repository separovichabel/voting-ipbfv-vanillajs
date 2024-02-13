class CandidateBox extends HTMLElement {
    votes: number = 1;
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

        this.votesElement.textContent = "1";

        box.appendChild(this.candidateNameElement);
        box.appendChild(addVoteButton);
        box.appendChild(removeVoteButton);
        box.appendChild(this.votesElement);

        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(box);
    }

    createButton(content: string, callback: () => void ): HTMLButtonElement {
        const button = document.createElement('button');
        button.textContent = content;
        button.onclick = callback;
        return button;
    }

    addVote() {
        this.dispatchEvent(new CandidateVoteEvent("voteAdded", this.candidateName))
        this.votes++;
        this.votesElement.textContent = this.votes.toString();
    }

    removeVote() {
        if (this.votes === 0) {
            return;
        }
        this.dispatchEvent(new CandidateVoteEvent('voteRemoved', this.candidateName))
        this.votes--;
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

class CandidateVoteEvent extends CustomEvent<EventData>{
    constructor(kind: string, candidateName: string){
        super(kind, {
            cancelable: false,
            detail: {
                candidateName
            }
        })
    }
}

type EventData = {
    candidateName: string;
}

customElements.define('candidate-box', CandidateBox);
