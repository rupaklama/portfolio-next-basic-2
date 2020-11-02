// next js provides dynamic routes - [id]
// To match a dynamic segment you can use the bracket syntax. This allows you to match named parameters.
// pages/portfolios/[id].js → same as /blog/:id (/blog/hello-world)

// If you want to access the router object inside any function component in your app, 
// you can use the useRouter hook
import { useRouter } from 'next/router';
import BaseLayout from '../../components/layouts/BaseLayout';

const PortfolioDetail = () => {
  // query prop to access value of named param of dynamic routes
  // here, the value is slug of our blog
  const { query } = useRouter();
  // console.log(query)

  return (
    <BaseLayout>
      I am portfolio detail page - {query.id}
    </BaseLayout>
  );
}

export default PortfolioDetail;
