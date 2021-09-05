export interface StateSession {
  borrador: {
    datosPersonales: {
      nombre: string;
      tratamiento: { codigo: string; valor: string };
      apellidos: string;
      telefonoMovil: string;
      email: string;
      tipoDocumento: { codigo: string; valor: string };
      documento: string;
      fechaCaducidad: string;
      fechaNacimiento: string;
      nacionalidad: { codigo: string; valor: string };
      estadoCivil: { codigo: string; valor: string };
      numPersonasCargo: number;
      tipoVivienda: { codigo: string; valor: string };
      antVivienda: string;
      tipoResidencia: { codigo: string; valor: string };
      pais: { codigo: string; valor: string };
      paisNacimiento: { codigo: string; valor: string };
      familiaNumerosa: number;
      datosCuentaBanco: { iban: string; anyoApertura: string };
    };
    domicilio: {
      tipoVia: { codigo: string; valor: string };
      direccion: string;
      codPostal: string;
      provincia: { codigo: string; valor: string };
      localidad: string;
      telefono: string;
    };
    datosProfesionales: {
      tipoContrato: { codigo: string; valor: string };
      antContrato: string;
      ingresos: number;
      profesion: { codigo: string; valor: string };
      cnae: { codigo: string; valor: string };
      otrosIngresos: number;
      gastosVivienda: number;
      gastosCoche: string;
      gastosOtros: number;
      tipoTrabajo: { codigo: string; valor: string };
      empresa: string;
      direccion: {
        tipoVia: { codigo: string; valor: string };
        direccion: string;
        codPostal: string;
        provincia: { codigo: string; valor: string };
        localidad: string;
        telefono: string;
      };
      fechaHastContrato: string;
    };
    producto: {
      tipo: string;
      revisar: string;
      datosPrestamo: {
        tin: number;
        tae: number;
        importePrestamo: number;
        importeNeto: number;
        importeTotalAdeudadoEur: number;
        fechaPrimerVencimiento: string;
        fechaUltimaVencimiento: string;
        importeSeguro: number;
        interesesEuros: number;
        comisionFormalizacion: number;
        comisionFormalizacionPorc: string;
        comisionCancelacion: string;
        swSeguro: string;
        seguroPorcentaje: number;
        seguroMes: number;
        numeroMensualidades: number;
        importeMensualidad: number;
        sumaInteresesApertura: number;
        codigoSeguro: string;
        importeYRVigor: number;
        importePropuesto: number;
        finalidad: string;
        swCancelaYRVigor: string;
        modoFinanciacion: string;
      };
      grupoVendedor: {
        codigo: string;
      };
      vendedor: {
        numVendedor: number;
        codCentro: string;
        centroElectro: string;
        grupo: string;
      };
      tipoSubproducto: {
        codigo: string;
      };
      campana: string;
      baremo: string;
    };
    datosBorrador: {
      paso: string;
      descripcionPaso: string;
    };
    aceptos: Array<{ codigo: string; valor: string }>;
    // aceptos: { acepto: Array<{ id: string; valor: string }> };
  };
  propuestaComercial: {
    codSolicitud: string;
    importeMaximoGenerico: number;
    importeMaximoPrecon: number;
    importeMinimoGenerico: number;
    importeMinimoPrecon: number;
    tieneGenerico: boolean;
    tinGenerico: number;
    tinPrecon: number;
  };
  simuladorData: {
    importe: number;
    meses: number;
    maxImporte: number;
    minImporte: number;
    maxMeses: number;
    minMeses: number;
    lastImporte: number;
    lastMeses: number;
    arrayLineas: any[];
    curLineaFinanciacion: {
      tin: string;
      tae: string;
      importePrestamo: string;
      importe: string;
      importeTotal: string;
      importeNeto: string;
      importeTotalAdeudadoEur: string;
      fechaPrimerVencimiento: string;
      fechaUltimoVencimiento: string;
      seguroImporte: string;
      interesesImporte: string;
      comisionApertura: string;
      comisionFormalizacion: string;
      comisionFormalizacionPorc: string;
      comisionCancelacion: string;
      seguro: string;
      swSeguro: string;
      codigoSeguro: string;
      seguroPorcentaje: string;
      seguroMes: string;
      duracion: string;
      cuota: string;
      interesesApertura: string;
      importePropuesto: string;
      importeYRVigor: string;
      tipoProducto: string;
      seguroObligatorio: string;
      nivel: string;
      prioridad: string;
      preferencia: string;
      intereses: string;
      ofertaComercial: string;
      literalPromocion: string;
      idPromocion: string;
      prima: string;
      baremo: string;
    };
  };
  statusINE: {
    ineCreated: boolean;
  };
  client: {
    nombre: string;
    id: string;
    date: Date;
    phone: string
    email: string;
    country: string
    nSeguridadSocial: string
    direccion: string
    edad: number
    nacionalidad: string
  };
}
