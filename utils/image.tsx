import Image from 'next/image';
import { FC, ReactElement } from 'react';
import React from 'react';

interface MyLoader {
  src: string;
  width: string;
  quality: string;
}

type Props = {
  src: string;
  width: string;
  height: string;
  quality: string;
};

type Example6<T> = (param: T) => T;

// const myLoader = ({ src, width, quality }: { string; string; string }) => {
//   return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
// };
// export default myLoader;

const Avatar: React.FC = () => (
  <Image src='/avatar.jpg' width={64} height={64} alt='My avatar' />
);
export default Avatar;

export const Avatar2: React.FC<Props> = (props) => {
  const { src, width, height, quality } = props;
  const dummyImage = `https:${src}`;

  return (
    <Image
      src={dummyImage}
      width={width}
      height={height}
      quality={quality}
      alt='My avatar'
    />
  );
};
