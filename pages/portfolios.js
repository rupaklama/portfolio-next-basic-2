import BaseLayout from "../components/layouts/BaseLayout";

const { default: Header } = require("../components/Header")

const portfolios = ({ appProps }) => {
  return (
    <BaseLayout>
      <h1>Portfolios</h1>
      <h2>{appProps}</h2>
    </BaseLayout>
  );
}

export default portfolios;
