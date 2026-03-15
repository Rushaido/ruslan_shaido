document.addEventListener('DOMContentLoaded', function() {
  

  const CONFIG = {
    checkboxToTable: {
      1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, 11: 11
    },
    
    prices: {
      1: 1400, 2: 1250, 3: 1250, 4: 1400, 5: 0, 6: 1250, 7: 1400, 8: 1400, 9: 1400, 10: 1250, 11: 1250
    },
    
    tableColors: {
      1: 'red', 2: 'black', 3: 'black', 4: 'red', 5: 'gray', 6: 'black', 
      7: 'red', 8: 'red', 9: 'red', 10: 'black', 11: 'black'
    },
    
    tableShapes: {
      1: { 
        type: 'oval_group',
        elements: [
          {type: 'rect', x: 507.5, y: 35.5, width: 83, height: 28, stroke: true},
          {type: 'circle', cx: 527, cy: 20, r: 11.5},
          {type: 'circle', cx: 570, cy: 20, r: 11.5},
          {type: 'circle', cx: 606, cy: 48, r: 11.5},
          {type: 'circle', cx: 570, cy: 79, r: 11.5},
          {type: 'circle', cx: 527, cy: 79, r: 11.5}
        ],
        text: {x: 549, y: 50}
      },
      
      2: { 
        type: 'vertical_group',
        elements: [
          {type: 'rect', x: 712.5, y: 4.5, width: 40, height: 93, stroke: true},
          {type: 'circle', cx: 697, cy: 16, r: 11.5},
          {type: 'circle', cx: 768, cy: 17, r: 11.5},
          {type: 'circle', cx: 697, cy: 49, r: 11.5},
          {type: 'circle', cx: 768, cy: 50, r: 11.5},
          {type: 'circle', cx: 697, cy: 82, r: 11.5},
          {type: 'circle', cx: 768, cy: 83, r: 11.5},
          {type: 'circle', cx: 733, cy: 113, r: 11.5}
        ],
        text: {x: 733, y: 54}
      },
      
      3: { 
        type: 'vertical_group',
        elements: [
          {type: 'rect', x: 712.5, y: 185.5, width: 40, height: 93, stroke: true},
          {type: 'circle', cx: 697, cy: 197, r: 11.5},
          {type: 'circle', cx: 768, cy: 198, r: 11.5},
          {type: 'circle', cx: 697, cy: 230, r: 11.5},
          {type: 'circle', cx: 768, cy: 231, r: 11.5},
          {type: 'circle', cx: 697, cy: 263, r: 11.5},
          {type: 'circle', cx: 768, cy: 264, r: 11.5},
          {type: 'circle', cx: 733, cy: 294, r: 11.5}
        ],
        text: {x: 733, y: 236}
      },
      
      4: { 
        type: 'oval_group',
        elements: [
          {type: 'rect', x: 507.5, y: 182.5, width: 83, height: 28, stroke: true},
          {type: 'circle', cx: 527, cy: 167, r: 11.5},
          {type: 'circle', cx: 570, cy: 167, r: 11.5},
          {type: 'circle', cx: 606, cy: 195, r: 11.5},
          {type: 'circle', cx: 570, cy: 226, r: 11.5},
          {type: 'circle', cx: 527, cy: 226, r: 11.5}
        ],
        text: {x: 548, y: 197}
      },
      
      5: {
        type: 'vertical_group',
        elements: [
          {type: 'rect', x: 494.5, y: 278.5, width: 40, height: 93, stroke: true},
          {type: 'circle', cx: 479, cy: 290, r: 11.5},
          {type: 'circle', cx: 550, cy: 291, r: 11.5},
          {type: 'circle', cx: 479, cy: 323, r: 11.5},
          {type: 'circle', cx: 550, cy: 324, r: 11.5},
          {type: 'circle', cx: 479, cy: 356, r: 11.5},
          {type: 'circle', cx: 550, cy: 357, r: 11.5},
          {type: 'circle', cx: 515, cy: 387, r: 11.5}
        ],
        text: {x: 515, y: 325},
        disabled: true
      },
      
      6: { 
        type: 'vertical_group',
        elements: [
          {type: 'rect', x: 273.5, y: 278.5, width: 40, height: 93, stroke: true},
          {type: 'circle', cx: 258, cy: 290, r: 11.5},
          {type: 'circle', cx: 329, cy: 291, r: 11.5},
          {type: 'circle', cx: 258, cy: 323, r: 11.5},
          {type: 'circle', cx: 329, cy: 324, r: 11.5},
          {type: 'circle', cx: 258, cy: 356, r: 11.5},
          {type: 'circle', cx: 329, cy: 357, r: 11.5},
          {type: 'circle', cx: 294, cy: 387, r: 11.5}
        ],
        text: {x: 294, y: 327}
      },
      
      7: { 
        type: 'oval_horizontal_group',
        elements: [
          {type: 'rect', x: 320.5, y: 183.5, width: 83, height: 28, stroke: true},
          {type: 'circle', cx: 383, cy: 227, r: 11.5},
          {type: 'circle', cx: 419, cy: 197, r: 11.5},
          {type: 'circle', cx: 305, cy: 197, r: 11.5},
          {type: 'circle', cx: 340, cy: 227, r: 11.5}
        ],
        text: {x: 362, y: 198}
      },
      
      8: { 
        type: 'triangle_group',
        elements: [
          {type: 'rect', x: 187.5, y: 169.5, width: 61, height: 36, stroke: true},
          {type: 'circle', cx: 216, cy: 221, r: 11.5},
          {type: 'circle', cx: 171, cy: 185, r: 11.5},
          {type: 'circle', cx: 216, cy: 154, r: 11.5}
        ],
        text: {x: 216, y: 190}
      },
      
      9: {
        type: 'triangle_group',
        elements: [
          {type: 'rect', x: 222.5, y: 27.5, width: 61, height: 36, stroke: true},
          {type: 'circle', cx: 251, cy: 79, r: 11.5},
          {type: 'circle', cx: 206, cy: 43, r: 11.5},
          {type: 'circle', cx: 251, cy: 12, r: 11.5}
        ],
        text: {x: 250, y: 47}
      },
      
      10: {
        type: 'l_shape_group',
        elements: [
          {type: 'path', d: 'M110.5 65V0.5H141.5V64.8261V92.5H15.5V65.5H110H110.5V65Z', stroke: true},
          {type: 'circle', cx: 27, cy: 50, r: 11.5},
          {type: 'circle', cx: 61, cy: 50, r: 11.5},
          {type: 'circle', cx: 94, cy: 50, r: 11.5},
          {type: 'circle', cx: 94, cy: 16, r: 11.5}
        ],
        text: {x: 124, y: 79}
      },
      
      11: { 
        type: 'vertical_group',
        elements: [
          {type: 'rect', x: 27.5, y: 185.5, width: 40, height: 93, stroke: true},
          {type: 'circle', cx: 12, cy: 197, r: 11.5},
          {type: 'circle', cx: 83, cy: 198, r: 11.5},
          {type: 'circle', cx: 12, cy: 230, r: 11.5},
          {type: 'circle', cx: 83, cy: 231, r: 11.5},
          {type: 'circle', cx: 12, cy: 263, r: 11.5},
          {type: 'circle', cx: 83, cy: 264, r: 11.5},
          {type: 'circle', cx: 48, cy: 294, r: 11.5}
        ],
        text: {x: 48, y: 235}
      }
    },
    
    colors: {
      red: {
        fill: 'rgba(165, 21, 5, 1)',       
        stroke: 'rgba(188, 51, 36, 1)',   
        hover: 'rgba(188, 51, 36, 0.25)',
        selected: 'rgba(165, 21, 5, 1)'
      },
      black: {
        fill: 'rgba(31, 30, 30, 1)',      
        stroke: 'rgba(31, 30, 30, 1)',    
        hover: 'rgba(31, 30, 30, 0.25)',
        selected: 'rgba(31, 30, 30, 1)'
      },
      gray: {
        fill: 'rgba(191, 191, 191, 1)',   
        stroke: 'rgba(191, 191, 191, 1)',  
        hover: 'rgba(191, 191, 191, 1)',
        selected: 'rgba(191, 191, 191, 1)'
      }
    }
  };
  
  // ================== ПЕРЕМЕННЫЕ ==================
  let selectedTables = new Set();
  const overlays = new Map();
  
  // ================== ПОЛУЧАЕМ ЭЛЕМЕНТЫ ==================
  const elements = {
    svg: document.querySelector('.reserve__scene'),
    check5: document.querySelector('.reserve__check:nth-child(5) input')
  };
  
  // ================== ФУНКЦИИ ==================
  
  // 1. Создаем точные фигуры столов
  function createOverlays() {
    console.log('Создаем точные фигуры столов...');
    
    if (!elements.svg) {
      console.error('SVG не найден');
      return;
    }
    
    document.querySelectorAll('.table-overlay-group').forEach(el => el.remove());
    overlays.clear();
    
    for (let tableNum = 1; tableNum <= 11; tableNum++) {
      const shape = CONFIG.tableShapes[tableNum];
      const colorName = CONFIG.tableColors[tableNum];
      const colors = CONFIG.colors[colorName];
      
      if (!shape) {
        console.log(`Нет фигуры для стола ${tableNum}`);
        continue;
      }
      
      const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      group.className.baseVal = `table-overlay-group table-${tableNum}`;
      group.dataset.tableId = tableNum;
      group.dataset.color = colorName;
      
      // ОСОБАЯ ОБРАБОТКА ДЛЯ СТОЛА 5
      if (tableNum === 5) {
        group.classList.add('table-disabled');
        group.style.cursor = 'default';
        group.style.pointerEvents = 'none';
        group.style.opacity = '1';

        createShapeElements(group, shape, colors, true);
        
        console.log(`   Стол ${tableNum}: СЕРЫЙ, ЗАКРАШЕННЫЙ, ЗАБРОНИРОВАН`);
      } else {
        group.style.cursor = 'pointer';
        group.style.pointerEvents = 'all';
        
        createShapeElements(group, shape, colors, false);
        
        setupOverlayEvents(group, tableNum, colorName);
        
      }
      
      // Добавляем группу в SVG
      elements.svg.appendChild(group);
      overlays.set(tableNum, group);
    }
    
    console.log(`Создано ${overlays.size} фигур столов`);
  }
  
  // 2. Создание элементов фигуры
  function createShapeElements(group, shape, colors, isFilled) {
    shape.elements.forEach(element => {
      let svgElement;
      
      switch(element.type) {
        case 'rect':
          svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
          svgElement.setAttribute('x', element.x);
          svgElement.setAttribute('y', element.y);
          svgElement.setAttribute('width', element.width);
          svgElement.setAttribute('height', element.height);
          svgElement.setAttribute('data-original-fill', 'transparent');
          break;
          
        case 'circle':
          svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          svgElement.setAttribute('cx', element.cx);
          svgElement.setAttribute('cy', element.cy);
          svgElement.setAttribute('r', element.r);
          svgElement.setAttribute('data-original-fill', 'transparent');
          break;
          
        case 'path':
          svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          svgElement.setAttribute('d', element.d);
          svgElement.setAttribute('data-original-fill', 'transparent');
          break;
      }
      
      if (svgElement) {
        if (isFilled) {
          svgElement.setAttribute('fill', colors.fill);
          svgElement.setAttribute('stroke', 'none'); 
          svgElement.setAttribute('stroke-width', '0');
          svgElement.setAttribute('data-original-fill', colors.fill);
        } else {
          svgElement.setAttribute('fill', 'transparent');
          svgElement.setAttribute('stroke', 'none');
          svgElement.setAttribute('stroke-width', '0');
        }
        
        group.appendChild(svgElement);
      }
    });
  }
  
  // 3. Создание номера стола (белый текст) - ТОЛЬКО ПРИ ВЫБОРЕ
  function createTableNumber(group, textConfig, tableNum) {
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', textConfig.x);
    text.setAttribute('y', textConfig.y);
    text.setAttribute('fill', '#FFFFFF');
    text.setAttribute('font-family', 'Open Sans');
    text.setAttribute('font-size', '19px');
    text.setAttribute('font-weight', '800');
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('dominant-baseline', 'middle');
    text.setAttribute('pointer-events', 'none');
    
    text.setAttribute('style', 'font-size: 19px !important;');
    
    text.textContent = tableNum;
    text.className.baseVal = 'table-number-overlay';
    
    group.appendChild(text);
    return text;
  }
  
  // 4. Удаление номера стола (при отмене выбора)
  function removeTableNumber(group) {
    const existingText = group.querySelector('.table-number-overlay');
    if (existingText) {
      group.removeChild(existingText);
    }
  }
  
  // 5. События для оверлея - ИСПРАВЛЕНЫ события hover
  function setupOverlayEvents(group, tableNum, colorName) {
    const colors = CONFIG.colors[colorName];
    
    group.addEventListener('click', function(e) {
      e.stopPropagation();
      handleTableClick(tableNum);
    });
    
    group.addEventListener('mouseenter', function() {
      if (!selectedTables.has(tableNum)) {
        this.querySelectorAll('rect, path, circle').forEach(el => {
          el.style.fill = colors.hover;
        });
      }
    });
    
    group.addEventListener('mouseleave', function() {
      if (!selectedTables.has(tableNum)) {
        this.querySelectorAll('rect, path, circle').forEach(el => {
          el.style.fill = el.getAttribute('data-original-fill') || 'transparent';
        });
      }
    });
  }
  
  // 6. Обработка клика на стол
  function handleTableClick(tableNum) {
    console.log(` Клик на стол ${tableNum}`);
    
    if (tableNum === 5) return;
    
    const checkboxes = document.querySelectorAll('.reserve__check');
    const checkboxIndex = tableNum - 1;
    
    if (checkboxIndex >= checkboxes.length) {
      console.error(`Нет чекбокса для стола ${tableNum}`);
      return;
    }
    
    const checkbox = checkboxes[checkboxIndex].querySelector('input');
    if (!checkbox || checkbox.disabled) return;
    
    checkbox.checked = !checkbox.checked;
    console.log(`Стол ${tableNum}: ${checkbox.checked ? 'Ya' : 'No'}`);
    
    const event = new Event('change', { bubbles: true });
    checkbox.dispatchEvent(event);
  }
  
  // 7. Подсветка стола при выборе - ИСПРАВЛЕНО
  function highlightTable(tableNum, isSelected) {
    if (tableNum === 5) return true;
    
    const group = overlays.get(tableNum);
    if (!group) return false;
    
    const colorName = CONFIG.tableColors[tableNum];
    const colors = CONFIG.colors[colorName];
    
    if (isSelected) {
      group.querySelectorAll('rect, path, circle').forEach(el => {
        el.setAttribute('fill', colors.selected);
        el.setAttribute('data-original-fill', colors.selected);
        el.style.fill = colors.selected;
      });
      
      const shape = CONFIG.tableShapes[tableNum];
      if (shape && shape.text && !group.querySelector('.table-number-overlay')) {
        createTableNumber(group, shape.text, tableNum);
      }
      
    } else {
      group.querySelectorAll('rect, path, circle').forEach(el => {
        el.setAttribute('fill', 'transparent');
        el.setAttribute('data-original-fill', 'transparent');
        el.style.fill = 'transparent';
      });
      
      removeTableNumber(group);
    }
    
    return true;
  }
  
  // 8. Стили для чекбокса 5
  function styleCheckbox5() {
    if (!elements.check5) return;
    
    const checkContainer = elements.check5.closest('.reserve__check');
    if (checkContainer) {
      checkContainer.classList.add('check--gray-unselected');
    }
  }
  
  // 9. Настройка чекбоксов
  function setupCheckboxes() {
    const checkboxes = document.querySelectorAll('.check__input');
    
    styleCheckbox5();
    
    checkboxes.forEach((checkbox, index) => {
      const checkboxNum = index + 1;
      const tableNum = checkboxNum;
      
      if (tableNum === 5) {
        checkbox.disabled = true;
        checkbox.checked = false;
      }
      
      if (checkbox.checked && tableNum !== 5) {
        selectedTables.add(tableNum);
      }
      
      checkbox.addEventListener('change', function() {
        if (tableNum === 5) {
          this.checked = false;
          return;
        }
        
        if (this.checked) {
          selectedTables.add(tableNum);
          console.log(`Чекбокс ${checkboxNum} → Стол ${tableNum} добавлен`);
        } else {
          selectedTables.delete(tableNum);
          console.log(`Чекбокс ${checkboxNum} → Стол ${tableNum} удален`);
        }
        
        highlightTable(tableNum, this.checked);
        updateUI();
      });
    });
  }
  
  // 10. Обновление UI
  function updateUI() {
    let redCount = 0;
    let blackCount = 0;
    let totalAmount = 0;
    
    selectedTables.forEach(tableNum => {
      const price = CONFIG.prices[tableNum];
      if (price === 1400) {
        redCount++;
        totalAmount += 1400;
      } else if (price === 1250) {
        blackCount++;
        totalAmount += 1250;
      }
    });
    
    const redSum = redCount * 1400;
    const blackSum = blackCount * 1250;
    
    document.querySelectorAll('.reserve__qty').forEach((el, index) => {
      if (index === 0) el.textContent = redCount;
      if (index === 1) el.textContent = blackCount;
    });
    
    document.querySelectorAll('.reserve__sum').forEach((el, index) => {
      if (index === 0) el.textContent = redSum;
      if (index === 1) el.textContent = blackSum;
    });
    
    document.querySelectorAll('.reserve__total').forEach(el => {
      el.textContent = totalAmount;
    });
    
    console.log(`Выбрано: ${Array.from(selectedTables).sort((a,b)=>a-b)} |  ${redCount} |  ${blackCount} |  ${totalAmount} ₽`);
  }
  
  // 11. Кнопка покупки
  function setupBuyButton() {
    const buyButton = document.querySelector('.reserve__submit');
    if (!buyButton) return;
    
    buyButton.addEventListener('click', function(e) {
      e.preventDefault();
      
      if (selectedTables.size === 0) {
        alert('Пожалуйста, выберите хотя бы один стол');
        return;
      }
      
      const tables = Array.from(selectedTables).sort((a, b) => a - b);
      const redCount = tables.filter(t => CONFIG.prices[t] === 1400).length;
      const blackCount = tables.filter(t => CONFIG.prices[t] === 1250).length;
      const total = redCount * 1400 + blackCount * 1250;
      
      const message = 
        ` Ваш заказ:\n\n` +
        `Столы: ${tables.join(', ')}\n\n` +
        ` Красные (1400 ₽): ${redCount} шт. = ${(redCount * 1400).toLocaleString()} ₽\n` +
        ` Черные (1250 ₽): ${blackCount} шт. = ${(blackCount * 1250).toLocaleString()} ₽\n\n` +
        ` Итого: ${total.toLocaleString()} ₽\n\n` +
        `Подтвердить покупку?`;
      
      if (confirm(message)) {
        alert(' Покупка подтверждена!');
      }
    });
  }
  
  
  // 12. Добавление стилей
  function addStyles() {
    if (document.querySelector('#reserve-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'reserve-styles';
    style.textContent = `
      .table-overlay-group {
        transition: all 0.3s ease;
      }
      .table-overlay-group:hover {
        opacity: 1;
      }
      .table-disabled {
        opacity: 1 !important;
        filter: grayscale(0.6);
      }
      
      .reserve__total:after,
      .reserve__sum:after {
        content: " ₽";
        margin-left: 4px;
      }
      
      .table-overlay-group .table-number-overlay {
        fill: white !important;
        font-family: 'Open Sans', sans-serif !important;
        font-weight: 800 !important;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        font-size: 19px !important;
        pointer-events: none;
      }
      
      .table-overlay-group *:focus {
        outline: none;
      }
        
    `;
    document.head.appendChild(style);
  }
  
  // 13. Подсветка при загрузке
  function highlightInitialSelection() {
    selectedTables.forEach(tableNum => {
      highlightTable(tableNum, true);
    });
  }
  
  // 14. Спасение сетки
  function fixReserveGrid() {
      const reserve = document.querySelector('.reserve');
      if (!reserve) return;
      
      function updateGrid() {
          const width = window.innerWidth;
          
          if (width <= 320) {
              reserve.style.display = 'grid';
              reserve.style.gridTemplateColumns = '1fr';
              reserve.style.gridTemplateAreas = '"scheme" "legend" "note" "checkbox" "order"';
              reserve.style.gap = '25px'; 
              reserve.style.width = '100%';
              
              document.querySelectorAll('.reserve h3, .reserve h4').forEach(el => {
                  el.style.fontSize = '90%';
              });
              
              document.querySelectorAll('.reserve__scheme-title').forEach(el => {
                  el.style.fontSize = '14px';
              });
              
              document.querySelectorAll('.reserve__check label, .reserve__order *, .reserve__legend *').forEach(el => {
                  el.style.fontSize = '13px';
              });
              
              const legend = document.querySelector('.reserve__legend');
              const order = document.querySelector('.reserve__order');
              if (legend) legend.style.textAlign = 'left';
              if (order) order.style.textAlign = 'left';
              
          } else if (width <= 600) {
              reserve.style.display = 'grid';
              reserve.style.gridTemplateColumns = '1fr';
              reserve.style.gridTemplateAreas = '"scheme" "checkbox" "legend" "order"';
              reserve.style.gap = '30px'; 
              reserve.style.width = '100%';
              
              document.querySelectorAll('.reserve h3, .reserve h4, .reserve__scheme-title').forEach(el => {
                  el.style.fontSize = '';
              });
              
              document.querySelectorAll('.reserve__check, .reserve__order, .reserve__legend').forEach(el => {
                  el.style.fontSize = '';
              });
              
              const legend = document.querySelector('.reserve__legend');
              if (legend) legend.style.textAlign = 'left';
              
          } else if (width <= 768) {
              reserve.style.display = 'grid';
              reserve.style.gridTemplateColumns = '1fr';
              reserve.style.gridTemplateAreas = '"scheme" "checkbox" "legend" "order"';
              reserve.style.gap = '40px';
              
              const legend = document.querySelector('.reserve__legend');
              if (legend) legend.style.textAlign = 'left';
              
          } else if (width <= 1020) {
              reserve.style.display = 'grid';
              reserve.style.gridTemplateColumns = '1fr 1fr';
              reserve.style.gridTemplateAreas = '"scheme scheme" "checkbox legend" "checkbox order"';
              reserve.style.gap = '40px 30px';
              reserve.style.width = '100%';
              
              const checks = document.querySelector('.reserve__checks');
              const scheme = document.querySelector('.reserve__scheme');
              const order = document.querySelector('.reserve__order');
              const legend = document.querySelector('.reserve__legend');
              
              if (checks) checks.style.gridArea = 'checkbox';
              if (scheme) scheme.style.gridArea = 'scheme';
              if (order) order.style.gridArea = 'order';
              if (legend) legend.style.gridArea = 'legend';
              
          } else {
              reserve.style.display = 'grid';
              reserve.style.gridTemplateColumns = '405px 1fr';
              reserve.style.gridTemplateAreas = '"checkbox scheme" "order legend"';
              reserve.style.gap = '65px 11%';
              
              const legend = document.querySelector('.reserve__legend');
              if (legend) legend.style.textAlign = 'right';
          }
      }
      
      updateGrid();
      
      let resizeTimer;
      window.addEventListener('resize', function() {
          clearTimeout(resizeTimer);
          resizeTimer = setTimeout(updateGrid, 100);
      });
      
      const style = document.createElement('style');
      style.textContent = `
          @media (max-width: 319px) {
              .reserve {
                  grid-template-areas: 
                      "scheme"
                      "legend"
                      "note"
                      "checkbox"
                      "order" !important;
                  gap: 25px !important;
              }
              
              .reserve h3 {
                  font-size: 1.1em !important;
              }
              .reserve h4 {
                  font-size: 1em !important;
              }
              .reserve__scheme-title {
                  font-size: 14px !important;
              }
              .reserve__check label {
                  font-size: 13px !important;
              }
              .reserve__order * {
                  font-size: 13px !important;
              }
              .reserve__legend * {
                  font-size: 13px !important;
              }
          }
          
          /* Для 321px - 600px */
          @media (min-width: 321px) and (max-width: 600px) {
              .reserve {
                  grid-template-areas: "scheme" "checkbox" "legend" "order" !important;
                  gap: 30px !important;
              }
          }
          
          /* Для 601px - 768px */
          @media (min-width: 601px) and (max-width: 768px) {
              .reserve {
                  grid-template-areas: "scheme" "checkbox" "legend" "order" !important;
              }
          }
          
      `;
      document.head.appendChild(style);
  }
  
  function init() {
    
    addStyles();
    createOverlays();
    setupCheckboxes();
    setupBuyButton();
    highlightInitialSelection();
    updateUI();
    fixReserveGrid();
  }
  
  setTimeout(init, 100);
});