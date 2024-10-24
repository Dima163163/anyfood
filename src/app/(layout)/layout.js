import { Layout } from '../../components/Layout/Layout';

export default function LayoutApp({children}) {
  return (
    <Layout>
      {children}
    </Layout>
  );
}