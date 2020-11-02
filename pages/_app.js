// sass - npm i sass, to install sass in next
// Need to import Global Style into App component in next js framework
import '../styles/main.scss';

// This is our main page/component.
// This app page which render first and it is a wrapper page or container
// responsible for rendering all other pages/components.

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }


// same as above
const App = (props) => {
  const { Component, pageProps } = props;

  // App component takes Children components & passes default props - 
  // pageProps is props from other pages & appProps is app's default props
  // pageProps is default props of page we are navigated to
  // which is at {...appProps.pageProps } of other component that we are navigating to

  // pageProps data is added to our appContext - global state Context object
  // to share with other components through 
  // getStaticProps/getInitialProps = async (context) => {}

  // appProps is default props of current component 
  return <Component {...pageProps} appProps='Hello World from App' />
}

export default App;

// getInitialProps receives a single argument called context,
// it's an object with the following properties:

// pathname - Current route. That is the path of the page in /pages
// query - Query string section of URL parsed as an object
// asPath - String of the actual path (including the query) shown in the browser
// req - HTTP request object (server only)
// res - HTTP response object (server only)
// err - Error object if any error is encountered during the rendering
