import store from '@/store/index.ts'
/**
 * Nos devuelve el objeto parámetro completo junto con sus campos valor y código
 * a partir de uno de estos dos campos
 * @param {Object | any} object
 * @param {string} type
 * @param {string} param
 * @return {Object}
 */
export const getParam = (object: any, type: string, param: string) => {
  if (!object || !(object.keys) || (object.keys.length > 0) || !param || !type) {
    return false
  } else if (type === 'valor') {
    const found = (object).find((x: any) => x.valor === param)
    if (found) return found
    else return false
  } else if (type === 'codigo') {
    const found = (object).find((x: any) => x.codigo === param)
    if (found) return found
    else return false
  }
}

export const getIdPeticion = () => {
  const now = new Date()
  const year = now.getFullYear().toString().substr(-1)
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  const oneDay = 1000 * 60 * 60 * 24
  let julianDay: number | string = Math.floor(diff / oneDay)
  if (julianDay < 10) {
    julianDay = '00' + julianDay
  } else if (julianDay < 100) {
    julianDay = '0' + julianDay
  } else {
    julianDay = '' + julianDay
  }
  const randomNum = Math.random().toString(10).replace('0.', '').substring(0, 6)
  // canal + año + dia juliano (3 posiciones) + randomizer(6 digitos)
  return '00' + year + julianDay + randomNum
}

export const getFechaPeticion = (aDate: Date) => {
  let now = new Date()
  if (aDate) {
    now = new Date(aDate)
  }
  const Day = (now.getUTCDate() < 10 ? '0' : '') + now.getUTCDate()
  const Month = ((now.getUTCMonth() + 1) < 10 ? '0' : '') + (now.getUTCMonth() + 1)
  const Year = now.getUTCFullYear()
  const Hour = ((now.getHours() + 1) < 10 ? '0' : '') + now.getHours()
  const Mins = ((now.getMinutes() + 1) < 10 ? '0' : '') + now.getMinutes()
  const Secs = ((now.getSeconds() + 1) < 10 ? '0' : '') + now.getSeconds()

  return Day + '/' + Month + '/' + Year + ' ' + Hour + ':' + Mins + ':' + Secs
}

export const formatFechaDMY = (val: Date) => {
  const aDate = new Date(val)
  const Day = (aDate.getUTCDate() < 10 ? '0' : '') + aDate.getUTCDate()
  const Month = ((aDate.getUTCMonth() + 1) < 10 ? '0' : '') + (aDate.getUTCMonth() + 1)
  const Year = aDate.getUTCFullYear()

  return Day + '/' + Month + '/' + Year
}

/**
 * comprueba si el la variable (número o string)
 * es un número positivo
 * @param {String | Number} num
 * @return {Boolean}
 */
export const isPositiveNumber = (num: number) => {
  // transformamos el 'num' (ya que puede ser un string)
  // a númerico, una hecho el cast devolvemos true si es mayor a 0,
  // en caso contrario, se devuelve un false.
  const num_ = Number(num)
  return num_ > 0
}

// Se encarga de componer el campo domicilio.direccion para el borrador
export const formatAddress = (streetName: string, streetNum: string, streetOther: string) => {
  let address: string = streetName
  address = address.concat(' ').concat(streetNum)
  if (streetOther) {
    address = address.concat(' ').concat(streetOther)
  }

  // Maximo 47 caracteres totales para direccion en CETELEM
  if (address.length > 47) {
    address = address.substr(0, 47)
  }
  return address
}

/**
 * validador de DNI/NIE
 * @param {string} document
 * @param {number} devuelve 0, si es NIF. 1 si es NIE. -1 si es inválido
 */
export const typeDocument = (document: string) => {
  if (document.toString() !== document.toString().toUpperCase()) {
    return -1
  }
  if (document) {
    const validChars = 'TRWAGMYFPDXBNJZSQVHLCKET'
    const nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i
    const nieRexp = /^[XYZ]{1}[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i
    const str = document.toString().toUpperCase()
    if (nifRexp.test(str)) {
      const numero = document.substr(0, document.length - 1)
      const letr = document.substr(document.length - 1, 1)
      let letra = 'TRWAGMYFPDXBNJZSQVHLCKET'
      const num = +numero % 23
      letra = letra.substring(num, num + 1)
      if (letra !== letr) {
        return -1
      } else {
        return 0
      }
    }
    if (nieRexp.test(str)) {
      const nie = str
        .replace(/^[X]/, '0')
        .replace(/^[Y]/, '1')
        .replace(/^[Z]/, '2')
      const letter = str.substr(-1)
      const l = document.substr(-1)
      if (letter !== l) {
        return -1
      }
      const charIndex = parseInt(nie.substr(0, 8)) % 23
      if (validChars.charAt(charIndex) === letter) {
        return 1 // 1
      }
    }
    return -1 // -1
  }
  return -1 // -1
}

export const getInfoAnalisis = () => {
  return JSON.stringify({
    appVersion: store.getters['app/version'].version,
    device: store.getters['app/device'],
    userAgent: window.navigator.userAgent
  })
}

export const cleanObject = (object: any) => {
  Object
    .entries(object)
    .forEach(([k, v]) => {
      if (v && typeof v === 'object') {
        cleanObject(v)
      }
      // eslint-disable-next-line no-mixed-operators
      if (v && typeof v === 'object' && !Object.keys(v).length || v === null || v === undefined || v === '') {
        if (Array.isArray(object)) {
          object.splice((k as any), 1)
        } else {
          delete object[k]
        }
      }
    })
  return object
}
