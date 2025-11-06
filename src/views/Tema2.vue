<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Establecimiento de Líneas Base Energéticas (LBE) y variables de seguimiento
    
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p.mb-4 Una vez comprendidos los diversos tipos de Indicadores de Desempeño Energético (IDEs) y su propósito, el siguiente paso fundamental en la gestión energética es establecer un punto de referencia sólido contra el cual medir el progreso. En este contexto surge la Línea Base Energética (LBE), una herramienta indispensable para evaluar la mejora continua y justificar las inversiones en eficiencia. Asimismo, se definen las variables de seguimiento necesarias para el cálculo y ajuste de los IDEs
        .bg9.p-4
          p.mb-0.mx-lg-3 #[b Definición de LBE:] la Línea Base Energética (LBE) es un punto de referencia cuantitativo que refleja el consumo o desempeño energético de una organización, proceso, equipo o instalación durante un período específico y bajo condiciones definidas. Puede entenderse como la “fotografía” del consumo energético previo a la implementación o evaluación de acciones de mejora. La norma ISO 50001 define la LBE como “una referencia cuantitativa que proporciona una base para comparar el desempeño energético”.
      .col-lg-6
        img.d-none.d-lg-block(src='@/assets/curso/tema2/1.png', alt='')


    .titulo.mb-5.mt-lg-3(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Propósito fundamental de la LBE


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-5.col-8.mb-lg-0.mb-4
        img(src='@/assets/curso/tema2/2.png', alt='')
      .col-lg-9
        AcordionA.activo(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-0(data-aos="fade-left")
          .row.justify-content-center.align-items.p-0(titulo="Cuantificar la mejora")
            .col-lg-11.mb-0
              p.mb-0.mx-lg-3 Permite determinar si las iniciativas de eficiencia energética alcanzan los ahorros esperados. Sin una LBE, resulta imposible evaluar el progreso real.
          .row.justify-content-center.align-items.p-0(titulo="Evaluar la efectividad")
            .col-lg-11.mb-0
             p.mb-0.mx-lg-3 Ofrece una métrica clara para verificar la eficacia de las medidas operacionales, los cambios de comportamiento o las inversiones tecnológicas.
          .row.justify-content-center.align-items.p-0(titulo="Servir como referencia continua")
            .col-lg-11.mb-0
             p.mb-0.mx-lg-3 Actúa como estándar frente al cual se compara el desempeño energético actual y futuro, incluso tras la implementación de mejoras.
          .row.justify-content-center.align-items.p-0(titulo="Apoyar la toma de decisiones")
            .col-lg-11.mb-0
             p.mb-0.mx-lg-3 En combinación con los IDEs, aporta la base para justificar inversiones en proyectos de eficiencia energética, al demostrar su retorno potencial.
          .row.justify-content-center.align-items.p-0(titulo="Demostrar conformidad (ISO 50001)")
            .col-lg-11.mb-0
             p.mb-0.mx-lg-3 La norma exige el establecimiento de una LBE como requisito para evidenciar la mejora continua y obtener certificación.


    .titulo.mb-5.mt-lg-3(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Selección del período y los datos para el establecimiento de la LBE


    p.mb-5 La representatividad y la calidad de los datos son factores críticos para que la LBE sea confiable, a continuación, se describen los siguientes criterios para la selección del período:


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        SlyderF(columnas="col-lg-4 col-md-6 col-xl-4")
          .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
            .row.justify-content-center.align-items-center.mb-4.mt-lg-2
              .col-8
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema2/3.svg' alt='AvatarTop')
            .bg10.p-1.mb-4
              h4.text-center.text-white.mb-0.ps-2.pe-2 Representatividad
            p.mb-2.text-center(data-aos="fade-right") Debe reflejar el consumo energético típico, abarcando un ciclo completo de operaciones (por ejemplo, un año si existe estacionalidad). Se excluyen periodos atípicos como huelgas, cierres prolongados o picos de producción excepcionales.
          .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
            .row.justify-content-center.align-items-center.mb-4.mt-lg-2
              .col-8
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema2/4.svg' alt='AvatarTop')
            .bg10.p-1.mb-4
              h4.text-center.text-white.mb-0.ps-2.pe-2 Disponibilidad de datos
            p.mb-2.text-center(data-aos="fade-right") Se selecciona un período con información completa y confiable sobre consumo energético y variables relevantes (producción, clima, horas de operación, entre otras).
          .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
            .row.justify-content-center.align-items-center.mb-4.mt-lg-2
              .col-8
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema2/5.svg' alt='AvatarTop')
            .bg10.p-1.mb-4
              h4.text-center.text-white.mb-0.ps-2.pe-2 Longitud adecuada
            p.mb-2.text-center(data-aos="fade-right") Se recomienda un período de 12 meses, aunque puede ajustarse según la naturaleza del proceso.
          .tarjeta.tarjeta--slyder.b1.p-2.p-lg-4.p-md-3
            .row.justify-content-center.align-items-center.mb-4.mt-lg-2
              .col-8
                img.img-a.img-t(data-aos="zoom-in-left")(src='@/assets/curso/tema2/6.svg' alt='AvatarTop')
            .bg10.p-1.mb-4
              h4.text-center.text-white.mb-0.ps-2.pe-2 Cercanía en el tiempo
            p.mb-2.text-center(data-aos="fade-right") Conviene que el período sea reciente, reflejando condiciones operativas actuales.

    
    .titulo.mb-5.mt-lg-3(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Recopilación y normalización de datos
    
    
    .row.fondo2.align-items-center.p-0.mb-0(data-aos="fade-down")
      .col-lg-12.px-lg-5.px-4.mb-0

        .row.justify-content-center.align-items-center.mb-0
          .col-lg-10
            PasosA.color-primario.pas.mb-0(tipo="l")
              .row.justify-content-center.align-items-center(data-aos="fade-right")
                .col-lg-7
                  h4 Fuentes de datos:
                  p.mb-lg-0.mb-4 Facturas de servicios públicos, submediciones, registros de combustibles y sistemas de control.
                .col-lg-5.col-md-9
                  figure
                    img(src='@/assets/curso/tema2/7.png', alt='Texto que describa la imagen')
              .row.justify-content-center.align-items-center(data-aos="fade-right")
                .col-lg-5.col-md-9.order-lg-1.order-md-2.order-2
                  figure
                    img(src='@/assets/curso/tema2/8.png', alt='Texto que describa la imagen')
                .col-lg-7.left.order-lg-2.order-md-1.order-1
                  h4 Calidad de los datos: 
                  p.mb-3 Los registros deben ser precisos, consistentes y completos, corrigiendo errores o vacíos.
              .row.justify-content-center.align-items-center(data-aos="fade-right")
                .col-lg-7
                  h4 Normalización (ajuste): 
                  p.mb-3 Si el consumo depende de variables externas (clima, producción), los datos deben ajustarse para eliminar el efecto de dichas variaciones. Ejemplo: en edificios, el consumo puede normalizarse por “grados día” para aislar la influencia de la temperatura exterior.
                .col-lg-5.col-md-9
                  figure
                    img(src='@/assets/curso/tema2/9.png', alt='Texto que describa la imagen')

    
    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Metodologías para el cálculo de la LBE


    p.mb-0 El cálculo de la LBE puede realizarse con modelos simples o mediante análisis estadísticos más avanzados, a continuación, se identifican los modelos simples: 


    .row.justify-content-center.align-items-stretch.mb-5
      .col-md-6.col-lg-4
        .tarjeta-avatar
          img.imaa.my-4(src='@/assets/curso/tema2/10.svg' alt='')
          .tarjeta.bg11
            .p-4
              p.mb-0 #[b Promedio simple:] consumo promedio durante el período base; adecuado para consumos estables.
      .col-md-6.col-lg-4
        .tarjeta-avatar
          img.imaa.my-4(src='@/assets/curso/tema2/11.svg' alt='')
          .tarjeta.bg11
            .p-4
              p.mb-0 #[b Promedio ponderado:] útil cuando existen distintos niveles de actividad, ponderando el consumo según cada nivel.
      .col-md-6.col-lg-4
        .tarjeta-avatar
          img.imaa.my-4(src='@/assets/curso/tema2/12.svg' alt='')
          .tarjeta.bg11
            .p-4
              p.mb-4 #[b Índice de rendimiento:] uso de un IDE relativo (ejemplo: kWh / unidad producida) cuando la relación entre energía y actividad es constante.


    .titulo-linea.mb-5
      h3.mb-0.ps-2.pe-2 Análisis de regresión básico


    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-md-5.mb-3
      .col-lg-6.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4
        .bg5.p-lg-5.p-4.h-100
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-3
              img.img-t.img-a.mb-lg-0.mb-4(src='@/assets/curso/tema1/12.svg', alt='', data-aos="fade-right")
            .col-lg-9
              h3.mb-0 Propósito
          p.mb-0 Establecer la relación matemática entre el consumo energético (variable dependiente) y factores de impacto como producción, clima o tiempo de operación.
      .col-lg-6.col-md-6.ps-lg-0.ps-md-0.mb-lg-0.mb-4
        .bg6.p-lg-5.p-4.h-100
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-3
              img.img-t.img-a.mb-lg-0.mb-4(src='@/assets/curso/tema1/12.svg', alt='', data-aos="fade-right")
            .col-lg-9
              h3.mb-0 Regresión lineal simple
          p.mb-0 Útil cuando una sola variable influye linealmente en el consumo. La ecuación resultante se convierte en la LBE. 


    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.mb-lg-5.mb-0
        img.d-none.d-lg-block(src='@/assets/curso/tema2/13.png', alt='', data-aos="fade-right")
      .col-lg.col-md-6.mb-lg-0.mb-4
        .bg12.p-4
          img.mov.img-t(src='@/assets/curso/tema2/14.svg' alt='')
          p.mb-0.my-2 #[b Ventajas:] permite ajustar el consumo esperado en función de la variable de impacto.
      .col-lg.col-md-6.mb-lg-0.mb-4
        .bg12.p-4
          img.mov.img-t(src='@/assets/curso/tema2/15.svg' alt='')
          p.mb-0.my-2 #[b Limitaciones:] asume relación lineal y puede ser insuficiente si influyen varias variables.


    .row.fondo2.align-items-center.p-0.mb-5(data-aos="fade-down")
      .col-lg-12.px-lg-5.px-4.mb-0

        .row.justify-content-center.align-items-center.mb-0
          .col-lg-6.mb-lg-0.mb-4
            .titulo.mb-5.mt-lg-3(data-aos="fade-right")
              img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
              h3.mb-0 Pasos básicos
            ul.lista-ul.mb-4
              li.d-flex.mb-2
                i.fas.fa-bolt
                p.mb-0 Recopilar datos históricos de consumo y producción durante el período base.
              li.d-flex.mb-2
                i.fas.fa-bolt
                p.mb-0 Graficar los datos para observar tendencias.
              li.d-flex.mb-2
                i.fas.fa-bolt
                p.mb-0 Calcular la ecuación de regresión con herramientas estadísticas (Excel, Google Sheets).
              li.d-flex.mb-0
                i.fas.fa-bolt
                p.mb-0 Evaluar el modelo mediante el coeficiente de determinación (R²).
            .bg13.p-4
              p.mb-0.text-white #[b Resultado:] la ecuación obtenida permite predecir el consumo esperado para futuros niveles de producción, constituyendo la LBE.
          .col-lg-4.col-md-6.col-8
            img(src='@/assets/curso/tema2/16.svg' alt='')


    .titulo.mb-5.mt-lg-3(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Establecimiento de variables de seguimiento

    
    p.mb-5 El éxito de la LBE y de los IDEs depende de la correcta selección de variables de seguimiento, a continuación, se describen las siguientes variables. 


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        ul.lista-ul.lista-ol--separador.mb-lg-0.mb-4
          li.d-flex.mb-2
            i.fas.fa-bolt
            p.mb-0 #[b Producción o actividad:] unidades producidas, servicios prestados, metros cuadrados ocupados.
          li.d-flex.mb-2
            i.fas.fa-bolt
            p.mb-0 #[b Clima:] grados día de calefacción / refrigeración, temperatura y humedad.
          li.d-flex.mb-2
            i.fas.fa-bolt
            p.mb-0 #[b Horas de operación:] turnos o tiempo de funcionamiento de la planta.
          li.d-flex.mb-2
            i.fas.fa-bolt
            p.mb-0 #[b Condiciones del proceso:] temperatura, presión, caudal.
          li.d-flex.mb-2
            i.fas.fa-bolt
            p.mb-0 #[b Ocupación:] número de personas en un edificio.
      .col-lg-5.col-md-9.col-10
        img(src='@/assets/curso/tema2/17.png', alt='', data-aos="fade-right")


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .tarjeta-avatar-b.mb-0
          .tarjeta-avatar-b__img
            img.img-t.d-none.d-lg-block(src='@/assets/curso/tema1/12.svg' alt='')
          .tarjeta.bg14
            .p-4
              h5.mb-4 Frecuencia y métodos de recolección:
              p.mb-4 #[b a) Frecuencia:] debe adecuarse a la variabilidad del proceso (diaria, semanal, mensual).
              p.mb-0 #[b b) Métodos:] lecturas manuales, sistemas automáticos, integración con SCADA #[em (Supervisory Control and Data Acquisition)]  o BMS #[em (Building Management System).]


    .titulo-linea.mb-5
      h3.mb-0.ps-2.pe-2 Integración con los IDEs


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        img.d-none.d-lg-block(src='@/assets/curso/tema2/18.png', alt='', data-aos="fade-right")
      .col-lg-9
        ul.lista-ul.mb-4
          li.d-flex.mb-2
            i.fas.fa-bolt
            p.mb-0 En IDEs relativos, la variable de seguimiento constituye el denominador (ejemplo: kWh / unidad producida).
          li.d-flex.mb-0
            i.fas.fa-bolt
            p.mb-0 En IDEs normalizados, se utilizan variables de ajuste (ejemplo: grados día).
        p.mb-0 El establecimiento de una Línea Base Energética sólida y la correcta identificación de variables de seguimiento constituyen pasos esenciales en la gestión energética. Estos elementos no solo permiten el cálculo y la interpretación precisa de los IDEs, sino que también garantizan el cumplimiento de los requisitos de la norma ISO 50001, facilitando la mejora continua y la toma de decisiones estratégicas.


    .tarjeta.color-primario.des.p-4.mb-0(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema1/video.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.mx-lg-4
              h4.mb-3 Línea Base Energética bajo la norma (ISO 50001) eficiencia energética.
              p.mb-0 Para complementar el tema abordado se invita a explorar el siguiente video.
            .col-sm-auto.pe-lg-5
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=CS5HenQhLtU" target="_blank")
                span Ir al video
                i.fas.fa-file-video
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
