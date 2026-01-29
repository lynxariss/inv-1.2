// Animación de barras de progreso al cargar
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelectorAll('.progress-fill').forEach(bar => {
      bar.style.width = bar.getAttribute('data-width');
    });
  }, 300);
});

// Toggle de secciones (acordeón)
function toggleSection(header) {
  const content = header.nextElementSibling;
  const isCollapsed = header.classList.toggle('collapsed');
  
  if (isCollapsed) {
    content.style.maxHeight = '0px';
    content.style.opacity = '0';
    content.style.overflow = 'hidden';
  } else {
    content.style.maxHeight = content.scrollHeight + 'px';
    content.style.opacity = '1';
    setTimeout(() => {
      content.style.maxHeight = 'none';
      content.style.overflow = 'visible';
    }, 300);
  }
}

// Expandir/Colapsar todo
let allExpanded = true;
function expandAll() {
  const headers = document.querySelectorAll('h2');
  allExpanded = !allExpanded;
  
  headers.forEach(header => {
    const content = header.nextElementSibling;
    if (allExpanded) {
      header.classList.remove('collapsed');
      content.style.maxHeight = 'none';
      content.style.opacity = '1';
      content.style.overflow = 'visible';
    } else {
      header.classList.add('collapsed');
      content.style.maxHeight = '0px';
      content.style.opacity = '0';
      content.style.overflow = 'hidden';
    }
  });
}

// Modo Oscuro/Claro
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  const icon = document.getElementById('theme-icon');
  
  html.setAttribute('data-theme', newTheme);
  icon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
  
  // Guardar preferencia
  localStorage.setItem('theme', newTheme);
}

// Cargar tema guardado
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  document.getElementById('theme-icon').textContent = '☀️';
}

// Efecto de typing para el título (opcional, elegante)
const title = document.querySelector('h1');
const originalText = title.textContent;
title.textContent = '';

let i = 0;
const typeWriter = () => {
  if (i < originalText.length) {
    title.textContent += originalText.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
};

setTimeout(typeWriter, 500);

// Interacción con la tabla: resaltar fila al hacer clic
document.querySelectorAll('tbody tr').forEach(row => {
  row.addEventListener('click', function() {
    // Remover clase activa de otras filas
    document.querySelectorAll('tbody tr').forEach(r => {
      r.style.background = '';
      r.style.transform = '';
    });
    
    // Activar fila actual
    this.style.background = 'var(--primary)';
    this.style.color = 'white';
    this.style.transform = 'scale(1.02)';
    
    // Restaurar después de 2 segundos
    setTimeout(() => {
      this.style.background = '';
      this.style.color = '';
      this.style.transform = '';
    }, 2000);
  });
});

// Log de carga
console.log('📦 Sistema de Gestión de Inventario cargado correctamente');
