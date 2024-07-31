// App Header
class Header extends HTMLElement {
    constructor() {
        super();
         // Create a shadow root
        // var shadow = this.attachShadow({mode: 'open'});
    }
    connectedCallback() {
        this.innerHTML = `
        <header class="header">
            <div class="container">
                <nav>
                    <ul>
                        <li>
                            <a href=""></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
      `;
    //   shadow.appendChild(connectedCallback);
    }
}

// App Footer
class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer">
            <div class="container">
                © ${new Date().getFullYear()}
            </div>
        </footer>
      `;
    }
}
customElements.define('app-header', Header);
customElements.define('app-footer', Footer);