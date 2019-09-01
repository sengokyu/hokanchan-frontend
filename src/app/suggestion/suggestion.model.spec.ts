import { createInitialData } from './suggestion.model';

describe('createInitialData', () => {
  it('初期データを作成できる', () => {
    // Given
    // When
    const actual = createInitialData();

    // When
    expect(actual.length).toBe(45);
  });
});
