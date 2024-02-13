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
                border: 1px solid #000;
                padding: 10px;
                margin: 10px;
            }
        `;
        return style;
    }

    AddCandidate(candidateName: string) {console.log("Evento trigado!")
        if (candidateName === '') {
            candidateName = 'Candidato sem nome ' + this.count;
            this.count++;
        }
        this.dispatchEvent(new CustomEvent('candidateAdded', {
            cancelable: false,
            detail: {
                name: candidateName
            }
        }))
    }

    createInput(): HTMLInputElement{
        const input = document.createElement('input');
        input.placeholder = 'Nome do candidato';
        return input;
    }

    createButton(): HTMLButtonElement{
        const button = document.createElement('button');
        button.textContent = 'Adicionar';
        return button;
    }
}

customElements.define('add-candidate-box', AddCandidateBox);