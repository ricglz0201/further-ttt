import React from 'react';
import { shallow } from 'enzyme';
import GameCell, { Props } from 'components/Game/GameCell'
import { mockedBoard } from 'components/Game/__mocks__/GameMocks'
import { getLabel } from 'functions/GameUtils'

jest.mock('functions/GameUtils')

describe('GameCell', () => {
  const mockedHandleClick = jest.fn();
  const props: Props = {
    board: mockedBoard,
    boardNumber: 0,
    cellNumber: 0,
    handleClick: mockedHandleClick,
  }
  let component: React.ReactElement;

  beforeEach(() => {
    component = <GameCell {...props} />;
  })

  it('renders without crashing', () => {
    shallow(component);
  });

  it('calls functions/hooks', () => {
    shallow(component);
    const { handleClick, ...rest } = props;
    expect(getLabel).toHaveBeenCalled();
    expect(getLabel).toHaveBeenCalledWith(rest)
  });
})
