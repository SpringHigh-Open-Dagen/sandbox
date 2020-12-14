class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
          <style>
            nav {
              height: 40px;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: #0a0a23;
            }
            
            nav ul li {
              list-style: none;
              display: inline;
            }
            
            nav a {
              font-weight: 700;
              margin: 0 25px;
              color: #fff;
              text-decoration: none;
            }
          </style>
          <nav>
            <ul>
              <li><a href="about.html">Test</a></li>
              <li><a href="work.html">Work</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </nav>
        `;
    }
}

customElements.define("sh-header", Header);