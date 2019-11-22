export interface RespuestaPacientes {
  ok: boolean;
  usuario: Usuario;
  pacientes: Paciente[];
}
export interface RespuestaUsuario {
  ok: boolean;
  token: string;
  usuario: Usuario[];
}

export interface RespuestaExamenes {
  ok: boolean;
  examenes: Examene[];
}

export interface RespuestaAntecedentes {
  ok: boolean;
  antecedentes: Antecedente[];
}

export interface RespuestaInforme {
  ok: boolean;
  informes: Informe[];
}

export interface Paciente {
  _id: string;
  nombres: string;
  apellidos: string;
  rut: string;
  telefono: string;
  modalidad: string;
  sn_equipo: string;
  fecha_nacimiento: string;
  correo: string;
  medico_tratante: string;
  estado: string;
  establecimiento: string;
  fecha_creacion: string;
  __v: number;
  fecha_ultimo_examen?: string;
  ultimo_examen?: string;
  fecha_ultimo_informe?: string;
  ultimo_informe?: string;
}

export interface Usuario {
  _id: string;
  nombres: string;
  apellidos: string;
  email: string;
  contraseña: string;
  establecimiento: string;
  telefono: string;
  estado: string;
  api_key: string;
  so: string;
  tipo: string;
  __v: number;
}

export interface Examene {
  _id: string;
  tipo_examen: string;
  resultadoSistolico: number;
  resultadoDiastolico: number;
  fecha_examen: string;
  paciente: string;
  __v: number;
}

export interface Antecedente {
  _id: string;
  paciente: string;
  sexo: string;
  altura: number;
  peso: number;
  pasistolicainicial: number;
  padiastolicainicial: number;
  brazo: string;
  tabaquismo: string;
  extabaquismo: string;
  colesterol_alto: string;
  enfermedades_renales: string;
  antecedentes_hta_familiar: string;
  sedentarismo: string;
  diabetes: string;
  enfermedades_cardiacas: string;
  accidentes_cardiovasculares: string;
  comentario: string;
  __v: number;
}

export interface Informe {
  _id: string;
  folio: string;
  fecha_informe: string;
  recomendacion_medica: string;
  medico_tratante: string;
  paciente: string;
  __v: number;
}