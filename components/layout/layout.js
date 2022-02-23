import styles from '../GlobalStyle'
import Header from 'components/container/Header/products'
import Footer from 'components/container/footer/'

export default function Layout(props) {
    return (
        <>
            <Header />
            <main>
                { props.children }
            </main>
            <Footer />
            <style jsx global>
                {styles}
            </style>
        </>
    )
}
