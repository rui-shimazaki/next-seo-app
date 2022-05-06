import Image from 'next/image';
import { FC, ReactElement } from 'react';

interface MyLoader {
  src: string;
  width: string;
  quality: string;
}

// const myLoader = ({ src, width, quality }: { string; string; string }) => {
//   return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
// };
// export default myLoader;

const Avatar: React.FC = () => (
  <Image src='/avatar.jpg' width={64} height={64} alt='My avatar' />
);
export default Avatar;
