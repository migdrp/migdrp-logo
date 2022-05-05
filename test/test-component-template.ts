const mainTemplate = /* html */ `
  <div>
    <p>migdrp-logo from Migdrp Components</p>
    <migdrp-logo text-size="28px" dark-color="#000000"></migdrp-logo>
  </div>
`;

export function getMainTemplate() {
  const dummyDiv = window.document.createElement('div');
  dummyDiv.innerHTML = mainTemplate;
  const element = dummyDiv.children[0];
  dummyDiv.remove();

  return element as HTMLDivElement;
}
