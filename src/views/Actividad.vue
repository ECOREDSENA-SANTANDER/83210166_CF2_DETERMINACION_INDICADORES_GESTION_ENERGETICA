<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad_Completar_Frases
      //<ActividadCompletar :parrafo="parrafo"/>

      #Actividad_Cuestionario
      <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
//import ActividadCompletar from '@/views/plantilla/actividadCompletar/ActividadCompletar.vue'
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    //ActividadCompletar,
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Indicadores clave para la gestión energética según normativa y diagnóstico.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los conceptos fundamentales del componente indicadores clave para la gestión energética según normativa y diagnóstico.',
      barajarPreguntas: true,
      titulo_aprobado: '¡FELICIDADES!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'Los Indicadores de Desempeño Energético (IDEs) permiten medir de forma objetiva la eficiencia energética de procesos, equipos o sistemas.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos del componente indicadores clave para la gestión energética según normativa y diagnóstico.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'La clasificación de los IDEs incluye indicadores absolutos, relativos, normalizados y de rendimiento, según su aplicación.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos del componente indicadores clave para la gestión energética según normativa y diagnóstico.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'La Línea Base Energética (LBE) constituye el punto de referencia contra el cual se comparan los resultados de consumo energético en el tiempo.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos del componente indicadores clave para la gestión energética según normativa y diagnóstico.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'Las metodologías para el cálculo de la LBE pueden incluir modelos estadísticos que consideran variables de ajuste como producción, clima o turnos operativos.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos del componente indicadores clave para la gestión energética según normativa y diagnóstico.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'La norma ISO 50001 exige la definición, seguimiento y revisión periódica de los IDEs como evidencia del compromiso con la mejora continua.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos del componente indicadores clave para la gestión energética según normativa y diagnóstico.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'Los informes técnicos de rendimiento energético deben incluir los resultados de los IDEs, el análisis de las LBE y las estrategias aplicadas para optimizar el consumo.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos del componente indicadores clave para la gestión energética según normativa y diagnóstico.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'La Línea Base Energética (LBE) es un documento administrativo que no requiere actualización ni revisión periódica.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos del componente indicadores clave para la gestión energética según normativa y diagnóstico.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'Los IDEs se utilizan únicamente en la etapa de diagnóstico inicial y no son necesarios en el seguimiento continuo de la gestión energética.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos del componente indicadores clave para la gestión energética según normativa y diagnóstico.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'Las estrategias de optimización energética se enfocan exclusivamente en reducir costos económicos, sin considerar el impacto ambiental.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos del componente indicadores clave para la gestión energética según normativa y diagnóstico.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'La norma ISO 50001 permite prescindir de la definición de indicadores siempre que la organización tenga un plan de ahorro energético general.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos del componente indicadores clave para la gestión energética según normativa y diagnóstico.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Posee una buena comprensión sobre el componente indicadores clave para la gestión energética según normativa y diagnóstico.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
