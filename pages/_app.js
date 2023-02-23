import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "../components/Layout";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} pieces={data} />
      <Layout />
    </>
  );
}
