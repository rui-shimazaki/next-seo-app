import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Asset, Entry } from 'contentful';
import { GetStaticPaths, GetStaticProps } from 'next';
import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import { ReactNode } from 'react';
import { IPosts, IPostsFields } from '../../@types/generated/contentful';
import MenuBtn from '../../components/atoms/button/MenuBtn';
import Layout from '../../components/templates/Layout';
import { getAssetData } from '../../lib/asset';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Avatar from '../../utils/image';

interface Post {
  post: Entry<IPostsFields>;
}

interface Props {
  post: Entry<IPosts>;
  asset: Asset | string;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

const Post: React.FC<Props> = ({ post, asset }) => {
  // const post: Entry<IPosts> = props.post;
  // const asset = props.asset;
  if (!post) {
    return <div>Loading...</div>;
  }

  // console.log('thumbnail');
  // console.log(post.fields.thumbnail?.sys.id);

  return (
    <Layout title={post.fields.title}>
      <Avatar />
      {/* <p className='w-full'>{post.fields.thumbnail.id ? post.fields.thumbnail.sys.id : ''}</p> */}
      <p className='m-4'>
        {'ID : '}
        {post.sys.id}
      </p>
      <p className='mb-8 text-xl font-bold'>{post.fields.title}</p>
      <p className='px-10'>
        {post.fields.intro ? documentToReactComponents(post.fields.intro) : ''}
      </p>
      <p className='px-10'>{documentToReactComponents(post.fields.content)}</p>
      <p className='px-10'>{post ? post.fields.supervisor : ''}</p>
      <MenuBtn />
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
  const post: Entry<IPosts> = await getPostData(params!.id);
  const thumbnail_id: string | undefined = await post.fields.thumbnail?.sys.id;

  // const thumbnail_id: string =;
  const asset: Asset | string =
    thumbnail_id !== undefined ? await getAssetData(thumbnail_id) : '';

  await console.log('post');
  await console.log(post);

  await console.log('asset');
  await console.log(asset);

  return {
    props: {
      post,
      asset,
    },
  };
};
