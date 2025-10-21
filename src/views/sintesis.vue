<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 La gestión energética, conforme a la norma ISO 50001, se fundamenta en el uso de Indicadores de Desempeño Energético (IDEs) y Líneas Base Energéticas (LBE) para medir, analizar y comparar consumos, identificar oportunidades de mejora y orientar la toma de decisiones. Estos elementos posibilitan la formulación de estrategias de optimización, el cumplimiento de requisitos normativos y la elaboración de informes técnicos que evidencian la mejora continua y el impacto económico y ambiental.

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Diagrama de seis etapas clave para la gestión energética: identificación de IDEs, establecimiento de LBE, cálculo e interpretación de IDEs, estrategias de optimización, requisitos de ISO 50001 e informes técnicos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
