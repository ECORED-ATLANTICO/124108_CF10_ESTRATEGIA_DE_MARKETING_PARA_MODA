<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Conceptualización del sistema moda.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la comprensión del aprendiz sobre los conceptos del sistema moda mediante la resolución de preguntas de selección múltiple con única respuesta, a partir de la identificación de elementos clave desarrollados en el componente formativo relacionados con moda, colecciones, productos, mercados y estrategias comerciales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la principal función estratégica de la moda dentro del mercado?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar procesos de análisis comercial en empresas del sector.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Identificar necesidades del consumidor y generar valor mediante propuestas diferenciadas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir completamente actividades de diseño y comunicación empresarial actuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir la importancia de los mercados en decisiones organizacionales estratégicas empresariales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué característica distingue principalmente los conceptos básicos asociados a la moda?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Representan expresiones culturales reflejadas mediante productos, estilos y consumo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Se limitan exclusivamente al diseño técnico industrial de prendas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Excluyen completamente factores sociales relacionados con tendencias contemporáneas actuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminan la influencia cultural sobre las preferencias de los consumidores modernos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué elemento influye directamente en la evolución histórica permanente de la moda?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La ausencia de cambios culturales en diferentes sociedades humanas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La eliminación de tendencias entre distintas generaciones consumidoras contemporáneas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Las transformaciones sociales, económicas y culturales de cada época.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El rechazo permanente a innovaciones dentro del sistema moda.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál propósito cumplen los diferentes tipos existentes dentro de la moda?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Clasificar expresiones según características, usos y contextos específicos sociales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Eliminar diferencias entre consumidores y segmentos de mercado actuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reducir las oportunidades de adaptación empresarial frente a cambios culturales contemporáneos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir completamente las estrategias comerciales relacionadas con los productos de moda actuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué permiten comprender las épocas representativas dentro de la historia de la moda?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La desaparición completa de influencias culturales en los productos actuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La evolución estética vinculada con contextos sociales determinados históricos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El rechazo de tendencias surgidas durante diferentes periodos históricos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La eliminación de referencias visuales usadas por marcas modernas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál aspecto resulta fundamental para analizar el futuro estratégico de la moda?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ignorar las preferencias emergentes de los consumidores en mercados dinámicos actuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar procesos creativos relacionados con innovación y diferenciación comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Anticipar cambios mediante el análisis de comportamientos y tendencias futuras.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Sustituir la investigación de mercados por decisiones intuitivas exclusivamente empresariales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué función cumple la imagen de moda dentro de la comunicación estratégica empresarial?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Desconectar visualmente los productos respecto al público objetivo del mercado actual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Proyectar identidad, posicionamiento y la percepción deseada por las marcas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Eliminar elementos simbólicos asociados a propuestas comerciales diferenciadoras actuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir completamente los atributos funcionales presentes en productos comercializados actualmente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué relación existe entre el vestuario y la identidad personal contemporánea actual?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El vestuario comunica valores, preferencias y características individuales visibles.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El vestuario elimina diferencias culturales entre consumidores de mercados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El vestuario reemplaza completamente los procesos comunicativos no verbales actuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El vestuario impide la construcción de identidad dentro de contextos sociales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cómo contribuye la publicidad al posicionamiento efectivo de los productos de moda actuales?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reduce la visibilidad comercial frente a consumidores potenciales en mercados diversos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Limita la percepción de valor asociada a propuestas de marca.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Fortalece el reconocimiento, diferenciación y comunicación estratégica de los productos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Elimina la interacción entre empresas y audiencias objetivo contemporáneas actuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué integra principalmente el concepto de sistema moda contemporáneo actual?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Procesos, actores, mercados y dinámicas vinculadas sectorialmente entre sí.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Exclusivamente actividades relacionadas con la confección industrial de prendas actuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Únicamente tendencias visuales difundidas mediante medios de comunicación actuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Solamente actividades comerciales desarrolladas por marcas internacionales reconocidas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál finalidad tienen los mercados dentro de la estructura funcional del sistema moda?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Impedir el intercambio entre la oferta especializada y la demanda de los consumidores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Facilitar las relaciones comerciales entre productos, marcas y compradores.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Eliminar oportunidades competitivas dentro de las organizaciones del sector de la moda actual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir la disponibilidad de productos para diferentes segmentos comerciales actuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué permiten identificar los estilos presentes dentro del sistema moda actual?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La eliminación de preferencias individuales relacionadas con la imagen personal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La desaparición de segmentaciones utilizadas por marcas comerciales modernas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Características visuales asociadas a grupos, tendencias y comportamientos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El rechazo permanente hacia propuestas creativas dentro del mercado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Cuál objetivo cumple una colección dentro de la estrategia comercial de la moda?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Organizar productos bajo criterios coherentes de mercado y diseño.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Eliminar la diferenciación entre líneas comerciales dirigidas a distintos consumidores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir completamente los procesos productivos implementados por organizaciones especializadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir las oportunidades de posicionamiento competitivo dentro del sector actual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué criterio influye directamente en la clasificación de las colecciones comerciales actuales?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Exclusivamente la ubicación geográfica donde opera la organización productiva principal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El segmento objetivo, la temporada y las características específicas del mercado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La eliminación de atributos diferenciadores presentes en productos comercializados actualmente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La sustitución permanente de estrategias comerciales utilizadas por empresas actuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué importancia poseen las temporadas dentro de la planificación comercial del sistema moda?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducir la adaptación empresarial frente a cambios periódicos del mercado actual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Facilitar la programación de la oferta según comportamientos y necesidades temporales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Eliminar procesos estratégicos relacionados con el lanzamiento de colecciones actuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir completamente el análisis comercial utilizado por organizaciones especializadas actualmente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué caracteriza a los productos clasificados dentro de las diferentes categorías del sistema moda?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Su diferenciación según función, uso y segmento objetivo comercial.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La eliminación de atributos comerciales relevantes para consumidores actuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La desaparición de categorías utilizadas por organizaciones especializadas actualmente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El rechazo permanente de segmentaciones comerciales en mercados diversos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué distingue a los productos de calzado y marroquinería comercialmente especializados?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Su función complementaria relacionada con imagen, utilidad y estilo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La eliminación del valor agregado dentro de las propuestas comerciales actuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El reemplazo permanente de prendas utilizadas por consumidores contemporáneos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La reducción de opciones disponibles en mercados competitivos actuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué aportan la joyería y las artesanías dentro de la oferta del sistema moda actual?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminan la diferenciación cultural presente en propuestas comerciales contemporáneas actuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reducen las posibilidades de personalización valoradas por los consumidores modernos actualmente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Incorporan identidad, simbolismo y valor cultural a los productos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Sustituyen completamente las categorías tradicionales dentro de mercados especializados diversos actualmente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Cuál característica define principalmente una serie larga de productos comerciales?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Presentar una amplia variedad de referencias dentro de la misma categoría comercial.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Limitar la oferta disponible para diferentes segmentos de consumidores actuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar la diversidad estratégica presente dentro de los portafolios empresariales actuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir completamente las líneas comerciales utilizadas por organizaciones modernas actuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué propósito cumplen las series de campaña dentro de las estrategias comerciales actuales?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducir la visibilidad de los productos durante acciones promocionales empresariales específicas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar la coherencia entre la comunicación comercial y los objetivos organizacionales actuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir completamente las actividades promocionales utilizadas por marcas contemporáneas actualmente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Apoyar objetivos promocionales asociados a acciones estratégicas temporales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
