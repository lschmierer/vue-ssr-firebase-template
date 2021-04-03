import { InjectionKey } from 'vue'
import { createStore as _createStore, Store, useStore as _useStore } from 'vuex'

import FirestoreRepository from '../repositories/FirestoreRepository'

import { createCounterModule, CounterState } from './counter'

export const key: InjectionKey<Store<State>> = Symbol('Store')

export function useStore (): Store<State> {
  return _useStore(key)
}

export interface State {
  counter: CounterState
}

export const createStore = (firestoreRepository: FirestoreRepository): Store<State> => _createStore({
  modules: {
    counter: createCounterModule(firestoreRepository)
  }
})
