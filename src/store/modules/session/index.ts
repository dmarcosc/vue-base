import { Module } from 'vuex'
import { StateSession } from './types'
import { RootStore } from '@/store/rootStore'

const getDefaultStateBorrador = () => {
  return {
    datosPersonales: {
      nombre: '',
      tratamiento: { codigo: '', valor: '' },
      apellidos: '',
      telefonoMovil: '',
      email: '',
      tipoDocumento: { codigo: '', valor: '' },
      documento: '',
      fechaNacimiento: '',
      fechaCaducidad: '',
      nacionalidad: { codigo: '', valor: '' },
      estadoCivil: { codigo: '', valor: '' },
      numPersonasCargo: 0,
      tipoVivienda: { codigo: '', valor: '' },
      antVivienda: '',
      tipoResidencia: { codigo: '', valor: '' },
      pais: { codigo: '', valor: '' },
      paisNacimiento: { codigo: '', valor: '' },
      familiaNumerosa: 0,
      datosCuentaBanco: { iban: '', anyoApertura: '' }
    },
    domicilio: {
      tipoVia: { codigo: '', valor: '' },
      direccion: '',
      codPostal: '',
      provincia: { codigo: '', valor: '' },
      localidad: '',
      telefono: ''
    },
    datosProfesionales: {
      tipoContrato: { codigo: '', valor: '' },
      antContrato: '',
      ingresos: 0,
      profesion: { codigo: '', valor: '' },
      cnae: { codigo: '', valor: '' },
      otrosIngresos: 0,
      gastosVivienda: 0,
      gastosCoche: '',
      gastosOtros: 0,
      tipoTrabajo: { codigo: '', valor: '' },
      empresa: '',
      direccion: {
        tipoVia: { codigo: '', valor: '' },
        direccion: '',
        codPostal: '',
        provincia: { codigo: '', valor: '' },
        localidad: '',
        telefono: ''
      },
      fechaHastContrato: ''
    },
    producto: {
      tipo: '',
      revisar: '',
      datosPrestamo: {
        tin: 0,
        tae: 0,
        importePrestamo: 0,
        importeNeto: 0,
        importeTotalAdeudadoEur: 0,
        fechaPrimerVencimiento: '',
        fechaUltimaVencimiento: '',
        importeSeguro: 0,
        interesesEuros: 0,
        comisionFormalizacion: 0,
        comisionFormalizacionPorc: '',
        comisionCancelacion: '',
        swSeguro: '',
        seguroPorcentaje: 0,
        seguroMes: 0,
        numeroMensualidades: 0,
        importeMensualidad: 0,
        sumaInteresesApertura: 0,
        codigoSeguro: '',
        importeYRVigor: 0,
        importePropuesto: 0,
        finalidad: '',
        swCancelaYRVigor: '',
        modoFinanciacion: ''
      },
      grupoVendedor: {
        codigo: ''
      },
      vendedor: {
        numVendedor: 0,
        codCentro: '',
        centroElectro: '',
        grupo: ''
      },
      tipoSubproducto: {
        codigo: ''
      },
      campana: '',
      baremo: ''
    },
    datosBorrador: {
      paso: '',
      descripcionPaso: ''
    },
    aceptos: []
  }
}

const getDefaultStatePropuestaComercial = () => {
  return {
    codSolicitud: '',
    importeMaximoGenerico: 0,
    importeMaximoPrecon: 0,
    importeMinimoGenerico: 0,
    importeMinimoPrecon: 0,
    tieneGenerico: false,
    tinGenerico: 0,
    tinPrecon: 0
  }
}

const getDefaultStateClient = () => {
  return {
    nombre: '',
    id: '',
    date: new Date(),
    phone: '',
    email: '',
    country: '',
    nSeguridadSocial: '',
    direccion: '',
    edad: 0,
    nacionalidad: ''
  }
}

const getDefaultStateSimuladorData = () => {
  return {
    importe: 0,
    meses: 0,
    maxImporte: 0,
    minImporte: 0,
    maxMeses: 0,
    minMeses: 0,
    arrayLineas: [],
    lastImporte: 0,
    lastMeses: 0,
    curLineaFinanciacion: {
      tin: '',
      tae: '',
      importePrestamo: '',
      importe: '',
      importeTotal: '',
      importeNeto: '',
      importeTotalAdeudadoEur: '',
      fechaPrimerVencimiento: '',
      fechaUltimoVencimiento: '',
      seguroImporte: '',
      interesesImporte: '',
      comisionApertura: '',
      comisionFormalizacion: '',
      comisionFormalizacionPorc: '',
      comisionCancelacion: '',
      seguro: '',
      swSeguro: '',
      codigoSeguro: '',
      seguroPorcentaje: '',
      seguroMes: '',
      duracion: '',
      cuota: '',
      interesesApertura: '',
      importePropuesto: '',
      importeYRVigor: '',
      tipoProducto: '',
      seguroObligatorio: '',
      nivel: '',
      prioridad: '',
      preferencia: '',
      intereses: '',
      ofertaComercial: '',
      literalPromocion: '',
      idPromocion: '',
      prima: '',
      baremo: ''
    }
  }
}

const getDefaultStateINE = () => {
  return {
    ineCreated: false
  }
}

export const session: Module<StateSession, RootStore> = {
  namespaced: true,
  state: {
    borrador: getDefaultStateBorrador(),
    propuestaComercial: getDefaultStatePropuestaComercial(),
    simuladorData: getDefaultStateSimuladorData(),
    statusINE: getDefaultStateINE(),
    client: getDefaultStateClient()
  },
  mutations: {
    updateDatosPersonales (state, { datosPersonales }) {
      datosPersonales.datosCuentaBanco = { ...state.borrador.datosPersonales.datosCuentaBanco, ...datosPersonales.datosCuentaBanco }
      state.borrador.datosPersonales = { ...state.borrador.datosPersonales, ...datosPersonales }
    },
    updateDomicilio (state, { domicilio }) {
      state.borrador.domicilio = { ...state.borrador.domicilio, ...domicilio }
    },
    updateDatosProfesionales (state, { datosProfesionales }) {
      datosProfesionales.direccion = { ...state.borrador.datosProfesionales.direccion, ...datosProfesionales.direccion }
      state.borrador.datosProfesionales = { ...state.borrador.datosProfesionales, ...datosProfesionales }
    },
    updateProducto (state, { producto }) {
      producto.datosPrestamo = { ...state.borrador.producto.datosPrestamo, ...producto.datosPrestamo }
      state.borrador.producto = { ...state.borrador.producto, ...producto }
    },
    updateDatosBorrador (state, { datosBorrador }) {
      state.borrador.datosBorrador = { ...state.borrador.datosBorrador, ...datosBorrador }
    },
    updateAceptos (state, { aceptos }) {
      if (aceptos) {
        aceptos.forEach((element: { codigo: string; valor: string }) => {
          const aceptoYaGuardado = state.borrador.aceptos.find(acepto => acepto.codigo === element.codigo)
          if (aceptoYaGuardado) {
            aceptoYaGuardado.valor = element.valor
          } else {
            state.borrador.aceptos.push(element)
          }
        })
      }
    },
    savePropuestaComercial (state, { propuestaComercial }) {
      state.propuestaComercial = propuestaComercial
    },
    saveSimuladorData (state, { simuladorData }) {
      state.simuladorData = { ...state.simuladorData, ...simuladorData }
    },
    resetSession (state) {
      state.borrador = getDefaultStateBorrador()
      state.propuestaComercial = getDefaultStatePropuestaComercial()
      state.simuladorData = getDefaultStateSimuladorData()
      state.statusINE = getDefaultStateINE()
    },
    setINE (state, { status }) {
      state.statusINE.ineCreated = status
    },
    saveClient (state, { clientData }) {
      state.client = { ...state.client, ...clientData }
    },
    removeClient (state) {
      state.client = getDefaultStateClient()
    }
  },
  actions: {
    updateBorrador ({ commit }, { borrador }) {
      const { datosPersonales, domicilio, datosProfesionales, producto, datosBorrador, aceptos } = borrador
      if (datosPersonales) {
        commit('updateDatosPersonales', { datosPersonales })
      }
      if (domicilio) {
        commit('updateDomicilio', { domicilio })
      }
      if (datosProfesionales) {
        commit('updateDatosProfesionales', { datosProfesionales })
      }
      if (producto) {
        commit('updateProducto', { producto })
      }
      if (datosBorrador) {
        commit('updateDatosBorrador', { datosBorrador })
      }
      if (aceptos) {
        commit('updateAceptos', { aceptos })
      }
    },
    savePropuestaComercial ({ commit }, { propuestaComercial }) {
      commit('savePropuestaComercial', { propuestaComercial })
    },
    saveSimuladorData ({ commit }, { simuladorData }) {
      commit('saveSimuladorData', { simuladorData })
    },
    resetSession ({ commit }) {
      commit('resetSession')
    },
    setINETrue ({ commit }) {
      commit('setINE', { status: true })
    },
    setINEFalse ({ commit }) {
      commit('setINE', { status: false })
    },
    saveClient ({ commit }, { clientData }) {
      commit('saveClient', { clientData })
    },
    removeClient ({ commit }) {
      commit('removeClient')
    }
  },
  getters: {
    borrador (state) {
      return state.borrador
    },
    datosPersonales (state) {
      return state.borrador.datosPersonales
    },
    domicilio (state) {
      return state.borrador.domicilio
    },
    datosProfesionales (state) {
      return state.borrador.datosProfesionales
    },
    producto (state) {
      return state.borrador.producto
    },
    datosBorrador (state) {
      return state.borrador.datosBorrador
    },
    aceptos (state) {
      return state.borrador.aceptos
    },
    propuestaComercial (state) {
      return state.propuestaComercial
    },
    simuladorData (state) {
      return state.simuladorData
    },
    statusINE (state) {
      return state.statusINE.ineCreated
    },
    client (state) {
      return state.client
    }
  }
}
