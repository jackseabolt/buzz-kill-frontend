import {
  PATRON_ADDED, patronAdded,
  ADD_PATRON, addPatron,
  HANDLE_ERROR, handleError,
  CLEAR_ERR0R, clearError,
  RENDER_PATRONS, renderPatrons,
  GET_PATRONS, getPatrons,
  ADD_DRINK, addDrink,
  DELETE_PATRON, deletePatron,
  DELETE_ALL, deleteAll
} from './index';

describe('addPatron', () => {
  it('Should return the action', () => {
    const table = 999; 
    const seat = 999;
    const gender = "m";
    const start = Date.now();
    const action = patronAdded(table, seat, gender, start);
    expect(action.type).toEqual(ADD_PATRON);
    expect(action.table).toEqual(table);
    expect(action.seat).toEqual(seat);
    expect(action.gender).toEqual(gender);
    expect(action.start).toEqual(start);
  });
  it('Should dispatch getPatrons', () => {
    
    const retPatron = {};

    global.fetch = jest.fn().mockImplementation( () =>
      Promise.resolve({
        ok: true,
        json() {
          return retPatron;
        }
      })
    );

    const dispatch = jest.fn();
    return addPatron()(dispatch).then( () => {
      expect(fetch).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalled();
      expect(typeof dispatch.mock.calls[0][0]).toEqual('function');
    });
  });
});