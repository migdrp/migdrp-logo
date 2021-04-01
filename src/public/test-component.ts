import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { customElement } from '@polymer/decorators';
import '../../lib/migdrp-logo';

@customElement('test-component')
export class TestComponent extends PolymerElement {
  static get template(): HTMLTemplateElement {
    return html`
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
      <div>
        <p>migdrp-logo from Migdrp Components</p>
        <migdrp-logo text-size="28px" dark-color="#000000"></migdrp-logo>
      </div>
    `;
  }

  ready(): void {
    super.ready();
  }
}
