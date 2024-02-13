class CandidatesRatingBox extends HTMLElement {
    private shadow: ShadowRoot;
    logHistoryBox: HTMLElement;
    constructor() {
        super();

        const box = document.createElement('div');
        box.className = 'candidates-rating-box';
        box.innerHTML = `
            <h1>Votações</h1>
        `;
        const addCandidateBox = document.createElement('add-candidate-box');
        addCandidateBox.addEventListener('candidateAdded', (event: Event)=> {
            const candidate = (event as CustomEvent).detail.name;
            this.addCandidate(candidate);
        })

        this.logHistoryBox = document.createElement('log-history-box');

        box.appendChild(addCandidateBox);
        box.appendChild(this.setupStyles());
        box.appendChild(this.logHistoryBox);

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

                display: flex;
            }
        `;
        return style;
    }

    addCandidate(candidate: string) {
        const candidateBox = document.createElement('candidate-box');
        candidateBox.setAttribute('name', candidate);
        this.shadow.appendChild(candidateBox);
        candidateBox.addEventListener('voteAdded', (event: Event) => {
            const candidate = (event as CustomEvent).detail.candidateName;
            this.addLog(`Voto adicionado para ${candidate}`);
        })
        candidateBox.addEventListener('voteRemoved', (event: Event) => {
            const candidate = (event as CustomEvent).detail.candidateName;
            this.addLog(`Voto removido para ${candidate}`);
        })
        this.logHistoryBox.dispatchEvent(new CustomEvent('logAdded', {
            detail: {
                log: `Candidato adicionado: ${candidate}`
            }
        }));
    }

    addLog(log: string){
        const logEvent = new CustomEvent('logAdded', {
            detail: {
                log
            }
        });
        this.logHistoryBox.dispatchEvent(logEvent);
    }

}

customElements.define('candidates-rating-box', CandidatesRatingBox)
