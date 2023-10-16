import React from "react";

function Header() {
    return(
        <>
        <header className="App-header">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Sudoku</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="/play">Play</a>
                            <a class="nav-link" href="/pause">Pause</a>
                            <a class="nav-link disabled" href="/reset" aria-disabled="true">Reset</a>
                        </div>
                    </div> */}
                </div>
            </nav>
        </header>
        </>
    )
}

export default Header;