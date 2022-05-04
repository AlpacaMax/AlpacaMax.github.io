import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component className="bg-bgcolor" {...pageProps} />
}

export default MyApp
