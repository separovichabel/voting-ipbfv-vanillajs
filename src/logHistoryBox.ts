class LogHistoryBox extends HTMLElement{
    eventLogs: string[] = [];
    constructor(){
        super();
        const box = document.createElement('div');
        box.className = 'log-history-box';
        box.innerHTML = `
            <h1>Log History Box</h1>
            <ul id="log-history-list"></ul>
        `;

        box.appendChild(this.setupStyles());

        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(box);

        document.addEventListener('logAdded', (event: Event) => {
            const log = (event as CustomEvent).detail.log;
            this.addLog(log);
        })
    }

    setupStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .log-history-box {
                border: 1px solid #000;
                padding: 10px;
                margin: 10px;
            }
        `;
        return style;
    }

    addLog(log: string){
        this.eventLogs.push(log);
        const logHistoryList = this.shadowRoot?.getElementById('log-history-list');
        if(logHistoryList){
            const logItem = document.createElement('li');
            logItem.textContent = log;
            logHistoryList.appendChild(logItem);
        }
    }
}

customElements.define('log-history-box', LogHistoryBox);