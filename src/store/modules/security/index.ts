import { Module } from 'vuex'
import { StateSecurity } from './types'
import { RootStore } from '@/store/rootStore'
const getDefaultStateToken = () => {
  return ''
}
const getDefaultStateCaptcha = () => {
  return ''
}
export const security: Module<StateSecurity, RootStore> = {
  namespaced: true,
  state: {
    token: getDefaultStateToken(),
    captcha: getDefaultStateCaptcha()
  },
  mutations: {
    saveToken (state, { token }) {
      state.token = token
    },
    saveCaptcha (state, { captcha }) {
      state.captcha = captcha
    }
  },
  actions: {
    updateToken ({ commit }, { token }) {
      commit('saveToken', { token })
    },
    updateCaptcha ({ commit }, { captcha }) {
      commit('saveCaptcha', { captcha })
    }
  },
  getters: {
    token (state) {
      return state.token
    },
    captcha (state) {
      return state.captcha
    }
  }
}
