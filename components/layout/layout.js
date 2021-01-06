import styles from '../GlobalStyle'

export default function Layout(props) {
    return (
        <>
            { props.children }
            <style jsx global>
                {styles}
            </style>
        </>
    )
}
