class AddCandidateBox extends HTMLElement{
    count: number = 1;
    
    constructor(){
        super();
        const box = document.createElement('div');
        box.className = 'add-candidate-box';
        const input = this.createInput()
        const button = this.createButton();
        
        button.onclick = () => this.AddCandidate(input.value)

        box.appendChild(input);
        box.appendChild(button);
        box.appendChild(this.setupStyles());
        
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(box);
    }

    setupStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .add-candidate-box {
            }

            .add-candidate-input {
                background-color: rgba(255, 255, 255, 0.6);
                border: 0px;
            }

            .add-candidate-button {
                background-color: #00ff5294;
                border: 0;
                padding: 0;
            }
        `;
        return style;
    }

    AddCandidate(candidateName: string) {
        if (candidateName === '') {
            candidateName = 'Candidato sem nome ' + this.count;
            this.count++;
        }
            document.dispatchEvent(new CustomEvent('candidateAdded', {
            cancelable: false,
            detail: {
                name: candidateName
            }
        }))
        this.log(candidateName)
    }

    createInput(): HTMLInputElement{
        const input = document.createElement('input');
        input.className = 'add-candidate-input';
        input.placeholder = 'Nome do candidato';
        return input;
    }

    createButton(): HTMLButtonElement{
        const button = document.createElement('button');
        button.className = 'add-candidate-button';
        button.textContent = 'Adicionar';
        return button;
    }

    log(str: string) {
        document.dispatchEvent(new CustomEvent('logAdded', {
            cancelable: false,
            detail: {
                log: `candidateAdded: ${str}`
            }
        }))
    }
}

customElements.define('add-candidate-box', AddCandidateBox);