const mainTemplate = /* html */ `

<div>
  <p>migdrp-logo from Migdrp Framework</p>
  <migdrp-logo text-size='28px' dark-color='#000000'></migdrp-logo>
</div>


`;

export function getMainTemplate(): HTMLParagraphElement {
  const dummyDiv = window.document.createElement('div');
  dummyDiv.innerHTML = mainTemplate;
  const element = dummyDiv.children[0] as HTMLParagraphElement;
  dummyDiv.remove();

  return element as HTMLParagraphElement;
}
