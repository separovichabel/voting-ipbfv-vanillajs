class AddCandidateBox extends HTMLElement{

    count: number = 1;
    
    constructor(){
        super();
        const box = document.createElement('div');
        const input = this.createInput()
        const button = this.createButton();
        
        button.onclick = () => this.AddCandidate(input.value)

        box.appendChild(input);
        box.appendChild(button);
        
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(box);
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