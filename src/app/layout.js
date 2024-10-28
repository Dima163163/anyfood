import App from '../App';
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Anyfood',
  description: 'food delivery service',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'  className={roboto.className}>
      <head>
      </head>
      <body>
        <div id='root'>
          <App>
            {children}
          </App>
        </div>
      </body>
    </html>
  );
}
