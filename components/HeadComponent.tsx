import Link from 'next/link';
import React, { FC } from 'react';
import { memo, VFC } from 'react';
import Head from 'next/head';

type HeadComponent = {
  title: string;
};

const HeadComponent: FC<HeadComponent> = (props) => {
  const title = props;

  return (
    <Head>
      <title>テスト</title>
      {/* <title>{title}</title> */}
    </Head>
  );
};
export default HeadComponent;
