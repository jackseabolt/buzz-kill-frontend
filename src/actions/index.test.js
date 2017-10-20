import {
  PATRON_ADDED, patronAdded,
  ADD_PATRON, addPatron,
  HANDLE_ERROR, handleError,
  CLEAR_ERROR, clearError,
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
    expect(action.table).toEqual(table);
    expect(action.seat).toEqual(seat);
    expect(action.gender).toEqual(gender);
    expect(action.start).toEqual(start);
  });
  
  it('Should dispatch getPatrons on success', () => {
    global.fetch = jest.fn().mockImplementation( () =>
      Promise.resolve({
        ok: true,
        json() {
          return;
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


  it('Should dispatch handleError on failure', () => {
    global.fetch = jest.fn().mockImplementation( () =>
      Promise.resolve({
        ok: fail,
        json() {
          return;
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

describe('handleError', () => {
  it('Should return the action', () => {
    const err = ''; 
    const action = handleError(err);
    expect(action.type).toEqual(HANDLE_ERROR);
    expect(action.err).toEqual(err);
  });
});

describe('clearError', () => {
  it('Should return the action', () => {
    const action = clearError();
    expect(action.type).toEqual(CLEAR_ERROR);
  });
});

describe('renderPatrons', () => {
  it('Should return the action', () => {
    const patrons = []; 
    const action = renderPatrons(patrons);
    expect(action.type).toEqual(RENDER_PATRONS);
    expect(action.patrons).toEqual(patrons);
  });
});

describe('getPatrons', () => {
  it('Should dispatch renderPatrons', () => {
    global.fetch = jest.fn().mockImplementation( () =>
      Promise.resolve({
        ok: true,
        json() {
          return;
        }
      })
    );
    const dispatch = jest.fn();
    return getPatrons()(dispatch).then( () => {
      expect(fetch).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalled();
      expect(typeof dispatch.mock.calls[0][0]).toEqual('object');
    });
  })

});

describe('addDrink', () => {
  it('Should dispatch getPatrons', () => {
    global.fetch = jest.fn().mockImplementation( () =>
      Promise.resolve({
        ok: true,
        json() {
          return;
        }
      })
    );
    const dispatch = jest.fn();
    return addDrink()(dispatch).then( () => {
      expect(fetch).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalled();
      expect(typeof dispatch.mock.calls[0][0]).toEqual('function');
    });
  })

});

describe('deletePatron', () => {
  it('Should dispatch getPatrons', () => {
    global.fetch = jest.fn().mockImplementation( () =>
      Promise.resolve({
        ok: true,
        json() {
          return;
        }
      })
    );
    const dispatch = jest.fn();
    return deletePatron()(dispatch).then( () => {
      expect(fetch).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalled();
      expect(typeof dispatch.mock.calls[0][0]).toEqual('function');
    });
  })

});

describe('deleteAll', () => {
  it('Should dispatch getPatrons', () => {
    global.fetch = jest.fn().mockImplementation( () =>
      Promise.resolve({
        ok: true,
        json() {
          return;
        }
      })
    );
    const dispatch = jest.fn();
    return deleteAll()(dispatch).then( () => {
      expect(fetch).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalled();
      expect(typeof dispatch.mock.calls[0][0]).toEqual('function');
    });
  })

});