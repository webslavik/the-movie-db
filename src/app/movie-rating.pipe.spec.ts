import { MovieRatingPipe } from './movie-rating.pipe';

describe('MovieRatingPipe', () => {
  it('create an instance', () => {
    const pipe = new MovieRatingPipe();
    expect(pipe).toBeTruthy();
  });
});
