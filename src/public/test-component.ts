import { MigdrpElement } from 'migdrp-framework/lib';
import '../../lib/migdrp-logo';

import { css } from './test-component-style';
import { getMainTemplate } from './test-component-template';

export class TestComponent extends MigdrpElement {
  connectedCallback(): void {
    this.renderElements();
  }

  public constructor() {
    super(css);
  }

  renderElements(): void {
    (this.shadowRoot as ShadowRoot).append(getMainTemplate());
  }
}

customElements.define('test-component', TestComponent);
