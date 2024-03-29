import Head from 'next/head';

export default function GithubRibbon () {
  return (
    <>
      <Head><link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.3/gh-fork-ribbon.min.css' /></Head>
      <a class='github-fork-ribbon right-top fixed' href='https://github.com/MP3Martin/zustand-nextjs-nextui-example' data-ribbon='Fork me on GitHub' title='Fork me on GitHub'>Fork me on GitHub</a>
      <style>{`
        .github-fork-ribbon:before
          {background-color: #3976a5;
        }`}
      </style>
    </>
  );
}
