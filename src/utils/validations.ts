
import moment from 'moment'

/*  returns:
  /*      0 - NIF
  /*      1 - NIE
  /*     -1 - invalid
  */
export const validateLetter = (docu: string) => {
  let numeroStr: string; let letter; let letra; const expresionRegularDni = /^[XYZ]?\d{5,8}[A-Z]$/

  const dni = docu.toUpperCase()

  if (expresionRegularDni.test(dni) === true) {
    numeroStr = dni.substr(0, dni.length - 1)
    numeroStr = numeroStr.replace('X', '0')
    numeroStr = numeroStr.replace('Y', '1')
    numeroStr = numeroStr.replace('Z', '2')
    letter = dni.substr(dni.length - 1, 1)

    const numero = Number(numeroStr) % 23
    letra = 'TRWAGMYFPDXBNJZSQVHLCKET'
    letra = letra.substring(numero, numero + 1)
    return letra === letter
  }
}

/**
 * validador de DNI/NIE
 * @param {string} document
 * @param {number} devuelve true, si es válido. false si es inválido
 */
export const validateDocument = (document: string) => {
  if (document.toString() !== document.toString().toUpperCase()) {
    return false
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
        return false
      } else {
        return true
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
        return false
      }
      const charIndex = parseInt(nie.substr(0, 8)) % 23
      if (validChars.charAt(charIndex) === letter) {
        return true // 1
      }
    }
    return false // -1
  }
  return false // -1
}

/*  returns:
  /*      0 - Valid
  /*     -1 - Invalid
  /*     -2 - Empty
  */
export const validateCellphone = (phone: string) => {
  if (phone) {
    if (phone.toString().length < 9 || phone.toString().length > 9) {
      return false // -1
    }
    if (/^\d+$/.test(phone) && (phone.toString().startsWith('6') || phone.toString().startsWith('7'))) {
      return true // 0
    } else {
      return false // -1
    }
  }
  return false // -2
}

/*  returns:
  /*      TRUE - Valid
  /*     FALSE - Invalid
  /*     TRUE - Empty
  */
export const validatePhone = (phone: string) => {
  if (phone) {
    if (phone.toString().length < 9 || phone.toString().length > 9) {
      return false
    }
    if (/^\d+$/.test(phone) && (phone.toString().startsWith('8') || phone.toString().startsWith('9'))) {
      return true // 0
    } else {
      return false // -1
    }
  }
  return true // CUIDADO SI EL CAMPO ES REQUERIDO CREAR NUEVA FUNCION QUE DEVUELVA FALSE
}

// validar email.
export const validateEmail = (email: string) => {
  if (email) {
    const emailRexp = /^(([^<>ñ()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,6}))$/
    const str = email.toString()
    if (emailRexp.test(str)) {
      return true
    } else {
      return false
    }
  }
  return false
}
// validar textfiel del nombre, apellido y nombre de la empresa.
export const clientDataValidation = (name: string) => {
  if (name) {
    const nombreRex = /^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/g
    const str = name.toString()
    if (nombreRex.test(str)) {
      return true
    } else {
      return false
    }
  }
  return false
}
// validar textfiel del nombre, apellido y nombre de la empresa
export const validateCompanyName = (name: string) => {
  if (name) {
    const companyNameRex = /^[A-Za-z0-9\u00f1\u00d1-\s]+$/g
    const str = name.toString()
    if (companyNameRex.test(str)) {
      return true
    } else {
      return false
    }
  }
  return false
}

const obtenerDC = (entidad: string, oficina: string, cuenta: string) => {
  let temp = 0

  const multDg1 = [4, 8, 5, 10, 9, 7, 3, 6]
  const multDg2 = [1, 2, 4, 8, 5, 10, 9, 7, 3, 6]
  const entOfi = entidad + oficina

  for (let i = 0; i < entOfi.length; i++) { temp += parseInt(entOfi.substring(i, i + 1)) * multDg1[i] }

  temp = 11 - temp % 11

  const dg1 = (temp === 10 ? 1 : temp === 11 ? 0 : temp).toString()

  temp = 0
  for (let j = 0; j < cuenta.length; j++) { temp += parseInt(cuenta.substring(j, j + 1)) * multDg2[j] }

  temp = 11 - temp % 11

  const dg2 = (temp === 10 ? 1 : temp === 11 ? 0 : temp).toString()

  return dg1.toString() + dg2.toString()
}

const mod = (dividendo: string, divisor: number) => {
  let cDividendo = ''
  let cResto: number | string = ''

  for (const i in [...dividendo]) {
    const cChar = dividendo[i]
    const cOperador: string = cResto + '' + cDividendo + '' + cChar

    if (Number(cOperador) < divisor) {
      cDividendo += '' + cChar
    } else {
      cResto = Number(cOperador) % divisor
      if (cResto === 0) {
        cResto = ''
      }
      cDividendo = ''
    }
  }
  cResto += '' + cDividendo
  if (cResto === '') {
    cResto = 0
  }
  return cResto
}

/*  separates a phone number in groups of 3 numbers
    /*     ex: 666666666 -> 666 666 666
    */
export const separatePhoneNumber = (phone: string) => {
  return phone.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export const validateIBAN = (IBAN: string) => {
  const NUMERO_MAGICO = 97
  const LONGITUD_OK = 24
  const ASCII_0 = 48
  const ASCII_9 = 57
  const COD_PAIS = 'ES'

  if (IBAN == null) return false
  IBAN = IBAN.replace(/ /g, '')
  // Comprueba que la cuenta tiene 24 caracteres y los dos iniciales son ES
  if (IBAN.length === LONGITUD_OK && IBAN.substring(0, 2).toUpperCase() === COD_PAIS) {
    // Comprueba que todos los digitos despues del codigo del pais son numeros
    for (let i = 2; i < IBAN.length; i++) {
      const caracterASCII: number | undefined = IBAN.codePointAt(i)
      if (!caracterASCII || caracterASCII < ASCII_0 || caracterASCII > ASCII_9) return false
    }

    // Mueve los cuatro caracteres iniciales al final de la cuenta
    const IBAN_MOD = IBAN.substring(4) + IBAN.substring(0, 4)

    // Cambia las letras por numeros de dos digitos donde: A = 10, B = 11, ..., Z = 35.
    let numCuentaNumerica = ''
    for (let j = 0; j < IBAN_MOD.length; j++) {
      numCuentaNumerica += (parseInt(IBAN_MOD.charAt(j), 36))
    }

    // Pasa el texto a entero y calcula el resto de su division entre el 97

    const numeroIBAN = numCuentaNumerica.toString()
    if (mod(numeroIBAN, NUMERO_MAGICO) !== '1') return false

    // Comprobacion del digito de control
    const entidad = IBAN.substring(4, 8).toString()
    const oficina = IBAN.substring(8, 12).toString()
    const cuenta = IBAN.substring(14, 24).toString()

    const cadenaDc = obtenerDC(entidad, oficina, cuenta)

    // Comparamos el digito de control de la cuenta con el calculado
    return IBAN.substring(12, 14) === (cadenaDc)
  }

  return false
}

export const getNumIBAN = (letra: string) => {
  const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return letras.search(letra) + 10
}

export const formatFechaDMY = (val: Date) => {
  const aDate = new Date(val)
  const Day = (aDate.getUTCDate() < 10 ? '0' : '') + aDate.getUTCDate()
  const Month = ((aDate.getUTCMonth() + 1) < 10 ? '0' : '') + (aDate.getUTCMonth() + 1)
  const Year = aDate.getUTCFullYear()

  return Day + '/' + Month + '/' + Year
}

export const underage = (age: Date) => {
  const now = new Date()
  now.setFullYear(now.getFullYear() - 18)

  if (age > now) {
    return false
  }
  return true
}

export const formatDate = (format: string) => (value: any) => {
  if (!value) {
    return true
  }

  return moment(value, format).isValid()
}

type DateValidation = Date | string | number | moment.Moment
type DateParamsValidation = {
  format?: string;
  inclusivity?: boolean;
}

type Inclusivity = '()' | '[)' | '(]' | '[]' | undefined

type DateParamsValidationBeetween = {
  format?: string;
  inclusivity?: Inclusivity;
}

export const minDate = (filter: DateValidation, { format, inclusivity }: DateParamsValidation = {}) => (value: DateValidation) => {
  const dateFilter = moment(filter, format)
  return inclusivity
    ? moment(value, format).isSameOrAfter(dateFilter, 'day')
    : moment(value, format).isAfter(dateFilter, 'day')
}

export const maxDate = (filter: DateValidation, { format, inclusivity }: DateParamsValidation = {}) => (value: DateValidation) => {
  const dateFilter = moment(filter, format)
  return inclusivity
    ? moment(value, format).isSameOrBefore(dateFilter, 'day')
    : moment(value, format).isBefore(dateFilter, 'day')
}

export const betweenDate = (startDate: DateValidation, endDate: DateValidation, { format, inclusivity }: DateParamsValidationBeetween = {}) => (value: DateValidation) => {
  const startFilter = moment(startDate, format)
  const endFilter = moment(endDate, format)

  return moment(value, format).isBetween(startFilter, endFilter, 'day', inclusivity)
}

export const validateNationality = (nationality: string) => {
  if (nationality === 'ESPAÑA') return false
  else return true
}
