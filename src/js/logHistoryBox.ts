class LogHistoryBox extends HTMLElement{
    constructor(){
        super();
        const box = document.createElement('div');
        box.className = 'log-history-box';
        box.innerHTML = `
            <style>
                .log-history-box {
                    border: 1px solid #000;
                    padding: 10px;
                    margin: 10px;
                }
            </style>
            <h1>Log History Box</h1>
            <ul id="log-history-list"></ul>
            `;
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(box);
    }
    addLog(log: string){
        const logHistoryList = this.shadowRoot?.getElementById('log-history-list');
        if(logHistoryList){
            const logItem = document.createElement('li');
            logItem.textContent = log;
            logHistoryList.appendChild(logItem);
        }
    }
}