<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Requisitos de la norma ISO 50001 para la gestión energética y los IDEs


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bloque-texto-g.color-secundario.p-4.p-lg-5.p-md-4.mb-0(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema5/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4.p-md-4
            p.mb-0 La gestión energética ha trascendido el ámbito de las buenas prácticas para convertirse en un requisito estratégico esencial en las organizaciones modernas. En la actualidad, su implementación está directamente vinculada con la sostenibilidad ambiental, la competitividad empresarial y el cumplimiento normativo internacional. A través de una gestión adecuada, las empresas no solo reducen sus costos operativos y su huella de carbono, sino que también fortalecen su reputación corporativa y garantizan la continuidad de sus operaciones frente a los cambios regulatorios y de mercado.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .bg19.p-4.mb-lg-0.mb-4
          p.mb-0 En este contexto, la norma ISO 50001:2018 constituye el marco de referencia internacional para implementar, mantener y mejorar un Sistema de Gestión de la Energía (SGEn). Esta norma se basa en el ciclo de mejora continua PHVA (Planificar, Hacer, Verificar y Actuar), promoviendo un enfoque sistemático que permite identificar oportunidades de ahorro energético, controlar el desempeño, y demostrar resultados verificables.
      .col-lg-3.col-md-8.col-10.mb-lg-0.mb-4
        img(src='@/assets/curso/tema5/2.svg', alt='')
      .col-lg-3
        p.mb-0 Entre los componentes más relevantes de la norma se encuentran los Indicadores de Desempeño Energético (IDEs) y la Línea Base Energética (LBE), elementos esenciales que permiten medir, comparar y evidenciar la mejora continua del rendimiento energético. 


    p.mb-5 A continuación, se describen los principales requisitos normativos asociados, según la ISO 50001:2018:


    .row.fondo3.align-items-center.p-0.mb-0(data-aos="fade-down")
      .col-lg-12.px-lg-5.px-4.mb-0

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-9
            AcordionA.activo(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-0(data-aos="fade-left")
              .row.justify-content-center.align-items.p-0(titulo="Planificación energética")
                .col-lg-11.mb-0
                  p.mb-4.mx-lg-3 Cláusulas 6.1 y 6.2: establecen la necesidad de identificar riesgos y oportunidades energéticas, así como de definir objetivos estratégicos y metas específicas, basadas en el principio SMART (específicas, medibles, alcanzables, relevantes y con tiempo definido).
                  p.mb-4.mx-lg-3 La planificación energética debe incluir un análisis detallado de los usos y consumos significativos de energía, determinando prioridades de acción y recursos necesarios.
                  p.mb-4.mx-lg-3 #[b Ejemplo:] reducir la intensidad energética de 5 a 4.5 kWh por unidad de producto en un periodo de 12 meses mediante mejoras en equipos y procesos productivos.
                  p.mb-0.mx-lg-3 Además, deben establecerse planes de acción documentados que indiquen responsables, cronogramas, indicadores de seguimiento y recursos requeridos.
              .row.justify-content-center.align-items.p-0(titulo="Seguimiento, medición y análisis")
                .col-lg-11.mb-0
                  p.mb-4.mx-lg-3 Cláusula 9.1: la organización debe definir qué variables energéticas se medirán, con qué frecuencia y mediante qué métodos o sistemas, por ejemplo: sistemas SCADA, BMS o lecturas manuales verificadas.
                  ul.lista-ul.mb-0
                    li.d-flex.mb-2
                      i.fas.fa-bolt
                      p.mb-0 Se deben incluir IDEs, variables de impacto (como temperatura, volumen de producción o factor de carga) y progreso de los planes de acción.
                    li.d-flex.mb-2
                      i.fas.fa-bolt
                      p.mb-0 El análisis de datos debe permitir detectar desviaciones con respecto a la LBE y determinar sus causas raíz (tecnológicas, operativas o de mantenimiento).
                    li.d-flex.mb-0
                      i.fas.fa-bolt
                      p.mb-0 La información obtenida es esencial para la toma de decisiones correctivas o preventivas, y para la validación de la eficacia de las medidas implementadas.
              .row.justify-content-center.align-items.p-0(titulo="Establecimiento y revisión de IDEs y LBE")
                .col-lg-11.mb-0
                  p.mb-4.mx-lg-3 Cláusula 6.4 (IDEs): establece que la organización debe seleccionar indicadores representativos y medibles, acordes con sus actividades, procesos y metas energéticas. Estos deben ser consistentes en el tiempo para permitir comparaciones válidas y deben revisarse periódicamente para garantizar su relevancia.
                  p.mb-4.mx-lg-3 Cláusula 6.5 (LBE): exige la definición de una línea base energética, que sirva como punto de referencia cuantitativo del desempeño. La LBE puede ajustarse cuando se presenten cambios significativos en las variables de impacto, como variaciones de producción, condiciones climáticas o actualizaciones tecnológicas.
                  p.mb-0.mx-lg-3 Relación IDE – LBE: la comparación entre los indicadores actuales y la línea base constituye la evidencia objetiva de la mejora continua. Este vínculo permite evaluar la eficacia de las acciones implementadas y justificar inversiones en eficiencia energética.
              .row.justify-content-center.align-items.p-0(titulo="Comunicación del desempeño energético")
                .col-lg-11.mb-0
                  p.mb-4.mx-lg-3 Cláusula 7.4: dispone que la comunicación del desempeño energético debe realizarse de manera estructurada, verificable y adaptada a cada público objetivo.
                  ul.lista-ul.mb-0
                    li.d-flex.mb-2
                      i.fas.fa-bolt
                      p.mb-0 Internamente, se deben comunicar los resultados de los IDEs, el avance de los planes de acción y las oportunidades de mejora a todos los niveles de la organización.
                    li.d-flex.mb-2
                      i.fas.fa-bolt
                      p.mb-0 Externamente, la comunicación puede orientarse a entidades regulatorias, clientes, inversionistas o comunidades, demostrando compromiso con la sostenibilidad y cumplimiento normativo.
                    li.d-flex.mb-0
                      i.fas.fa-bolt
                      p.mb-0 Los canales pueden incluir informes técnicos, tableros de control, boletines informativos o reportes de sostenibilidad corporativa, garantizando la transparencia y trazabilidad de la información energética.
          .col-lg-3.d-none.d-lg-block
            img(src='@/assets/curso/tema5/3.png', alt='')

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-md-2.col-5
        img.mb-lg-0.mb-md-0.mb-4(src='@/assets/curso/tema5/4.svg', alt='', data-aos="fade-right")
      .col-lg-11.col-md-10
        p.mb-0 La ISO 50001:2018 promueve una gestión energética estructurada que integra planificación, control, verificación y comunicación del desempeño energético. La aplicación coherente de sus principios permite a las organizaciones mejorar la eficiencia, reducir costos, disminuir emisiones de CO₂eq y consolidar una cultura de mejora continua alineada con los objetivos globales de sostenibilidad y transición energética.


    .tarjeta.color-primario.des.p-4.mb-0(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema1/video.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.mx-lg-4
              h4.mb-3 Requisitos Legales para la Gestión de Energía ISO 50001.
              p.mb-0 Para complementar el tema abordado, se invita a explorar el siguiente video.
            .col-sm-auto.pe-lg-5
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=X0bVnH9GyWs&ab_channel=ISOSistemasdeGesti%C3%B3n" target="_blank")
                span Ir al video
                i.fas.fa-file-video



</template>

<script>
export default {
  name: 'Tema5',
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
