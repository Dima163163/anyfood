import { Layout } from '../../components/Layout/Layout';

export default function LayoutPage({children}) {
  return (
    <Layout>
      {children}
    </Layout>
  );
}