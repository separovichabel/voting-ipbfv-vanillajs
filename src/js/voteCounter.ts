// create a component that count every votes and display the total votes

class VoteCounter extends HTMLElement {
    private shadow: ShadowRoot;
    count = 0;
    constructor() {
        super();
        
        const box = document.createElement('div');
        box.className = 'vote-counter';
        box.appendChild(this.setupStyles());
        box.appendChild(this.newVoteCount());
        box.appendChild(this.newVoteCounterDescription());

        this.shadow = this.attachShadow({ mode: 'open' });
        this.shadow.appendChild(box);
    }
    setupStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .vote-counter {
                padding: 10px;
                background-color: #0D5131;
            }
            .vote-count {
                display: flex;
                justify-content: center;
                margin: 0;
            }

            .vote-counter-description {
                display: flex;
                justify-content: center;
                margin: 0;
            }
        `;
        return style;
    }

    newVoteCount() {
        const voteCount = document.createElement('h2');
        voteCount.className = 'vote-count';
        voteCount.textContent = '0';
        document.addEventListener('logAdded', (e) => {
            const event = e as CustomEvent;
            if(event.detail.eventType === 'voteAdded') this.count++;
            if(event.detail.eventType === 'voteRemoved') this.count--;
            
            voteCount.textContent = this.count.toString();
        });

        return voteCount;
    }

    newVoteCounterDescription() {
        const voteCounterDescription = document.createElement('p');
        voteCounterDescription.className = 'vote-counter-description';
        voteCounterDescription.textContent = 'Total de Votos';
        return voteCounterDescription;
    }
}


customElements.define('vote-counter', VoteCounter);