export const createTypes = (...args) => args.reduce((a, c) => ({...a, [c]: c}), {});

export const createAsyncTypes = (type) =>
  ['REQUEST_', 'RECEIVE_', '_HAS_ERROR', 'INVALIDATE_']
  .map(t => t.startsWith('_') ? type+t : t+type);

export const reduce = (defaultState, handlers) => (state=defaultState, action) => {
  const handler = handlers[action.type];
  const reducer = handler || ((state) => state);
  return reducer(state, action);
};

export const REQUEST_OBJECT = (opts={}) => ({
  isFetching: true,
  didInvalidate: false,
  error: null,
  ...opts
});

export const RECEIVE_OBJECT = (data) => ({
  isFetching: false,
  lastUpdated: Date.now(),
  ...data
})

export const OBJECT_ERROR = (error) => ({
  isFetching: false,
  lastUpdated: Date.now(),
  error
});

export const INVALIDATE_OBJECT = {
  didInvalidate: true,
  isFetching: false
};