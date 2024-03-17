"use strict";
class CandidatesRatingBox extends HTMLElement {
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
        return headers;
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
customElements.define('candidates-rating-box', CandidatesRatingBox);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuZGlkYXRlc1JhdGluZ0JveC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jYW5kaWRhdGVzUmF0aW5nQm94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLG1CQUFvQixTQUFRLFdBQVc7SUFFekM7UUFDSSxLQUFLLEVBQUUsQ0FBQztRQUVSLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsR0FBRyxDQUFDLFNBQVMsR0FBRyx1QkFBdUIsQ0FBQztRQUV4QyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakMsTUFBTSxXQUFXLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUN0QyxNQUFNLGdCQUFnQixHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztRQUNoRCxNQUFNLGVBQWUsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO1FBQzlDLDZDQUE2QztRQUc3QyxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELFdBQVcsQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO1FBQ3ZDLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEQsV0FBVyxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7UUFFdkMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUNwQyxHQUFHLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdCLEdBQUcsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0IsV0FBVyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQyxXQUFXLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JDLFdBQVcsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDekMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzFDLDBDQUEwQztRQUUxQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsU0FBUztRQUNMLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakQsT0FBTyxDQUFDLFNBQVMsR0FBRyx5QkFBeUIsQ0FBQztRQUM5QyxPQUFPLENBQUMsU0FBUyxHQUFHOzs7U0FHbkIsQ0FBQztRQUVGLE9BQU8sT0FBTyxDQUFBO0lBQ2xCLENBQUM7SUFFRCxXQUFXO1FBQ1AsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxLQUFLLENBQUMsV0FBVyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBK0JuQixDQUFDO1FBQ0YsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELFlBQVk7UUFDUixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hELFNBQVMsQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO1FBRW5DLE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7Q0FDSjtBQUVELGNBQWMsQ0FBQyxNQUFNLENBQUMsdUJBQXVCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENhbmRpZGF0ZXNSYXRpbmdCb3ggZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgcHJpdmF0ZSBzaGFkb3c6IFNoYWRvd1Jvb3Q7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJveC5jbGFzc05hbWUgPSAnY2FuZGlkYXRlcy1yYXRpbmctYm94JztcbiAgICAgICBcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IHRoaXMuc2V0SGVhZGVyKCk7XG4gICAgICAgIGNvbnN0IHZvdGVDb3VudGVyID0gbmV3IFZvdGVDb3VudGVyKCk7XG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZUJveExpc3QgPSBuZXcgQ2FuZGlkYXRlQm94TGlzdCgpO1xuICAgICAgICBjb25zdCBhZGRDYW5kaWRhdGVCb3ggPSBuZXcgQWRkQ2FuZGlkYXRlQm94KCk7XG4gICAgICAgIC8vIGNvbnN0IGxvZ0hpc3RvcnlCb3ggPSBuZXcgTG9nSGlzdG9yeUJveCgpO1xuXG5cbiAgICAgICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWFpbkNvbnRlbnQuY2xhc3NOYW1lID0gJ21haW4tY29udGVudCc7XG4gICAgICAgIGNvbnN0IHNpZGVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNpZGVDb250ZW50LmNsYXNzTmFtZSA9ICdzaWRlLWNvbnRlbnQnO1xuXG4gICAgICAgIGJveC5hcHBlbmRDaGlsZCh0aGlzLnNldHVwU3R5bGVzKCkpO1xuICAgICAgICBib3guYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpO1xuICAgICAgICBib3guYXBwZW5kQ2hpbGQoc2lkZUNvbnRlbnQpO1xuICAgICAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChoZWFkZXJzKTtcbiAgICAgICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQodm90ZUNvdW50ZXIpO1xuICAgICAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChhZGRDYW5kaWRhdGVCb3gpO1xuICAgICAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjYW5kaWRhdGVCb3hMaXN0KTtcbiAgICAgICAgLy8gc2lkZUNvbnRlbnQuYXBwZW5kQ2hpbGQobG9nSGlzdG9yeUJveCk7XG5cbiAgICAgICAgdGhpcy5zaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICAgICAgdGhpcy5zaGFkb3cuYXBwZW5kQ2hpbGQoYm94KTtcbiAgICB9XG5cbiAgICBzZXRIZWFkZXIoKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICAgICAgaGVhZGVycy5jbGFzc05hbWUgPSAnY2FuZGlkYXRlLXJhdGluZy1oZWFkZXInO1xuICAgICAgICBoZWFkZXJzLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxoMT5Wb3Rhw6fDo28gUHJpbWVpcmEgSVBCIGRlIEZlcnJhejwvaDE+XG4gICAgICAgICAgICA8aDM+RWxlacOnw6NvIGRlIE9maWNpYWlzIC0gRGlhY29uYXRvPC9oMj5cbiAgICAgICAgYDtcblxuICAgICAgICByZXR1cm4gaGVhZGVyc1xuICAgIH1cblxuICAgIHNldHVwU3R5bGVzKCkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gYFxuICAgICAgICAgICAgLmNhbmRpZGF0ZXMtcmF0aW5nLWJveCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNhbmRpZGF0ZS1yYXRpbmctaGVhZGVyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVhZGVyLWRpdiB7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1haW4tY29udGVudCB7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zaWRlLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICBgO1xuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuXG4gICAgbmV3Vm90ZUNvdW50KCkge1xuICAgICAgICBjb25zdCB2b3RlQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdm90ZUNvdW50LmNsYXNzTmFtZSA9ICd2b3RlLWNvdW50JztcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB2b3RlQ291bnQ7XG4gICAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2NhbmRpZGF0ZXMtcmF0aW5nLWJveCcsIENhbmRpZGF0ZXNSYXRpbmdCb3gpXG4iXX0=