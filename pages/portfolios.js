import axios from 'axios';
import Link from 'next/link';

import BaseLayout from '../components/layouts/BaseLayout';

const { default: Header } = require('../components/Header');

const portfolios = ({ posts }) => {
  const renderPosts = posts => {
    return posts.map(post => (
      <li key={post.id}>
        <Link href={`/portfolios/${post.id}`}><a>{post.title}</a></Link>
      </li>
    ));
  };

  return (
    <BaseLayout>
      <h1>Portfolios</h1>
      <ul>{renderPosts(posts)}</ul>
    </BaseLayout>
  );
};

export default portfolios;

// Static page is created at Build Time
// Build Time is for Production server when creating build dir - npm run build
// npm start - to run production build or to server production app with no more compiling

// this func is called during the build (build time) in the server,
// not part of client javaScript
// & it will create static index html page & send it to browser
// After building, it provides Props to our page.
export const getStaticProps = async () => {
  // console.log(context)
  // When we make request, we are always receiving the SAME html page in the Production env
  // same random number on every request in Static Page
  // const number = Math.random();
  let posts = [];

  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    posts = response.data;
  } catch (e) {
    console.error(e);
  }

  // Make sure the returned object from getStaticProps is a plain Object
  // and not using Date, Map or Set.
  return {
    props: {
      // define props that we want to pass onto our page
      // key/value
      // message: 'Hello World!',
      posts: posts.slice(0, 10), // 10 posts
    },
  };
};
