import css from 'styled-jsx/css'

export default css`

.similarities-list {
    background-color: rgba(196, 196, 196, 0.33);
    scroll-snap-type: x mandatory;
}

.similarities-list::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    background-color: #fff;
    border-radius: 0.75rem;
}

.similarities-list::-webkit-scrollbar-thumb {
    background-color: #20D2C6;
    border-radius: 0.75rem;
}

.product {
    flex: 0 0 auto;
    scroll-snap-align: center;
}
`
