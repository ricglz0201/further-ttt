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
    currentBoard: -1,
    handleClick: mockedHandleClick,
  }
  let component: React.ReactElement;

  beforeEach(() => {
    jest.clearAllMocks();
    component = <GameCell {...props} />;
  })

  it('renders without crashing', () => {
    shallow(component);
  });

  it('calls functions/hooks', () => {
    shallow(component);
    const { handleClick, currentBoard, ...rest } = props;
    expect(getLabel).toHaveBeenCalled();
    expect(getLabel).toHaveBeenCalledWith(rest)
  });

  test('onClick', () => {
    const {boardNumber, cellNumber} = props;
    const gameCell = shallow(component);
    gameCell.simulate('click');
    expect(mockedHandleClick).toHaveBeenCalled();
    expect(mockedHandleClick).toHaveBeenCalledWith(boardNumber, cellNumber);
  });
})
