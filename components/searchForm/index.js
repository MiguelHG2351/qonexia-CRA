import React from 'react'
// import context from 'context/descriptionContext'

function Form () {
    const categories = ['money', 'quality', 'power', 'trending']
    const keyword = {
        money: 'money',
        quality: 'quality',
        power: 'power',
        trending: 'trending'
    }

    console.log(keyword, categories)

    function searchForm (e) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        console.log(formData)
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

export default Form
