const Header = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand ml-5" href="index.html">
                <img src="./imag/logotipo.jpeg" alt="fseletro" width="120px" />
            </a>



            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Alterna navegação">
                <span class="navbar-toggler-icon"></span>
            </button>



            <div className="collapse navbar-collapse justify-content-end" id="collapseNavbar">
                <ul className="nav navbar-nav">
                    <li className="nav-item mr-5">
                        <a className="nav-link text-black" href="produtos.html">Produtos</a>
                    </li>

                    <li className="nav-item mr-5">
                        <a className="nav-link text-black" href="lojas.html">Nossas lojas</a>
                    </li>

                    <li className="nav-item mr-5">
                        <a className="nav-link text-black" href="contato.html">Contato</a>
                    </li>

                    <li className="nav-item mr-5">
                        <a className="nav-link text-black disabled" href="pedidos.html">Desativado</a>
                    </li>
                </ul>

            </div>
        </nav>

    );
}