import styles from '../GlobalStyle'
import Header from 'components/container/Header'
import Footer from 'components/container/footer/'

export default function Layout({ children, ...props }) {
  return (
    <div {...props}>
      <Header />
      <main className="mx-auto max-w-screen-2xl bg-dark-bg">{children}</main>
      <Footer />
      <style jsx global>
        {styles}
      </style>
    </div>
  )
}
