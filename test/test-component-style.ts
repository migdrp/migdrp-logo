const css = /*html*/ `
<style>
  :host {
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  p {
    color: black;
  }

  div {
    align-self: center;
    justify-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  migdrp-logo {
    width: 150px;
    height: 150px;
  }
</style>
`;

function getStyles(styleTagString: string): HTMLStyleElement {
  const dummyDiv = window.document.createElement('div');
  dummyDiv.innerHTML = styleTagString;
  const style = dummyDiv.querySelector('style') as HTMLStyleElement;
  return style;
}

export {
  css,
  getStyles
}


