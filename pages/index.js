import Head from 'next/head';
import withLayout from '../lib/withLayout';

const Index = () => (
  <div style={{ padding: '10px 45px' }}>
    <Head>
      <title>Warhammer Drones | Visuals for Architectural Firms</title>
      <meta
        name="description"
        content="This is the description of the Index page"
      />
    </Head>
    <h1>Drone services for architectural firms.</h1>
    <h3>hello(at)warhammerdrones.com</h3>
    <p>Coming Soon...</p>
  </div>
);

export default withLayout(Index);
