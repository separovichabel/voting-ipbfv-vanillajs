class CandidatesRatingBox extends HTMLElement {
    private shadow: ShadowRoot;
    constructor() {
        super();

        const box = document.createElement('div');
        box.className = 'candidates-rating-box';
        box.innerHTML = `
            <h1>Votações</h1>
        `;
        const candidateBoxList = document.createElement('candidate-box-list');
        const addCandidateBox = document.createElement('add-candidate-box');
        const logHistoryBox = document.createElement('log-history-box');


        box.appendChild(this.setupStyles());
        box.appendChild(addCandidateBox);
        box.appendChild(logHistoryBox);
        box.appendChild(candidateBoxList);

        this.shadow = this.attachShadow({ mode: 'open' });
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
}

customElements.define('candidates-rating-box', CandidatesRatingBox)
