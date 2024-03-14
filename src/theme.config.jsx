const theme = {
  footer: <p>Po Mauguet - 2024 - Made with Nextra</p>,
  head: ({ title, meta }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  readMore: <>→</>,
  postFooter: null,
  darkMode: false,
  // navs: [
  //   {
  //     url: "https://github.com/shuding/nextra",
  //     name: "Nextra",
  //   },
  // ],
};

export default theme;
