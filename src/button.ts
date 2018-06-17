import { PolymerElement, html } from '@polymer/polymer';

class ButtonElement extends PolymerElement {
  static get template() {
    return html`
      <div class="button">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('ui-button', ButtonElement);
