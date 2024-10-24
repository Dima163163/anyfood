import App from '../App';

export const metadata = {
  title: 'Anyfood',
  description: 'food delivery service'
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
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
