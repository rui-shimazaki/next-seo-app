// import { EntryCollection } from 'contentful';
// import { IPosts, IPostsFields } from '../@types/generated/contentful';
// import client from '../utils/client';

// export async function getMediaInfo() {
//   const mediaInfo: EntryCollection<IPostsFields> =
//     await client.getEntries<IPostsFields>({
//       // 下のpostsはcontentfulのContent modelのNameを指定。
//       content_type: 'posts',
//     });
//   const filteredPosts = posts.items.filter((post) => {
//     return 'posts' === String(post.sys.contentType.sys.id);
//   });

//   return filteredPosts;
// }
