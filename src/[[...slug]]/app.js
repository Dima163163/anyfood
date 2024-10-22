import dynamic from 'next/dynamic';

const AppComponent = dynamic(() => import('../App'), {ssr: false});

export const App = () => {
  return <AppComponent/>
};