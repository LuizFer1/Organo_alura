import "./rodape.css"


export default function Rodape() {
  return (<footer  className="footer">
        <section>
            <ul>
                <li>
                <a href="facebook.com" target="_blank">
                    <img src="\imagens\fb.png" alt="Facebook" />
                </a>
                <a href="x.com" target="_blank">
                    <img src="\imagens\tw.png" alt="Twitter" />
                </a>
                <a href="instagram.com" target="_blank">
                    <img src="\imagens\ig.png" alt="Instagram" />
                </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="Logo Alura" />
        </section>
        <section>
            <p>&copy; Todos os direitos reservados Alura</p>
        </section>
    </footer>
  );
}

