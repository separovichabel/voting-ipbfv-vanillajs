"use strict";
class AddCandidateBox extends HTMLElement {
    constructor() {
        super();
        this.count = 1;
        const box = document.createElement('div');
        box.className = 'add-candidate-box';
        const input = this.createInput();
        const button = this.createButton();
        button.onclick = () => this.AddCandidate(input.value);
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
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .add-candidate-input {
                background-color: rgba(255, 255, 255, 0.6);
                border: 0px;
            }

            .add-candidate-button {
                background-color: #a0d8a7;
                border: 0;
                padding: 0;
                margin: 10px;
            }
        `;
        return style;
    }
    AddCandidate(candidateName) {
        if (candidateName === '') {
            candidateName = 'Candidato sem nome ' + this.count;
            this.count++;
        }
        document.dispatchEvent(new CustomEvent('candidateAdded', {
            cancelable: false,
            detail: {
                name: candidateName
            }
        }));
        this.log(candidateName);
    }
    createInput() {
        const input = document.createElement('input');
        input.className = 'add-candidate-input';
        input.placeholder = 'Nome do candidato';
        return input;
    }
    createButton() {
        const button = document.createElement('button');
        button.className = 'add-candidate-button';
        button.textContent = 'Adicionar';
        return button;
    }
    log(str) {
        document.dispatchEvent(new CustomEvent('logAdded', {
            cancelable: false,
            detail: {
                log: `candidateAdded: ${str}`
            }
        }));
    }
}
customElements.define('add-candidate-box', AddCandidateBox);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkQ2FuZGlkYXRlQm94LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FkZENhbmRpZGF0ZUJveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxlQUFnQixTQUFRLFdBQVc7SUFHckM7UUFDSSxLQUFLLEVBQUUsQ0FBQztRQUhaLFVBQUssR0FBVyxDQUFDLENBQUM7UUFJZCxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsbUJBQW1CLENBQUM7UUFDcEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ2hDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVuQyxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBRXJELEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QixHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBRXBDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNuRCxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxXQUFXO1FBQ1AsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxLQUFLLENBQUMsV0FBVyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FrQm5CLENBQUM7UUFDRixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsWUFBWSxDQUFDLGFBQXFCO1FBQzlCLElBQUksYUFBYSxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQ3ZCLGFBQWEsR0FBRyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ25ELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQixDQUFDO1FBQ0csUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6RCxVQUFVLEVBQUUsS0FBSztZQUNqQixNQUFNLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLGFBQWE7YUFDdEI7U0FDSixDQUFDLENBQUMsQ0FBQTtRQUNILElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDM0IsQ0FBQztJQUVELFdBQVc7UUFDUCxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLEtBQUssQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUM7UUFDeEMsS0FBSyxDQUFDLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQztRQUN4QyxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsWUFBWTtRQUNSLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztRQUMxQyxNQUFNLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUNqQyxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsR0FBRyxDQUFDLEdBQVc7UUFDWCxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksV0FBVyxDQUFDLFVBQVUsRUFBRTtZQUMvQyxVQUFVLEVBQUUsS0FBSztZQUNqQixNQUFNLEVBQUU7Z0JBQ0osR0FBRyxFQUFFLG1CQUFtQixHQUFHLEVBQUU7YUFDaEM7U0FDSixDQUFDLENBQUMsQ0FBQTtJQUNQLENBQUM7Q0FDSjtBQUVELGNBQWMsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLEVBQUUsZUFBZSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBZGRDYW5kaWRhdGVCb3ggZXh0ZW5kcyBIVE1MRWxlbWVudHtcbiAgICBjb3VudDogbnVtYmVyID0gMTtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm94LmNsYXNzTmFtZSA9ICdhZGQtY2FuZGlkYXRlLWJveCc7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5jcmVhdGVJbnB1dCgpXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuY3JlYXRlQnV0dG9uKCk7XG4gICAgICAgIFxuICAgICAgICBidXR0b24ub25jbGljayA9ICgpID0+IHRoaXMuQWRkQ2FuZGlkYXRlKGlucHV0LnZhbHVlKVxuXG4gICAgICAgIGJveC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIGJveC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICBib3guYXBwZW5kQ2hpbGQodGhpcy5zZXR1cFN0eWxlcygpKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHNoYWRvdyA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICBzaGFkb3cuYXBwZW5kQ2hpbGQoYm94KTtcbiAgICB9XG5cbiAgICBzZXR1cFN0eWxlcygpIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IGBcbiAgICAgICAgICAgIC5hZGQtY2FuZGlkYXRlLWJveCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5hZGQtY2FuZGlkYXRlLWlucHV0IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5hZGQtY2FuZGlkYXRlLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2EwZDhhNztcbiAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIGA7XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICB9XG5cbiAgICBBZGRDYW5kaWRhdGUoY2FuZGlkYXRlTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGlmIChjYW5kaWRhdGVOYW1lID09PSAnJykge1xuICAgICAgICAgICAgY2FuZGlkYXRlTmFtZSA9ICdDYW5kaWRhdG8gc2VtIG5vbWUgJyArIHRoaXMuY291bnQ7XG4gICAgICAgICAgICB0aGlzLmNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjYW5kaWRhdGVBZGRlZCcsIHtcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogY2FuZGlkYXRlTmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSlcbiAgICAgICAgdGhpcy5sb2coY2FuZGlkYXRlTmFtZSlcbiAgICB9XG5cbiAgICBjcmVhdGVJbnB1dCgpOiBIVE1MSW5wdXRFbGVtZW50e1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0LmNsYXNzTmFtZSA9ICdhZGQtY2FuZGlkYXRlLWlucHV0JztcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSAnTm9tZSBkbyBjYW5kaWRhdG8nO1xuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuXG4gICAgY3JlYXRlQnV0dG9uKCk6IEhUTUxCdXR0b25FbGVtZW50e1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9ICdhZGQtY2FuZGlkYXRlLWJ1dHRvbic7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGljaW9uYXInO1xuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cblxuICAgIGxvZyhzdHI6IHN0cmluZykge1xuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbG9nQWRkZWQnLCB7XG4gICAgICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgIGxvZzogYGNhbmRpZGF0ZUFkZGVkOiAke3N0cn1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKVxuICAgIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhZGQtY2FuZGlkYXRlLWJveCcsIEFkZENhbmRpZGF0ZUJveCk7Il19