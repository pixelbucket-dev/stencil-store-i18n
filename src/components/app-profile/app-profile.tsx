import { Component, Prop, h } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import state from '../../global/store';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
  shadow: true,
})
export class AppProfile {
  @Prop() match: MatchResults;

  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }

  render() {
    const name = this.normalize(this.match.params.name);

    if (this.match && this.match.params.name) {
      return (
        <div class="app-profile">
          <p>
            {state.t(`Hello! My name is {{name}}. My name was passed in through a route param!`, {
              name,
            })}
          </p>
        </div>
      );
    }
  }
}
