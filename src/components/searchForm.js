import React from 'react'
import { useHistory } from 'react-router-dom'
import context from 'context/descriptionContext'


function Form() {

    const categories = ["money", "quality", "power", "trending"]
    const keyword = {
        money,
        quality,
        power,
        trending
    }

    console.log(keyword, categories)

    const history = useHistory()

    function getData(formData) {
        const devices = formData.get("devices");
        history.push(devices)
    }

    function searchForm(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        getData(formData);
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