<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Desarrollo de informes técnicos sobre el rendimiento energético y la optimización


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-md-2.col-5
        img.mb-lg-0.mb-md-0.mb-4(src='@/assets/curso/tema6/1.svg', alt='', data-aos="fade-right")
      .col-lg-10.col-md-10
        p.mb-0 El informe técnico de rendimiento energético constituye un componente esencial del Sistema de Gestión de la Energía (SGEn), ya que consolida los resultados derivados de las mediciones, evaluaciones y estrategias aplicadas en el marco de la eficiencia energética. Su propósito principal es transformar los datos técnicos en información precisa, clara y comprensible, que facilite la toma de decisiones informadas en los diferentes niveles de la organización.


    .bg17
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/tema6/2.png', alt='')
        .col-lg-7.p-4
          p.mb-0.mx-3.mx-lg-0 Estos informes integran el trabajo realizado en las etapas previas del proceso, que abarcan la recopilación de datos energéticos confiables, el cálculo de los Indicadores de Desempeño Energético (IDEs), el establecimiento de Líneas Base Energéticas (LBE) y la identificación de oportunidades de mejora y optimización. Así, los resultados cuantitativos se complementan con un análisis cualitativo que permite interpretar tendencias, variaciones, causas y posibles acciones correctivas o preventivas.

    
    p.mb-5 Un informe técnico bien estructurado debe lograr un equilibrio entre el rigor analítico y la claridad comunicativa. Para tal fin, se recomienda incluir los siguientes apartados:

    
    .row.justify-content.align-items-stretch.mb-5
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .bg20.p-4.h-100
          .row.justify-content-center
            .col-8
              img.img-t.img-a.imt6.mb-4(src='@/assets/curso/tema3/2.svg', alt='')
            .bgw.p-1.mb-4
              h4.mb-0.ps-2.pe-2 Resultados energéticos
            p.mb-0 Presentación de los IDEs, comparación con la LBE y evolución temporal del consumo.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .bg20.p-4.h-100
          .row.justify-content-center
            .col-8
              img.img-t.img-a.imt6.mb-4(src='@/assets/curso/tema3/3.svg', alt='')
            .bgw.p-1.mb-4
              h4.mb-0.ps-2.pe-2 Análisis de desempeño
            p.mb-0 Interpretación de resultados, identificación de variaciones significativas y evaluación del cumplimiento de metas.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .bg20.p-4.h-100
          .row.justify-content-center
            .col-8
              img.img-t.img-a.imt6.mb-4(src='@/assets/curso/tema3/4.svg', alt='')
            .bgw.p-1.mb-4
              h4.mb-0.ps-2.pe-2 Propuestas de optimización
            p.mb-0 Acciones técnicas y de gestión dirigidas a mejorar la eficiencia energética y reducir el impacto ambiental.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .bg20.p-4.h-100
          .row.justify-content-center
            .col-8
              img.img-t.img-a.imt6.mb-4(src='@/assets/curso/tema3/5.svg', alt='')
            .bgw.p-1.mb-4
              h4.mb-0.ps-2.pe-2.text-center Conclusiones y plan de seguimiento
            p.mb-0 Resumen de logros alcanzados y pasos a seguir para garantizar la mejora continua.
    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p.mb-4 La comunicación de resultados debe adaptarse al perfil del público destinatario. Los directivos requieren información estratégica y de impacto económico; el personal operativo, datos prácticos sobre desempeño, mantenimiento y control; mientras que las partes interesadas externas necesitan evidencias relacionadas con el cumplimiento normativo, ambiental o corporativo.
        .bg2.p-4.mb-4.mb-lg-0
          p.mb-0 En conjunto, los informes técnicos de rendimiento y optimización energética no solo documentan los avances, sino que fortalecen la cultura organizacional de eficiencia, sostenibilidad y mejora continua, garantizando la trazabilidad de las acciones y el cumplimiento de los requisitos establecidos por la norma ISO 50001:2018.
      .col-lg-4.col-md-7.col-10
        img(src='@/assets/curso/tema6/3.svg', alt='')
        
        
    .titulo.mb-5.mt-lg-3(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Estructura recomendada del informe técnico


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2
        img.d-none.d-lg-block(src='@/assets/curso/tema6/4.png', alt='')
      .col-lg-10
        .bg21.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-5
              ul.lista-ul.mb-lg-2.my-lg-2.mb-2
                li.d-flex.mb-2
                  i.fas.fa-bolt
                  p.mb-0 Título y fecha.
                li.d-flex.mb-2
                  i.fas.fa-bolt
                  p.mb-0 Autor(es) y destinatario(s).
                li.d-flex.mb-2
                  i.fas.fa-bolt
                  p.mb-0 Resumen ejecutivo con hallazgos clave.
                li.d-flex.mb-2
                  i.fas.fa-bolt
                  p.mb-0 Antecedentes y propósito del informe.
                li.d-flex.mb-0
                  i.fas.fa-bolt
                  p.mb-0 Metodología de cálculo y fuentes de datos.
            .col-lg-7.ps-lg-0
              ul.lista-ul.mb-0
                li.d-flex.mb-2
                  i.fas.fa-bolt
                  p.mb-0 Resultados y análisis de los IDEs.
                li.d-flex.mb-2
                  i.fas.fa-bolt
                  p.mb-0 Identificación de desviaciones y oportunidades de mejora.
                li.d-flex.mb-2
                  i.fas.fa-bolt
                  p.mb-0 Propuestas de optimización con análisis energético, económico y ambiental.
                li.d-flex.mb-2
                  i.fas.fa-bolt
                  p.mb-0 Conclusiones y recomendaciones.
                li.d-flex.mb-0
                  i.fas.fa-bolt
                  p.mb-0 Anexos (opcional).


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.te61
        TabsA.color-acento-botones.mod
          .tarjeta.bg17.p-4(titulo="Presentación de resultados")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-12
                h4.mb-4 Presentación de resultados
                ul.lista-ul.mb-0
                  li.d-flex.mb-2
                    i.fas.fa-bolt
                    p.mb-0 #[b Claridad y consistencia:] uso de gráficos y tablas bien definidos.
                  li.d-flex.mb-2
                    i.fas.fa-bolt
                    p.mb-0 #[b Gráficos de tendencia:] representación de la evolución de los IDEs, LBE y objetivos.
                  li.d-flex.mb-2
                    i.fas.fa-bolt
                    p.mb-0 #[b Gráficos relativos:] porcentajes de mejora respecto a la línea base.
                  li.d-flex.mb-2
                    i.fas.fa-bolt
                    p.mb-0 #[b Tablas resumen:] indicadores clave, consumos reales y proyectados.
                  li.d-flex.mb-0
                    i.fas.fa-bolt
                    p.mb-0 #[b Identificación de desviaciones:] mediante colores o símbolos diferenciadores.
          .tarjeta.bg17.p-4(titulo="Documentación de estrategias de optimización")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-12
                h4.mb-4 Documentación de estrategias de optimización
                p.mb-4 Cada estrategia debe incluir los siguientes elementos:
                ul.lista-ul.mb-0
                  li.d-flex.mb-2
                    i.fas.fa-bolt
                    p.mb-0 Descripción y objetivo.
                  li.d-flex.mb-2
                    i.fas.fa-bolt
                    p.mb-0 Ahorro energético estimado.
                  li.d-flex.mb-2
                    i.fas.fa-bolt
                    p.mb-0 Análisis económico: incluyendo CAPEX, OPEX, ROI, VAN y TIR.
                  li.d-flex.mb-2
                    i.fas.fa-bolt
                    p.mb-0 Impacto ambiental: cuantificación de la reducción de CO₂eq.
                  li.d-flex.mb-0
                    i.fas.fa-bolt
                    p.mb-0 Responsables, cronograma y posibles riesgos asociados.
          .tarjeta.bg17.p-4(titulo="Recomendaciones finales")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-12
                h4.mb-4 Recomendaciones finales
                ul.lista-ul.mb-0
                  li.d-flex.mb-2
                    i.fas.fa-bolt
                    p.mb-0 #[b Priorización de estrategias según su impacto técnico, económico y ambiental.]
                  li.d-flex.mb-2
                    i.fas.fa-bolt
                    p.mb-0 #[b Definición de próximos pasos concretos para su implementación.]
                  li.d-flex.mb-2
                    i.fas.fa-bolt
                    p.mb-0 #[b Énfasis en el monitoreo continuo y la actualización periódica de la LBE.]
                  li.d-flex.mb-0
                    i.fas.fa-bolt
                    p.mb-0 #[b Sugerencia de frecuencia para futuras revisiones del informe y seguimiento de indicadores.]
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema6/5.png', alt='')


    .tarjeta.color-primario.des.p-4.mb-0(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema1/video.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.mx-lg-4
              h4.mb-3 ¿Sabes qué es la Medición y Verificación de Proyectos de Eficiencia Energética?
              p.mb-0 Para complementar el tema abordado, se invita a explorar el siguiente video.
            .col-sm-auto.pe-lg-5
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=3O9lDdzv6DQ" target="_blank")
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
