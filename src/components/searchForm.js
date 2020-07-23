import React from 'react'

function Form() {

    const categories = ["money", "quality", "power", "trending"]
    const keyword = {
        money,
        quality,
        power,
        trending
    }

    function searchForm(e) {
        e.preventDefault();
    }

    return <form onSubmit={searchForm}>
        <div className="input-container">
            <input name="devices" placeholder="Buscar dispositivos" />
            <button>Buscar</button>
        </div>
        <ul className="findForCategory">
            <li className="list-items">Precios</li>
            <li className="list-items">Calidad</li>
            <li className="list-items">Potencia</li>
            <li className="list-items">Tendencias</li>
        </ul>
    </form>
}

export default Form;