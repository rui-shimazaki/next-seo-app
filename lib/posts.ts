import { EntryCollection } from 'contentful';
import fetch from 'node-fetch';
import { IPosts, IPostsFields } from '../@types/generated/contentful';
import client from '../utils/client';

export async function getAllPostsData() {
  const posts: EntryCollection<IPostsFields> =
    await client.getEntries<IPostsFields>({
      // 下のpostsはcontentfulのContent modelのNameを指定。
      content_type: 'posts',
    });
  const filteredPosts = posts.items.filter((post) => {
    return 'posts' === String(post.sys.contentType.sys.id);
  });

  return filteredPosts;
}

export async function getAllPostIds() {
  const posts: EntryCollection<IPostsFields> =
    await client.getEntries<IPostsFields>({
      // 下のpostsはcontentfulのContent modelのNameを指定。
      content_type: 'posts',
    });
  const filteredPosts = posts.items.filter((post) => {
    return 'posts' === String(post.sys.contentType.sys.id);
  });

  return filteredPosts.map((filteredPost) => {
    let id = String(filteredPost.sys.id);
    console.log('id');
    console.log(id);

    return {
      params: {
        id: id,
      },
    };
  });
}

export async function getPostData(id: string) {
  const post = await client.getEntry<IPosts>(id).then((result) => {
    return result;
  });

  return post;
}
