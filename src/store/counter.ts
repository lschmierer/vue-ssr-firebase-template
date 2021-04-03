import { Module } from 'vuex'
import { State } from '.'

import FirestoreRepository from '../repositories/FirestoreRepository'

export interface CounterState {
  count: number
}

export const createCounterModule = (firestoreRepository: FirestoreRepository): Module<CounterState, State> => ({
  namespaced: true,
  state: () => ({
    count: 0
  }),
  mutations: {
    setCount (state, count) {
      state.count = count
    }
  },
  actions: {
    async load ({ commit }) {
      // read the current value server-side
      // and subscribe to changes on the client
      if (import.meta.env.SSR === true) {
        commit('setCount', await firestoreRepository.getCount())
      } else {
        return await new Promise((resolve) => {
          // don't store the Unsubscribe function, because yolo
          // (client-side, the store is actually only created once and
          //  subscription should be kept alive for the entire app lifetime)
          firestoreRepository.onCountUpdate((count) => {
            commit('setCount', count)
            resolve(null)
          })
        })
      }
    },
    async increment ({ state }) {
      await firestoreRepository.setCount(state.count + 1)
    }
  }
})
