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
  dateFormatter: date => `Édité le ${date.toLocaleDateString()}`,
  readMore: <>→</>,
  postFooter: null,
  darkMode: false,
  titleSuffix: " - Dazibao"
  // navs: [
  //   {
  //     url: "https://github.com/shuding/nextra",
  //     name: "Nextra",
  //   },
  // ],
};

export default theme;
