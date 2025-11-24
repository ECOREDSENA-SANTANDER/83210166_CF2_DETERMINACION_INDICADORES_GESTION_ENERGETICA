<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    
    .row.fondo1.align-items-center.p-0.mb-0(data-aos="fade-down")
      .col-lg-12.px-lg-5.px-4.mb-0

        .row.justify-content-center.align-items-center.mb-4.mt-5
          .col-lg-1.col-md-2.col-5.mb-lg-0.mb-md-0.mb-4
            img(src='@/assets/curso/intro/1.svg', alt='Imagen decorativa')
          .col-lg-11.col-md-10.ps-lg-0.ps-md-0
            p.mb-0 La gestión energética es un pilar clave para la sostenibilidad organizacional, ya que permite optimizar el consumo de recursos, reducir costos y disminuir el impacto ambiental. En este marco, los Indicadores de Desempeño Energético (IDEs) y la norma ISO 50001 constituyen herramientas esenciales para diagnosticar y mejorar de forma continua la eficiencia en las organizaciones.
        p.mb-5 El programa desarrolla contenidos orientados a la identificación, cálculo e interpretación de IDEs, el establecimiento de Líneas Base Energéticas (LBE) y la formulación de estrategias de optimización de costos e impacto ambiental. Además, integra los requisitos normativos aplicables y la elaboración de informes técnicos que faciliten la toma de decisiones y el seguimiento del desempeño energético.
        .row.justify-content-center.align-items-center           
          .col-lg-12
            figure
              .video
                <iframe width="560" height="315" src="https://www.youtube.com/embed/kgPAWsG8Kv8?si=7CnwQcVwTpZNHXoQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            figcaption Video. Indicadores clave para la gestión energética según normativa y diagnóstico 
    
    
</template>

<script>
export default {
  name: 'Introduccion',
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
