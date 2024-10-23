import { Layout } from '../../components/Layout/Layout';
import Providers from '../providers';
export default function LayoutPage({children}) {
  return (
    <Providers>
      <Layout>
        {children}
      </Layout>
    </Providers>
  );
}