window.onload = () => {
  if (screen.width > 991) {
    let rightSectionHeight =
      document.querySelector(".right-section").offsetHeight;
    document.querySelector(
      ".left-section"
    ).style.height = `${rightSectionHeight}px`;
  }
  addEventListener("resize", (event) => {
    if (screen.width > 991) {
      let rightSectionHeight =
        document.querySelector(".right-section").offsetHeight;
      document.querySelector(
        ".left-section"
      ).style.height = `${rightSectionHeight}px`;
    } else {
      document.querySelector(".right-section").offsetHeight;
      document.querySelector(".left-section").style.height = "auto";
    }
  });
};
