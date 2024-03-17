// create a component that count every votes and display the total votes

class VoteCounter extends HTMLElement {
    private shadow: ShadowRoot;
    box: HTMLElement;
    count = 0;
    corum = 0;
    constructor() {
        super();
        
        this.box = document.createElement('div');
        this.box.className = 'vote-content';

       this.setCounter();
       this.setCorumConfigurator();

        this.shadow = this.attachShadow({ mode: 'open' });
        this.shadow.appendChild(this.box);
    }

    setCorumConfigurator() {
        const corumConfigurator = document.createElement('div');
        corumConfigurator.setAttribute('name', 'Corum Configurator');
        this.box.appendChild(corumConfigurator);
    }

    setCounter() {
        const box = document.createElement('div');
        box.className = 'vote-counter';
        box.appendChild(this.setupStyles());

        const div = document.createElement('div');
        div.className = 'vote-counter-corum';
        div.appendChild(this.newVoteCount());
        // div.appendChild(this.newCorum());
        box.appendChild(div);

        box.appendChild(this.newVoteCounterDescription());
        this.box.appendChild(box);
    }

    setupStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .vote-counter {
                padding: 10px;
           }

           .vote-counter-corum {
                display: flex;
                justify-content: center;
                margin: 0;
            }

            .vote-counter-description {
                display: flex;
                justify-content: center;
                margin: 0;
            }

            h1 {
                font-size: 3em;
                margin: 0;
            }
        `;
        return style;
    }

    newVoteCount() {
        const voteCount = document.createElement('h1');
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

    newCorum() {
        const voteCount = document.createElement('h1');
        voteCount.className = 'vote-corum';
        voteCount.textContent = ' / 0';

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