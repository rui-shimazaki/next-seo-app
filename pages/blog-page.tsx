import { EntryCollection } from 'contentful';
import { IPostsFields } from '../@types/generated/contentful';
import Layout from '../components/Layout';
import Post from '../components/Post';
import { getAllPostsData } from '../lib/posts';

interface Posts {
  posts: Array<IPostsFields>;
}

const Blog: React.FC<Posts> = ({ posts }) => {
  return (
    <Layout title='Blog'>
      <ul className='m-10'>
        {posts && posts?.map((post) => <Post key={post.slug} post={post} />)}
      </ul>
    </Layout>
  );
};

export default Blog;

export async function getStaticProps() {
  const posts = await getAllPostsData();

  return {
    props: { posts },
  };
}
