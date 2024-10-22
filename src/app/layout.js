import { Layout } from '../components/Layout/Layout';
import Providers from './providers';

export const metadata = {
  title: 'Anyfood',
  description: 'food delivery service'
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div id='root'>
          <Providers>
            <Layout>
              {children}
            </Layout>
          </Providers>
          </div>
      </body>
    </html>
  );
}
