import { Module } from 'vuex'
import { StateUi } from './types'
import { RootStore } from '@/store/rootStore'

const getDefaultStateModal = () => {
  return {
    open: false,
    component: '',
    props: {}
  }
}

const getDefaultTextMask = () => 'Cargando...'

export const ui: Module<StateUi, RootStore> = {
  namespaced: true,
  state: {
    section: '',
    modal: getDefaultStateModal(),
    mask: {
      text: getDefaultTextMask(),
      show: false
    },
    faldon: {
      show: true
    }
  },
  mutations: {
    setSection (state, param) {
      state.section = param
    },
    toggleMask (state, { text, show }) {
      state.mask = {
        text: text || getDefaultTextMask(),
        show
      }
    },
    openDialog (state, { component, props }) {
      state.modal.open = true
      state.modal.component = component
      state.modal.props = props
    },
    closeDialog (state) {
      state.modal = getDefaultStateModal()
    },
    toggleFaldon (state, { show }) {
      state.faldon.show = show
    }
  },
  actions: {
    showMask ({ commit }, { text }) {
      commit('toggleMask', { text, show: true })
    },
    hideMask ({ commit }) {
      commit('toggleMask', { show: false })
    },
    openDialog ({ commit }, { component, props }) {
      commit('openDialog', { component, props })
    },
    closeDialog ({ commit }) {
      commit('closeDialog')
    },
    showFaldon ({ commit }) {
      commit('toggleFaldon', { show: true })
    },
    hideFaldon ({ commit }) {
      commit('toggleFaldon', { show: false })
    }
  },
  getters: {
    /** devuelve el título de la sección donde se encuentra el usuario */
    section: state => state.section,

    maskInfo (state) {
      return state.mask
    },
    dialogInfo (state) {
      return state.modal
    },
    faldonInfo (state) {
      return state.faldon
    }
  }
}
