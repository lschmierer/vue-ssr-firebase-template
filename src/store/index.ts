import { createStore as _createStore, Store, useStore as _useStore } from 'vuex'

import FirestoreRepository from '../repositories/FirestoreRepository'

import { createCounterModule, CounterState } from './counter'

export function useStore (): Store<State> {
  return _useStore()
}

export interface State {
  counter: CounterState
}

export const createStore = (firestoreRepository: FirestoreRepository): Store<State> => _createStore({
  modules: {
    counter: createCounterModule(firestoreRepository)
  }
})
