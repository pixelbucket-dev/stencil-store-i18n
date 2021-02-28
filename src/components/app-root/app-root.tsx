import { Component, h } from '@stencil/core';
import state from '../../global/store';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  private languageSelector: HTMLSelectElement;

  changeLanguage(ev: Event) {
    console.log('ev', ev);
    state.lang = this.languageSelector.value;
  }

  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
          <select ref={el => (this.languageSelector = el)} onInput={ev => this.changeLanguage(ev)}>
            <option value="en">Englisch</option>
            <option value="de">Deutsch</option>
          </select>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/profile/:name" component="app-profile" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
