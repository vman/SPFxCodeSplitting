import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import * as ReactDom from 'react-dom';

export interface IHelloWorldState {
  currentTime: string;
}

export default class HelloWorld extends React.Component<IHelloWorldProps, IHelloWorldState> {

  constructor(props: IHelloWorldProps) {

    super(props);

    this.state = {
      currentTime: ''
    };
  }

  public render(): React.ReactElement<IHelloWorldProps> {
    return (
      <div className={styles.helloWorld}>
        <button onClick={this._loadRating.bind(this)}>
          Load Rating
        </button>
        <button onClick={this._loadDocumentsClicked.bind(this)}>
          Load Documents
        </button>
        <button onClick={this._loadMomentClicked.bind(this)}>
          Load moment js
        </button>
        <div className="ratingsContainer">

        </div>
        <div className="momentContainer">
          {this.state.currentTime}
        </div>
        <div className="detailsContainer">

        </div>
      </div>
    );
  }

  private async _loadRating() {
    const component = await import(
      /* webpackChunkName: 'rating-component' */
      './RatingComponent'
    );

    const element: React.ReactElement<any> = React.createElement(
      component.RatingComponent
    );

    const currentElement = ReactDom.findDOMNode(this).getElementsByClassName("ratingsContainer")[0];
    ReactDom.render(element, currentElement);
  }

  private async _loadDocumentsClicked() {
    const component = await import(
      /* webpackChunkName: 'documentdetails-component' */
      './DetailsListDocumentsComponent'
    );

    const element: React.ReactElement<any> = React.createElement(
      component.DetailsListDocumentsComponent
    );

    const currentElement = ReactDom.findDOMNode(this).getElementsByClassName("detailsContainer")[0];
    ReactDom.render(element, currentElement);
  }

  private async _loadMomentClicked() {
    const moment = await import(
      /* webpackChunkName: 'moment-js' */
      'moment'
    );
    this.setState({
      currentTime: moment().format('LLLL')
    });
  }
}
