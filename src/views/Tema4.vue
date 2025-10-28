<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Estrategias de optimización de costos e impacto energético


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p.mb-lg-0.mb-4 Una vez medido el consumo, establecidas las líneas base e interpretado el desempeño energético a través de los IDEs, el siguiente paso crítico es la acción. Este tema aborda cómo transformar el conocimiento en estrategias de optimización, con el fin de alcanzar eficiencia técnica, reducir costos operativos y minimizar el impacto ambiental. La optimización energética es un ciclo continuo basado en el análisis de los IDEs y en la búsqueda permanente de mejora.
      .col-lg-5.col-md-9.col-10
        img(src='@/assets/curso/tema4/1.png', alt='')


    .titulo.mb-5.mt-lg-3(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Formulación y propuesta de estrategias de optimización

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema4/2.png', alt='')
      .col-lg-7
        img.img-t.mb-4.d-none.d-lg-block(src='@/assets/curso/tema4/3.svg', alt='')
        p.mb-0 Las estrategias deben formularse a partir del diagnóstico energético previo y el análisis de IDEs. Las soluciones se orientan a las causas raíz de las ineficiencias o a las áreas con mayor potencial de ahorro.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        AcordionA.activo(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-0(data-aos="fade-left")
          .row.justify-content-center.align-items.p-0(titulo="IDEs por debajo de la LBE u objetivo")
            .col-lg-11.mb-0
              p.mb-4.mx-lg-3 Indican consumo mayor al esperado.
              p.mb-0.mx-lg-3 #[b Ejemplo:] el IDE kWh / unidad producida aumentó un 10 % en la línea 3, pese a mantener estable la producción.
          .row.justify-content-center.align-items.p-0(titulo="Bajo rendimiento de equipos")
            .col-lg-11.mb-0
              p.mb-4.mx-lg-3 Muestran pérdidas significativas de energía.
              p.mb-0.mx-lg-3 #[b Ejemplo:] la eficiencia de combustión de una caldera bajó del 85 % al 78 %.
          .row.justify-content-center.align-items.p-0(titulo="Consumo absoluto elevado en áreas específicas")
            .col-lg-11.mb-0
              p.mb-4.mx-lg-3 Alerta sobre puntos críticos.
              p.mb-0.mx-lg-3 #[b Ejemplo:] la iluminación representa el 40 % del consumo total de la planta.
          .row.justify-content-center.align-items.p-0(titulo="Picos de consumo o demanda")
            .col-lg-11.mb-0
              p.mb-0.mx-lg-3 Identifican oportunidades de gestión de cargas.
          .row.justify-content-center.align-items.p-0(titulo="Tecnologías obsoletas")
            .col-lg-11.mb-0
              p.mb-0.mx-lg-3 Equipos antiguos limitan la eficiencia.
      .col-lg-5
        img.d-none.d-lg-block(src='@/assets/curso/tema4/4.png', alt='')


    .titulo.mb-5.mt-lg-3(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Estrategias de reducción del consumo


    TabsC.color-primario.mb-5(data-aos="fade-right")
      .py-3.py-md-4.bg9.px-3(titulo="Mejoras operacionales y de mantenimiento")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-11
            .row.justify-content-center.align-items-center.p-lg-4.p-3
              .col-lg-4.col-md-8.col-10.order-lg-1.order-md-2.order-2
                img.mb-0(src='@/assets/curso/tema4/5.svg', alt='')
              .col-lg-8.order-lg-2.order-md-1.order-1
                p.mb-4 Optimización de horarios, ajustes de control, mantenimiento preventivo, buenas prácticas.
                ul.lista-ul.mb-0
                  li.d-flex.mb-lg-0.mb-4
                    i.fas.fa-circle
                    p.mb-0 #[b Ejemplo:] programa de reparación de fugas de aire comprimido.
      .py-3.py-md-4.bg9.px-3(titulo="Inversiones en tecnología y equipos eficientes")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-11
            .row.justify-content-center.align-items-center.p-lg-4.p-3
              .col-lg-4.col-md-8.col-10.order-lg-1.order-md-2.order-2
                img.mb-0(src='@/assets/curso/tema4/6.svg', alt='')
              .col-lg-8.order-lg-2.order-md-1.order-1
                p.mb-4 Sustitución de equipos, recuperación de calor, automatización, sistemas de gestión energética.
                ul.lista-ul.mb-0
                  li.d-flex.mb-lg-0.mb-4
                    i.fas.fa-circle
                    p.mb-0 #[b Ejemplo:] migrar a iluminación LED en producción.
      .py-3.py-md-4.bg9.px-3(titulo="Mejoras en infraestructura")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-11
            .row.justify-content-center.align-items-center.p-lg-4.p-3
              .col-lg-4.col-md-8.col-10.order-lg-1.order-md-2.order-2
                img.mb-0(src='@/assets/curso/tema4/7.svg', alt='')
              .col-lg-8.order-lg-2.order-md-1.order-1
                p.mb-4 Aislamiento térmico, sellado de infiltraciones, recubrimientos reflectantes.
                ul.lista-ul.mb-0
                  li.d-flex.mb-lg-0.mb-4
                    i.fas.fa-circle
                    p.mb-0 #[b Ejemplo:] aislamiento en tuberías de vapor.
      .py-3.py-md-4.bg9.px-3(titulo="Gestión de la demanda")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-11
            .row.justify-content-center.align-items-center.p-lg-4.p-3
              .col-lg-4.col-md-8.col-10.order-lg-1.order-md-2.order-2
                img.mb-0(src='@/assets/curso/tema4/8.svg', alt='')
              .col-lg-8.order-lg-2.order-md-1.order-1
                p.mb-4 Desplazamiento de cargas, reducción de picos, almacenamiento energético.
                ul.lista-ul.mb-0
                  li.d-flex.mb-lg-0.mb-4
                    i.fas.fa-circle
                    p.mb-0 #[b Ejemplo:] programación de compresores en horarios de tarifa reducida.
          

    .titulo.mb-5.mt-lg-3(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Evaluación del potencial de ahorro

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        ul.lista-ul.mb-0
          li.d-flex.mb-2
            i.fas.fa-bolt
            p.mb-0 #[b Ahorro energético cuantificable.]
          li.d-flex.mb-2
            i.fas.fa-bolt
            p.mb-0 #[b Ahorro económico:] incluyendo CAPEX #[em (Capital Expenditure)] y OPEX #[em (Operational Expenditure).]
          li.d-flex.mb-2
            i.fas.fa-bolt
            p.mb-0 #[b Rentabilidad:] periodo de recuperación, VAN (Valor Actual Neto), TIR (Tasa Interna de Retorno).
          li.d-flex.mb-2
            i.fas.fa-bolt
            p.mb-0 #[b Reducción ambiental:] emisiones de CO₂eq #[em (Carbon Dioxide Equivalent).]
          li.d-flex.mb-lg-0.mb-4
            i.fas.fa-bolt
            p.mb-0 #[b Beneficios adicionales:] prolongación de vida útil de equipos, menor riesgo operativo, mejor imagen corporativa.
      .col-lg-5.col-md-9.col-10
        img(src='@/assets/curso/tema4/9.png', alt='')


    .titulo.mb-5.mt-lg-3(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Priorización de estrategias

    
    p.mb-5 Las estrategias se priorizan con base en impacto, costos, viabilidad técnica, recuperación de inversión, reducción de emisiones, riesgos y alineación con los objetivos estratégicos. Una matriz de priorización facilita la toma de decisiones. Se presentan los siguientes criterios de priorización:


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-9.col-10.mb-lg-0.mb-4
        img(src='@/assets/curso/tema4/10.svg', alt='')
      .col-lg-8
        ul.lista-ul.mb-0
          li.d-flex.mb-2
            i.fas.fa-bolt
            p.mb-0 #[b Impacto de ahorro:] ¿Cuánto energía y dinero se espera ahorrar? (mayor impacto = mayor prioridad).
          li.d-flex.mb-2
            i.fas.fa-bolt
            p.mb-0 #[b Costo de implementación:] ¿Qué tan alta es la inversión inicial? (menor costo = mayor prioridad).
          li.d-flex.mb-2
            i.fas.fa-bolt
            p.mb-0 #[b Viabilidad técnica:] ¿Es factible la implementación con la tecnología y el personal existentes?
          li.d-flex.mb-2
            i.fas.fa-bolt
            p.mb-0 #[b Período de recuperación (payback):] ¿En cuánto tiempo se recupera la inversión? (menor payback = mayor prioridad).
          li.d-flex.mb-2
            i.fas.fa-bolt
            p.mb-0 #[b Reducción de emisiones:] ¿Cuánto contribuye a los objetivos ambientales?
          li.d-flex.mb-2
            i.fas.fa-bolt
            p.mb-0 #[b Riesgos asociados:] ¿Qué riesgos técnicos u operativos implica la implementación?
          li.d-flex.mb-0
            i.fas.fa-bolt
            p.mb-0 #[b Alineación con objetivos estratégicos:] ¿Cómo apoya la estrategia a los objetivos generales del negocio?


    .bg3.p-4.mb-5
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-1
          img.img-t.img-a.mb-lg-0.mb-4(src='@/assets/curso/tema4/11.svg', alt='')
        .col-lg-11
          p.mb-0 Matriz de priorización: a menudo se utiliza una matriz o un #[em ranking], donde cada estrategia es calificada en función de los criterios anteriores para facilitar la decisión. Las estrategias con alto potencial de ahorro y bajo costo de implementación (conocidas como "fruta madura" o #[em low-hanging fruit]) suelen ser las primeras en ser consideradas.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bg18.p-4.mb-2
          .titulo-sexto.mb-4
            h5 Figura 5. 
            | Matriz de priorización
          img.mb-2(src='@/assets/curso/tema4/12.svg', alt='Matriz de Eisenhower con 4 cuadrantes: Hacer, Delegar, Planear y Eliminar.')
        figcaption.mb-0 #[b Fuente:] https://tecnosoluciones.com/matriz-de-eisenhower-o-matriz-de-priorizacion/


    .tarjeta.color-primario.des.p-4.mb-0(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema1/video.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.mx-lg-4
              h4.mb-3 Eficiencia Energética, Reducir el consumo, para complementar el tema abordado
              p.mb-0 Se invita a explorar el siguiente video.
            .col-sm-auto.pe-lg-5
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=M6eZkijypBo" target="_blank")
                span Ir al video
                i.fas.fa-file-video


</template>

<script>
export default {
  name: 'Tema4',
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
