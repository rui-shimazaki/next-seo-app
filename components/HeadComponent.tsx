import Link from 'next/link';
import React, { FC, useEffect } from 'react';
import { memo, VFC } from 'react';
import Head from 'next/head';

type HeadComponent = {
  title: string;
};

const HeadComponent: FC<HeadComponent> = (props) => {
  const title = props.title;

  // const testDo = (title: string) => {
  //   console.log(title);
  //   console.log(typeof title);
  // };
  // useEffect(() => {
  //   testDo(title);
  // }, []);

  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};
export default HeadComponent;
