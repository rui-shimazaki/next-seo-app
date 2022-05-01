import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Entry } from 'contentful';
import { GetStaticPaths, GetStaticProps } from 'next';
import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import { IPosts, IPostsFields } from '../../@types/generated/contentful';
import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

interface Post {
  post: Entry<IPostsFields>;
}

interface Props {
  post: Entry<IPosts>;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

const Post: React.FC<Post> = ({ post }) => {
  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Layout title={post.fields.title}>
      <p className='m-4'>
        {'ID : '}
        {post.sys.id}
      </p>
      <p className='mb-8 text-xl font-bold'>{post.fields.title}</p>
      <p className='px-10'>
        {post ? documentToReactComponents(post.fields.content) : ''}
      </p>

      <Link href='/blog-page'>
        <div className='flex cursor-pointer mt-12'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 mr-3'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M11 19l-7-7 7-7m8 14l-7-7 7-7'
            />
          </svg>
          <span>Back to blog-page</span>
        </div>
      </Link>
    </Layout>
  );
};
export default Post;

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = await getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const post = await getPostData(params!.id);

  await console.log('post');
  await console.log(post);

  return {
    props: {
      post,
    },
  };
};
