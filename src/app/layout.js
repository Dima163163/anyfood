export const metadata = {
  title: 'Anyfood',
  description: 'food delivery service'
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div id='root'>
            {children}
          </div>
      </body>
    </html>
  );
}
