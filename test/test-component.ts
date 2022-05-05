
import '../lib';
import { css, getStyles } from './test-component-style';
import { getMainTemplate } from './test-component-template';

export class TestComponent extends HTMLElement {

  public template = getMainTemplate();
  private styleElement: HTMLStyleElement;

  public connectedCallback(): void {
    this.renderElements();
  }
  
  public constructor() {
    super();

    this.styleElement = getStyles(css as string);
    this.attachShadow({ mode: 'open' });
    (this.shadowRoot as ShadowRoot).append(this.styleElement);
  }
  
  public renderElements(): void {
    this.shadowRoot.append(this.template as any);
  }
}


customElements.define('test-component', TestComponent);