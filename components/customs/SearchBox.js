import { connectSearchBox } from 'react-instantsearch-dom'
import css from 'styled-jsx/css'

function CustomSearchBox({ refine, placeholder, styleInput, styleForm, onBlur, children }) {
  return (
        <>
            <form action="" role="search" className={styleForm}>
                <input
                    id='algolia_search'
                    type="search"
                    autoCorrect="true"
                    autoComplete="off"
                    required={true}
                    onBlur={onBlur}
                    className={`inputSearch ${styleInput}`}
                    placeholder={placeholder}
                    onChange={event => refine(event.currentTarget.value)}
                />
                {children}
            </form>
            <style jsx>
                {inputStyle}
            </style>
        </>
  )
}

const inputStyle = css`
.inputSearch {
    outline: none;
}

.inputSearch::-webkit-search-cancel-button {
    transition: all ease-in-out 0.2s;
        -webkit-appearance: none;
        -webkit-user-modify: read-write !important;
        height: 1rem;
        content: url('/static/icons/xmark-solid.svg');
        background-color: #eee;
        border-radius: 50%;
        cursor: pointer;
        font-family: 'Material Icons';
}

`

export default connectSearchBox(CustomSearchBox)
