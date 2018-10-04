import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

export interface IHelloWorldState {
  components: any[];
}

export default class HelloWorld extends React.Component<IHelloWorldProps, IHelloWorldState> {

  constructor(props: IHelloWorldProps) {

    super(props);

    this.state = {
      components: []
    };
  }

  public render(): React.ReactElement<IHelloWorldProps> {
    return (
      <div className={styles.helloWorld}>
        <DefaultButton
          primary={true}
          text="Load"
          onClick={this._loadClicked.bind(this)}
        />
        {this.state.components.length > 0 &&

          this.state.components.map((Component, index) => (
            <Component key={index} />
          ))
        }
      </div>
    );
  }

  private async _loadClicked() {
    const component = await import(
      /* webpackChunkName: 'rating-component' */
      './RatingComponent'
    );

    this.setState({
      components: this.state.components.concat(component.RatingComponent)
    });
  }
}
