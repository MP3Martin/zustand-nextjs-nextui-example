export default function GithubRibbon () {
  return (
    <>
      <a className="github-fork-ribbon right-top fixed"
         href="https://github.com/MP3Martin/zustand-nextjs-nextui-example" data-ribbon="Fork me on GitHub"
         title="Fork me on GitHub">Fork me on GitHub</a>
      <style>{`
        .github-fork-ribbon:before
          {background-color: #3976a5;
        }`}
      </style>
    </>
  );
}
