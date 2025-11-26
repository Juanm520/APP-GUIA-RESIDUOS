import React, { useState, useMemo } from 'react';
import { obtenerTodosLosResiduos } from '../data/residuosExtendido';
import ResultadoResiduos from './ResultadoResiduos';
import './BuscadorResiduos.css';

const BuscadorResiduos = () => {
  const [filtro, setFiltro] = useState('');
  const [resultado, setResultado] = useState(null);
  const [buscado, setBuscado] = useState(false);
  const [botonFiltro, setBotonFiltro] = useState('TODOS');

  const todosResiduos = obtenerTodosLosResiduos();

  // Filtrar residuos según entrada y categoría
  const residuosFiltrados = useMemo(() => {
    let lista = todosResiduos;

    // Filtrar por categoría (bolsa)
    if (botonFiltro !== 'TODOS') {
      lista = lista.filter((r) => r.bolsa === botonFiltro);
    }

    // Filtrar por búsqueda
    if (filtro.trim()) {
      const filtroLower = filtro.toLowerCase();
      lista = lista.filter(
        (r) =>
          r.nombre.toLowerCase().includes(filtroLower) ||
          r.ejemplos.some((ej) => ej.toLowerCase().includes(filtroLower))
      );
    }

    return lista.sort((a, b) => a.nombre.localeCompare(b.nombre));
  }, [filtro, botonFiltro, todosResiduos]);

  const handleSeleccionar = (residuo) => {
    setResultado(residuo);
    setBuscado(true);
    setFiltro('');
  };

  const handleLimpiar = () => {
    setResultado(null);
    setBuscado(false);
    setFiltro('');
    setBotonFiltro('TODOS');
  };

  return (
    <div className="buscador-container">
      <div className="buscador-header">
        <h1>🗑️ Guía de Separación de Residuos</h1>
        <p className="subtitle">Según normas colombianas (Decreto 1077 de 2015)</p>
      </div>

      {!buscado && (
        <>
          {/* Filtros por categoría */}
          <div className="filtros-categoria">
            <button
              className={`btn-filtro ${botonFiltro === 'TODOS' ? 'activo' : ''}`}
              onClick={() => setBotonFiltro('TODOS')}
            >
              Todos
            </button>
            <button
              className={`btn-filtro blanca ${botonFiltro === 'BLANCA' ? 'activo' : ''}`}
              onClick={() => setBotonFiltro('BLANCA')}
            >
              ⚪ Blanca
            </button>
            <button
              className={`btn-filtro negra ${botonFiltro === 'NEGRA' ? 'activo' : ''}`}
              onClick={() => setBotonFiltro('NEGRA')}
            >
              ⚫ Negra
            </button>
            <button
              className={`btn-filtro verde ${botonFiltro === 'VERDE' ? 'activo' : ''}`}
              onClick={() => setBotonFiltro('VERDE')}
            >
              🟢 Verde
            </button>
            <button
              className={`btn-filtro roja ${botonFiltro === 'ROJA' ? 'activo' : ''}`}
              onClick={() => setBotonFiltro('ROJA')}
            >
              🔴 Roja
            </button>
          </div>

          {/* Búsqueda filtrada */}
          <div className="buscador-form">
            <input
              type="text"
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
              placeholder="Busca un residuo (ej: papel, plátano, jeringas...)"
              className="buscador-input"
              autoFocus
            />
          </div>

          {/* Lista de residuos */}
          <div className="residuos-lista">
            {residuosFiltrados.length > 0 ? (
              <div className="residuos-grid">
                {residuosFiltrados.map((residuo) => (
                  <div
                    key={residuo.id}
                    className="residuo-item"
                    onClick={() => handleSeleccionar(residuo)}
                  >
                    <div className="residuo-header" style={{ backgroundColor: residuo.color }}>
                      <strong>{residuo.nombre}</strong>
                      <small>{residuo.tipo}</small>
                    </div>
                    <div className="residuo-ejemplos">
                      {residuo.ejemplos.slice(0, 2).join(', ')}
                      {residuo.ejemplos.length > 2 && '...'}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="sin-resultados">
                <p>No se encontraron residuos. Intenta con otro término.</p>
              </div>
            )}
          </div>
        </>
      )}

      {buscado && resultado && (
        <>
          <ResultadoResiduos resultado={resultado} />
          <button onClick={handleLimpiar} className="btn-volver">
            ← Volver a la búsqueda
          </button>
        </>
      )}
    </div>
  );
};

export default BuscadorResiduos;
