"use strict";
// create a component that count every votes and display the total votes
class VoteCounter extends HTMLElement {
    constructor() {
        super();
        this.count = 0;
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
            const event = e;
            if (event.detail.eventType === 'voteAdded')
                this.count++;
            if (event.detail.eventType === 'voteRemoved')
                this.count--;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidm90ZUNvdW50ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdm90ZUNvdW50ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdFQUF3RTtBQUV4RSxNQUFNLFdBQVksU0FBUSxXQUFXO0lBR2pDO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFGWixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBSU4sTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQyxHQUFHLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztRQUMvQixHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDckMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxXQUFXO1FBQ1AsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxLQUFLLENBQUMsV0FBVyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7O1NBZ0JuQixDQUFDO1FBQ0YsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELFlBQVk7UUFDUixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLFNBQVMsQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO1FBQ25DLFNBQVMsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQzVCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUN4QyxNQUFNLEtBQUssR0FBRyxDQUFnQixDQUFDO1lBQy9CLElBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEtBQUssV0FBVztnQkFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDeEQsSUFBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsS0FBSyxhQUFhO2dCQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUUxRCxTQUFTLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBRUQseUJBQXlCO1FBQ3JCLE1BQU0sc0JBQXNCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzRCxzQkFBc0IsQ0FBQyxTQUFTLEdBQUcsMEJBQTBCLENBQUM7UUFDOUQsc0JBQXNCLENBQUMsV0FBVyxHQUFHLGdCQUFnQixDQUFDO1FBQ3RELE9BQU8sc0JBQXNCLENBQUM7SUFDbEMsQ0FBQztDQUNKO0FBR0QsY0FBYyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjcmVhdGUgYSBjb21wb25lbnQgdGhhdCBjb3VudCBldmVyeSB2b3RlcyBhbmQgZGlzcGxheSB0aGUgdG90YWwgdm90ZXNcblxuY2xhc3MgVm90ZUNvdW50ZXIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgcHJpdmF0ZSBzaGFkb3c6IFNoYWRvd1Jvb3Q7XG4gICAgY291bnQgPSAwO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJveC5jbGFzc05hbWUgPSAndm90ZS1jb3VudGVyJztcbiAgICAgICAgYm94LmFwcGVuZENoaWxkKHRoaXMuc2V0dXBTdHlsZXMoKSk7XG4gICAgICAgIGJveC5hcHBlbmRDaGlsZCh0aGlzLm5ld1ZvdGVDb3VudCgpKTtcbiAgICAgICAgYm94LmFwcGVuZENoaWxkKHRoaXMubmV3Vm90ZUNvdW50ZXJEZXNjcmlwdGlvbigpKTtcblxuICAgICAgICB0aGlzLnNoYWRvdyA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICB0aGlzLnNoYWRvdy5hcHBlbmRDaGlsZChib3gpO1xuICAgIH1cbiAgICBzZXR1cFN0eWxlcygpIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IGBcbiAgICAgICAgICAgIC52b3RlLWNvdW50ZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBENTEzMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC52b3RlLWNvdW50IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnZvdGUtY291bnRlci1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIGA7XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICB9XG5cbiAgICBuZXdWb3RlQ291bnQoKSB7XG4gICAgICAgIGNvbnN0IHZvdGVDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIHZvdGVDb3VudC5jbGFzc05hbWUgPSAndm90ZS1jb3VudCc7XG4gICAgICAgIHZvdGVDb3VudC50ZXh0Q29udGVudCA9ICcwJztcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbG9nQWRkZWQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBlIGFzIEN1c3RvbUV2ZW50O1xuICAgICAgICAgICAgaWYoZXZlbnQuZGV0YWlsLmV2ZW50VHlwZSA9PT0gJ3ZvdGVBZGRlZCcpIHRoaXMuY291bnQrKztcbiAgICAgICAgICAgIGlmKGV2ZW50LmRldGFpbC5ldmVudFR5cGUgPT09ICd2b3RlUmVtb3ZlZCcpIHRoaXMuY291bnQtLTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdm90ZUNvdW50LnRleHRDb250ZW50ID0gdGhpcy5jb3VudC50b1N0cmluZygpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdm90ZUNvdW50O1xuICAgIH1cblxuICAgIG5ld1ZvdGVDb3VudGVyRGVzY3JpcHRpb24oKSB7XG4gICAgICAgIGNvbnN0IHZvdGVDb3VudGVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHZvdGVDb3VudGVyRGVzY3JpcHRpb24uY2xhc3NOYW1lID0gJ3ZvdGUtY291bnRlci1kZXNjcmlwdGlvbic7XG4gICAgICAgIHZvdGVDb3VudGVyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnVG90YWwgZGUgVm90b3MnO1xuICAgICAgICByZXR1cm4gdm90ZUNvdW50ZXJEZXNjcmlwdGlvbjtcbiAgICB9XG59XG5cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd2b3RlLWNvdW50ZXInLCBWb3RlQ291bnRlcik7Il19