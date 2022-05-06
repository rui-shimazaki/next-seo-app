import Layout from '../components/templates/Layout';

export default function Home() {
  return (
    <Layout title='Home'>
      <p className='text-4xl'>welcome to Nextjsssss!</p>
    </Layout>
  );
}

// export async function getStaticProps() {
//   const mediaInfo = await getMediaInfo();

//   return {
//     props: {
//       mediaInfo,
//     },
//     revalidate: 3,
//   };
// }
