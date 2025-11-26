import React from 'react';
import './ResultadoResiduos.css';

const ResultadoResiduos = ({ resultado }) => {
  if (!resultado || !resultado.nombre) {
    return (
      <div className="resultado-container no-encontrado">
        <div className="error-message">
          <h2>❌ Residuo no encontrado</h2>
          <p>Intenta con nombres más comunes o más específicos.</p>
        </div>
      </div>
    );
  }

  const getBolsaEmoji = (bolsa) => {
    switch (bolsa) {
      case 'BLANCA':
        return '⚪';
      case 'NEGRA':
        return '⚫';
      case 'VERDE':
        return '🟢';
      case 'ROJA':
        return '🔴';
      default:
        return '🗑️';
    }
  };

  const getColorBolsa = (bolsa) => {
    switch (bolsa) {
      case 'BLANCA':
        return '#f5f5f5';
      case 'NEGRA':
        return '#1a1a1a';
      case 'VERDE':
        return '#d4edda';
      case 'ROJA':
        return '#f8d7da';
      default:
        return '#ffffff';
    }
  };

  const getTextColor = (bolsa) => {
    if (bolsa === 'BLANCA' || bolsa === 'NEGRA') {
      return bolsa === 'BLANCA' ? '#000' : '#fff';
    }
    return '#000';
  };

  // Precauciones específicas por tipo
  const getPrecauciones = (tipo, bolsa) => {
    const precaucionesMap = {
      'Aprovechable': [
        'Mantén los residuos limpios y secos',
        'Separa por tipos de material si es posible',
        'Retira metales, plásticos y adhesivos antes de entregar'
      ],
      'No Aprovechable': [
        'Asegúrate de que la bolsa negra esté bien cerrada',
        'No mezcles con residuos reciclables',
        'Evita compactar excesivamente'
      ],
      'Orgánico': [
        'Mantén separado de residuos no orgánicos',
        'Deja enfriar restos de comida caliente antes de descartar',
        'Evita exceso de aceites y grasas'
      ],
      'Riesgo Biológico': [
        'Usa guantes y protección al manipular',
        'Coloca en bolsa ROJA certificada',
        'Cierra bien con doble nudo',
        'No reutilices la bolsa',
        'Contacta con empresa especializada para recolección'
      ]
    };
    
    return precaucionesMap[tipo] || [];
  };

  // Instrucciones de desecho por tipo
  const getInstruccionesDesecho = (tipo, bolsa) => {
    const instruccionesMap = {
      'Aprovechable': [
        'Coloca el residuo en bolsa blanca',
        'Lleva al centro de acopio más cercano',
        'Verifica horarios de recolección en tu zona'
      ],
      'No Aprovechable': [
        'Coloca en bolsa negra resistente',
        'Sella bien la bolsa',
        'Deposita en el lugar designado para recolección municipal'
      ],
      'Orgánico': [
        'Coloca en bolsa verde o contenedor',
        'Lleva a compostera si tienes acceso',
        'Alterna con recolección municipal si no tienes compostera'
      ],
      'Riesgo Biológico': [
        'Coloca en bolsa ROJA certificada',
        'Etiqueta claramente como "RESIDUO BIOLÓGICO"',
        'Contacta empresa especializada en residuos peligrosos'
      ]
    };
    
    return instruccionesMap[tipo] || [];
  };

  const precauciones = getPrecauciones(resultado.tipo, resultado.bolsa);
  const instruccionesDesecho = getInstruccionesDesecho(resultado.tipo, resultado.bolsa);

  return (
    <div className="resultado-container">
      {/* Header con bolsa a utilizar */}
      <div className="resultado-header" style={{ backgroundColor: getColorBolsa(resultado.bolsa) }}>
        <div className="bolsa-info">
          <span className="bolsa-emoji">{getBolsaEmoji(resultado.bolsa)}</span>
          <div className="bolsa-texto">
            <h2 style={{ color: getTextColor(resultado.bolsa) }}>
              Bolsa <strong>{resultado.bolsa}</strong>
            </h2>
            <p className="tipo-residuo" style={{ color: getTextColor(resultado.bolsa) }}>
              {resultado.tipo}
            </p>
          </div>
        </div>
      </div>

      <div className="resultado-content">
        {/* Clasificación */}
        <div className="seccion">
          <h3>📍 Clasificación del Residuo</h3>
          <div className="clasificacion-box">
            <p className="clasificacion-nombre"><strong>{resultado.nombre}</strong></p>
            <p className="clasificacion-tipo">Tipo: <strong>{resultado.tipo}</strong></p>
            <p className="clasificacion-bolsa">Bolsa: <strong>{resultado.bolsa}</strong></p>
          </div>
        </div>

        {/* Ejemplos */}
        <div className="seccion">
          <h3>🔍 Ejemplos de este residuo</h3>
          <div className="ejemplos-grid">
            {resultado.ejemplos && resultado.ejemplos.length > 0 ? (
              resultado.ejemplos.map((ejemplo, index) => (
                <div key={index} className="ejemplo-tag">
                  {ejemplo}
                </div>
              ))
            ) : (
              <p>No hay ejemplos disponibles</p>
            )}
          </div>
        </div>

        {/* Instrucciones de desecho */}
        <div className="seccion instrucciones-seccion">
          <h3>📋 Instrucciones de Desecho</h3>
          <ol className="instrucciones-list">
            {instruccionesDesecho.map((instruccion, index) => (
              <li key={index}>{instruccion}</li>
            ))}
            {resultado.instrucciones && resultado.instrucciones.length > 0 && (
              <>
                {resultado.instrucciones.map((instruccion, index) => (
                  <li key={`custom-${index}`}>{instruccion}</li>
                ))}
              </>
            )}
          </ol>
        </div>

        {/* Precauciones */}
        <div className="seccion precauciones-seccion">
          <h3>⚠️ Precauciones Importantes</h3>
          <ul className="precauciones-list">
            {precauciones.map((precaucion, index) => (
              <li key={index}>{precaucion}</li>
            ))}
          </ul>
        </div>

        {/* Información adicional por categoría */}
        <div className="seccion info-adicional">
          <h3>ℹ️ Información Adicional</h3>
          {resultado.tipo === 'Aprovechable' && (
            <div className="info-box">
              <p><strong>¿Por qué es importante?</strong></p>
              <p>Estos residuos pueden ser reciclados y reutilizados, reduciendo la cantidad de basura en rellenos sanitarios y conservando recursos naturales.</p>
              <p><strong>Impacto ambiental:</strong> El reciclaje ahorra energía, agua y reduce emisiones de carbono.</p>
            </div>
          )}
          {resultado.tipo === 'No Aprovechable' && (
            <div className="info-box">
              <p><strong>¿Por qué no es reciclable?</strong></p>
              <p>Este residuo no puede ser procesado para reciclaje debido a su composición o contaminación.</p>
              <p><strong>Disposición final:</strong> Se envía a rellenos sanitarios o incineración controlada.</p>
            </div>
          )}
          {resultado.tipo === 'Orgánico' && (
            <div className="info-box">
              <p><strong>¿Por qué es importante?</strong></p>
              <p>Los residuos orgánicos pueden convertirse en compost, enriqueciendo el suelo y reduciendo metano en rellenos.</p>
              <p><strong>Beneficio:</strong> Compostaje casero reduce basura en 30-40%.</p>
            </div>
          )}
          {resultado.tipo === 'Riesgo Biológico' && (
            <div className="info-box peligro">
              <p><strong>⚠️ RESIDUO PELIGROSO</strong></p>
              <p>Este residuo presenta riesgo para la salud y requiere manejo especial por personal capacitado.</p>
              <p><strong>Prohibido:</strong> Mezclar con residuos normales o reutilizar envases.</p>
            </div>
          )}
        </div>

        {/* Recomendaciones finales */}
        <div className="seccion recomendacion">
          <h3>💡 Recomendaciones Generales</h3>
          <ul>
            <li>Clasifica correctamente para contribuir a la salud pública y ambiental</li>
            <li>Mantén los residuos en el lugar designado hasta el día de recolección</li>
            <li>Consulta el calendario de recolección de tu municipio</li>
            <li>En caso de duda, contacta a la administración local de residuos</li>
            <li>Educate a tu familia sobre la clasificación correcta</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResultadoResiduos;
