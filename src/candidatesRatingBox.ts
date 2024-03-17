class CandidatesRatingBox extends HTMLElement {
    private shadow: ShadowRoot;
    constructor() {
        super();

        const box = document.createElement('div');
        box.className = 'candidates-rating-box';
       
        const headers = this.setHeader();
        const voteCounter = new VoteCounter();
        const candidateBoxList = new CandidateBoxList();
        const addCandidateBox = new AddCandidateBox();
        // const logHistoryBox = new LogHistoryBox();


        const mainContent = document.createElement('div');
        mainContent.className = 'main-content';
        const sideContent = document.createElement('div');
        sideContent.className = 'side-content';

        box.appendChild(this.setupStyles());
        box.appendChild(mainContent);
        box.appendChild(sideContent);
        mainContent.appendChild(headers);
        mainContent.appendChild(voteCounter);
        mainContent.appendChild(addCandidateBox);
        mainContent.appendChild(candidateBoxList);
        // sideContent.appendChild(logHistoryBox);

        this.shadow = this.attachShadow({ mode: 'open' });
        this.shadow.appendChild(box);
    }

    setHeader() {
        const headers = document.createElement('header');
        headers.className = 'candidate-rating-header';
        headers.innerHTML = `
            <h1>Votação Primeira IPB de Ferraz</h1>
            <h3>Eleição de Oficiais - Diaconato</h2>
        `;

        return headers
    }

    setupStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .candidates-rating-box {
                padding: 10px;
            }

            .candidate-rating-header {
                padding: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
            }

            h1 {
                margin: 0;
            }

            h3 {
                margin: 0;
            }

            .header-div {

            }

            .main-content {
            }

            .side-content {
                
            }
        `;
        return style;
    }

    newVoteCount() {
        const voteCount = document.createElement('div');
        voteCount.className = 'vote-count';
        
        return voteCount;
    }
}

customElements.define('candidates-rating-box', CandidatesRatingBox)
