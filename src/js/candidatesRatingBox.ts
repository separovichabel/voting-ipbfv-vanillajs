class CandidatesRatingBox extends HTMLElement {
    private shadow: ShadowRoot;
    constructor() {
        super();

        const box = document.createElement('div');
        box.className = 'candidates-rating-box';
       
        const headers = document.createElement('header');
        headers.className = 'candidate-rating-header';
        headers.innerHTML = `
            <h1>Votações</h1>
        `;
        const voteCounter = new VoteCounter();
        const candidateBoxList = new CandidateBoxList();
        const addCandidateBox = new AddCandidateBox();
        const logHistoryBox = new LogHistoryBox();


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
        sideContent.appendChild(logHistoryBox);

        this.shadow = this.attachShadow({ mode: 'open' });
        this.shadow.appendChild(box);
    }

    setupStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .candidates-rating-box {
                padding: 10px;
                background-color: #0D5131;
                display: grid;
                grid-template-columns: 70% 30%;
            }
            .candidate-rating-header {
                padding: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
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
