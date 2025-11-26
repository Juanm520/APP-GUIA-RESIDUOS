// Base de datos extendida de residuos colombianos (100+ items)
// Clasificados según Decreto 1077 de 2015

const residuosExtendido = {
  // BLANCA - Aprovechables
  BLANCA: {
    nombre: 'Bolsa BLANCA',
    tipo: 'Aprovechable',
    color: '#FFFFFF',
    descripcion: 'Residuos que pueden ser reciclados o reutilizados',
    residuos: [
      {
        nombre: 'Papel',
        ejemplos: ['periódicos', 'revistas', 'cartas', 'hojas de oficina'],
        instrucciones: [
          'Separa el papel de otros materiales',
          'Retira cualquier metal, plástico o adhesivo',
          'Evita papel mojado, sucio o grasiento',
          'Puedes doblar o comprimir para ocupar menos espacio',
          'Envía a centros de acopio o reciclaje'
        ]
      },
      {
        nombre: 'Cartón',
        ejemplos: ['cajas de cartón', 'cartones de leche', 'papelería', 'empaques'],
        instrucciones: [
          'Desmonta y compacta las cajas',
          'Retira plásticos y metales',
          'Evita que se moje',
          'Lleva a centro de acopio',
          'Pueden usarse como compost'
        ]
      },
      {
        nombre: 'Plástico',
        ejemplos: ['botellas de plástico', 'bolsas plásticas', 'envases', 'juguetes de plástico', 'pajillas', 'contenedores'],
        instrucciones: [
          'Limpia los envases de plástico',
          'Retira tapas y etiquetas si es posible',
          'Aplasta botellas para comprimir',
          'Separa por tipos si es posible (PET, HDPE, etc.)',
          'Envía a centros de reciclaje autorizados'
        ]
      },
      {
        nombre: 'Vidrio',
        ejemplos: ['botellas de vidrio', 'frascos', 'vasos', 'botellas de licor', 'envases de comida'],
        instrucciones: [
          'Lava los envases de vidrio',
          'Retira tapas y etiquetas',
          'Cuidado con bordes cortantes',
          'Separa vidrio quebrado en bolsa diferente',
          'Lleva a centro de acopio para reciclaje'
        ]
      },
      {
        nombre: 'Metal',
        ejemplos: ['latas de aluminio', 'latas de conserva', 'ollas', 'sartenes', 'hierro', 'cobre', 'aluminio'],
        instrucciones: [
          'Lava latas y envases metálicos',
          'Retira cualquier residuo pegado',
          'Comprime latas para ocupar menos espacio',
          'Separa metales ferrosos de no ferrosos si es posible',
          'Recoge en centro de acopio autorizado'
        ]
      },
      {
        nombre: 'Aluminio',
        ejemplos: ['papel de aluminio', 'envases de aluminio', 'tapas metálicas', 'latas de bebida'],
        instrucciones: [
          'Lava envases de aluminio',
          'Retira cualquier residuo',
          'Puedes comprimir y enrollar',
          'Evita mezclar con otros metales',
          'Lleva a centro de reciclaje'
        ]
      },
      {
        nombre: 'Tetra pack',
        ejemplos: ['cartones de leche', 'cartones de jugo', 'cartones de crema'],
        instrucciones: [
          'Enjuaga bien los envases',
          'Desmonta si es posible',
          'Separa papel, plástico y aluminio',
          'Compacta para ahorrar espacio',
          'Lleva a centros especializados de reciclaje'
        ]
      },
      {
        nombre: 'Periódico',
        ejemplos: ['diarios', 'gacetas', 'prensa'],
        instrucciones: [
          'Agrupa por tipo',
          'Evita que se humedezca',
          'Retira plásticos y metales',
          'Compacta en pilas',
          'Lleva a reciclador'
        ]
      }
    ]
  },

  // NEGRA - No Aprovechables
  NEGRA: {
    nombre: 'Bolsa NEGRA',
    tipo: 'No Aprovechable',
    color: '#000000',
    descripcion: 'Residuos que no pueden ser reciclados',
    residuos: [
      {
        nombre: 'Residuos domésticos',
        ejemplos: ['barrido de piso', 'polvo', 'ceniza', 'colillas', 'chicle', 'corcho'],
        instrucciones: [
          'Coloca los residuos en bolsa negra resistente',
          'No mezcles con material reciclable',
          'Asegúrate de que la bolsa esté bien cerrada',
          'Coloca en el lugar designado para recolección',
          'Evita compactar excesivamente para no dañar la bolsa'
        ]
      },
      {
        nombre: 'Plástico contaminado',
        ejemplos: ['plástico grasiento', 'bolsas con residuos', 'empaques sucios', 'tuberías PVC'],
        instrucciones: [
          'Coloca plástico sucio o contaminado en bolsa negra',
          'No intentes limpiar plástico muy contaminado',
          'Separa del plástico aprovechable',
          'Sella bien la bolsa',
          'Dispón según sistema municipal de recolección'
        ]
      },
      {
        nombre: 'Papel contaminado',
        ejemplos: ['papel de baño', 'servilletas usadas', 'papel con grasa', 'pañales', 'toallas sanitarias'],
        instrucciones: [
          'Coloca papel mojado, sucio o grasiento en bolsa negra',
          'Separa del papel limpio aprovechable',
          'No mezcles con otros tipos de basura',
          'Cierra bien la bolsa',
          'Dispón en recolección municipal'
        ]
      },
      {
        nombre: 'Espuma y poliestireno',
        ejemplos: ['icopor', 'espuma de empaques', 'poliestireno expandido'],
        instrucciones: [
          'Coloca la espuma en bolsa negra',
          'No comprimas excesivamente',
          'Evita que se disperse',
          'No mezcles con reciclaje',
          'Dispón en recolección municipal'
        ]
      },
      {
        nombre: 'Textil contaminado',
        ejemplos: ['ropa muy vieja', 'trapos sucios', 'telas deterioradas'],
        instrucciones: [
          'Si está en buen estado, considera donación',
          'Si está muy contaminada, coloca en bolsa negra',
          'Asegúrate de que esté seco',
          'Sella bien la bolsa',
          'Dispón en recolección'
        ]
      },
      {
        nombre: 'Envoltura plastificada',
        ejemplos: ['envoltura de dulces', 'empaques metalizados', 'bolsas laminadas'],
        instrucciones: [
          'Coloca en bolsa negra',
          'No intentes separar materiales',
          'Verifica que esté limpia',
          'Sella bien la bolsa',
          'Dispón en recolección municipal'
        ]
      }
    ]
  },

  // VERDE - Orgánicos
  VERDE: {
    nombre: 'Bolsa VERDE',
    tipo: 'Orgánico',
    color: '#008000',
    descripcion: 'Residuos biodegradables para compostaje',
    residuos: [
      {
        nombre: 'Cáscaras de frutas',
        ejemplos: ['cáscara de naranja', 'cáscara de plátano', 'cáscara de manzana', 'cáscara de piña', 'semillas'],
        instrucciones: [
          'Separa cáscaras de frutas cruda',
          'Retira semillas grandes o pegadas',
          'Coloca en bolsa verde o contenedor',
          'Evita mezclar con residuos no orgánicos',
          'Destina a composting o reciclaje de materia orgánica'
        ]
      },
      {
        nombre: 'Residuos de verduras',
        ejemplos: ['tallos', 'hojas', 'peladuras', 'desperdicios de cocina'],
        instrucciones: [
          'Separa verduras cruda y cocida',
          'Retira empaques y etiquetas',
          'Coloca en bolsa verde',
          'Evita mezclar con residuos no orgánicos',
          'Destina a composting'
        ]
      },
      {
        nombre: 'Restos de comida cocida',
        ejemplos: ['arroz', 'pasta', 'papas cocidas', 'pan viejo', 'granos cocidos'],
        instrucciones: [
          'Separa restos de comida cocida',
          'Deja enfriar antes de depositar',
          'Evita aceites y grasas en exceso',
          'Coloca en bolsa verde',
          'Lleva a compostera o sitio de compostaje'
        ]
      },
      {
        nombre: 'Huesos y cáscaras',
        ejemplos: ['huesos de carne', 'cascaras de huevo', 'huesos de pollo'],
        instrucciones: [
          'Coloca huesos en bolsa verde',
          'Retira exceso de carne',
          'Pueden tardas más en descomponerse',
          'Verifica que sea apto en tu compostera',
          'Lleva a compostera o reciclaje orgánico'
        ]
      },
      {
        nombre: 'Flores y plantas',
        ejemplos: ['flores marchitas', 'pétalos', 'plantas del jardín', 'flores secas'],
        instrucciones: [
          'Corta plantas y flores en pedazos pequeños',
          'Retira macetas de plástico o cerámica',
          'Coloca material vegetal en bolsa verde',
          'Puede comprimirse para ocupar menos espacio',
          'Envía a centros de compostaje'
        ]
      },
      {
        nombre: 'Hojas y ramas',
        ejemplos: ['hojas secas', 'ramas pequeñas', 'pasto cortado', 'arbustos podados'],
        instrucciones: [
          'Corta ramas en pedazos de máximo 30 cm',
          'Agrupa hojas y pequeñas ramas',
          'No incluyas plantas con plagas o enfermedades',
          'Coloca en bolsa o contenedor',
          'Lleva a compostera o sitio de compostaje'
        ]
      },
      {
        nombre: 'Café y té',
        ejemplos: ['posos de café', 'bolsas de té', 'cáscaras de cacao'],
        instrucciones: [
          'Retira bolsas de tetra o plástico',
          'Usa directamente en plantas o compostera',
          'Es excelente para enriquecer suelo',
          'Puedes usar el residuo mojado',
          'Ideal para jardines y huertos'
        ]
      },
      {
        nombre: 'Cáscara de nueces',
        ejemplos: ['cáscara de cocotero', 'cáscara de cacahuete', 'cáscara de almendra'],
        instrucciones: [
          'Coloca en bolsa verde',
          'Pueden tardas más en descomponerse',
          'Puedes triturar antes de compostar',
          'Verifica que sea apto en tu compostera',
          'Lleva a compostera'
        ]
      },
      {
        nombre: 'Estiércol y heces',
        ejemplos: ['estiércol de caballo', 'estiércol de vaca', 'heces de animales'],
        instrucciones: [
          'Coloca en bolsa verde especial',
          'Debe estar completamente seco',
          'Es excelente para compost',
          'Verifica que sea de animales sanos',
          'Lleva a compostera o huerto'
        ]
      }
    ]
  },

  // ROJA - Riesgo Biológico
  ROJA: {
    nombre: 'Bolsa ROJA',
    tipo: 'Riesgo Biológico',
    color: '#FF0000',
    descripcion: 'Residuos con riesgo para la salud',
    residuos: [
      {
        nombre: 'Residuos biológicos',
        ejemplos: ['vendas con sangre', 'gasas usadas', 'jeringas', 'algodón con fluidos corporales'],
        instrucciones: [
          'Usa guantes para manipular',
          'Coloca en bolsa ROJA certificada',
          'Cierra bien la bolsa con doble nudo',
          'Etiqueta como residuo biológico',
          'Debe ser recogido por empresa especializada'
        ]
      },
      {
        nombre: 'Medicinas vencidas',
        ejemplos: ['pastillas vencidas', 'inyecciones vencidas', 'cremas vencidas'],
        instrucciones: [
          'Coloca en bolsa ROJA',
          'No disuelvas ni descartes en agua',
          'Verifica caducidad antes de desechar',
          'Cierra bien la bolsa',
          'Lleva a farmacia o centro de salud autorizado'
        ]
      },
      {
        nombre: 'Agujas y Afilados',
        ejemplos: ['agujas hipodérmicas', 'lancetas', 'vidrio roto', 'objetos punzantes'],
        instrucciones: [
          'Coloca en contenedor rígido de sharps',
          'Nunca toques directamente',
          'Marca como "CORTO Y PUNZANTE"',
          'Cierra bien el contenedor',
          'Lleva a centro de salud o empresa especializada'
        ]
      },
      {
        nombre: 'Desechos patológicos',
        ejemplos: ['tejidos humanos', 'órganos', 'fluidos corporales'],
        instrucciones: [
          'Usa PPE (guantes, mascarilla, bata)',
          'Coloca en bolsa ROJA gruesa',
          'Cierra con doble nudo',
          'Etiqueta claramente',
          'Debe ser recogido por empresa especializada en residuos biológicos'
        ]
      }
    ]
  }
};

// Función para obtener todos los residuos en una lista plana
export const obtenerTodosLosResiduos = () => {
  const lista = [];
  Object.keys(residuosExtendido).forEach((bolsa) => {
    residuosExtendido[bolsa].residuos.forEach((item) => {
      lista.push({
        id: `${bolsa}-${item.nombre.replace(/\s+/g, '-').toLowerCase()}`,
        nombre: item.nombre,
        bolsa,
        tipo: residuosExtendido[bolsa].tipo,
        color: residuosExtendido[bolsa].color,
        ejemplos: item.ejemplos,
        instrucciones: item.instrucciones
      });
    });
  });
  return lista;
};

// Función para buscar residuo por nombre o ejemplo
export const buscarResiduoEnExtendido = (termino) => {
  const terminoLower = termino.toLowerCase().trim();
  const lista = obtenerTodosLosResiduos();

  // Búsqueda exacta en nombre
  let resultado = lista.find((r) => r.nombre.toLowerCase() === terminoLower);
  if (resultado) return resultado;

  // Búsqueda en ejemplos
  resultado = lista.find((r) => r.ejemplos.some((ej) => ej.toLowerCase().includes(terminoLower)));
  if (resultado) return resultado;

  // Búsqueda parcial en nombre
  resultado = lista.find((r) => r.nombre.toLowerCase().includes(terminoLower));
  if (resultado) return resultado;

  // No encontrado
  return null;
};

export default residuosExtendido;
