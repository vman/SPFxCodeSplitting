import * as React from 'react';
import { Rating, RatingSize } from 'office-ui-fabric-react/lib/Rating';

export class RatingComponent extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <Rating
          id={'largeRatingStar'}
          min={1}
          max={5}
          size={RatingSize.Large}
          rating={3}
        />
      </div>
    );
  }
}