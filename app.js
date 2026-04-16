// Data for Oaxacan Indigenous Communities in California
const communityData = {
  language: [
    { name: 'Zapoteco', value: 85000, color: '#E85D75', regions: ['Sierra Norte', 'Valles Centrales', 'Sierra Sur', 'Istmo'] },
    { name: 'Mixteco', value: 120000, color: '#5B8DEE', regions: ['Mixteca Alta', 'Mixteca Baja', 'Mixteca Costa'] },
    { name: 'Triqui', value: 35000, color: '#F6A443', regions: ['Mixteca Alta'] },
    { name: 'Mixe', value: 28000, color: '#50C878', regions: ['Sierra Norte'] },
    { name: 'Chatino', value: 22000, color: '#9D84B7', regions: ['Sierra Sur', 'Costa'] },
    { name: 'Mazateco', value: 18000, color: '#FF6B9D', regions: ['Cañada'] },
    { name: 'Chinanteco', value: 15000, color: '#4ECDC4', regions: ['Papaloapan'] },
    { name: 'Cuicateco', value: 8000, color: '#FFB347', regions: ['Cañada'] },
    { name: 'Amuzgo', value: 6500, color: '#95E1D3', regions: ['Costa'] },
    { name: 'Huave', value: 5500, color: '#F38181', regions: ['Istmo'] },
    { name: 'Chontal', value: 4000, color: '#AA96DA', regions: ['Costa'] },
    { name: 'Tacuate', value: 2500, color: '#FCBAD3', regions: ['Mixteca Baja'] },
    { name: 'Otras', value: 500, color: '#FFFFD2', regions: ['Varias'] }
  ],
  regions: [
    { name: 'Mixteca Alta', value: 75000, color: '#5B8DEE' },
    { name: 'Valles Centrales', value: 62000, color: '#E85D75' },
    { name: 'Sierra Norte', value: 58000, color: '#50C878' },
    { name: 'Sierra Sur', value: 45000, color: '#9D84B7' },
    { name: 'Mixteca Baja', value: 38000, color: '#F6A443' },
    { name: 'Costa', value: 32000, color: '#95E1D3' },
    { name: 'Istmo', value: 28000, color: '#F38181' },
    { name: 'Cañada', value: 12000, color: '#FFB347' }
  ],
  california: [
    { name: 'Fresno County', value: 85000, color: '#E85D75', lat: 36.7378, lon: -119.7871 },
    { name: 'Monterey County', value: 42000, color: '#5B8DEE', lat: 36.6777, lon: -121.6555 },
    { name: 'San Diego County', value: 38000, color: '#F6A443', lat: 32.7157, lon: -117.1611 },
    { name: 'Ventura County', value: 32000, color: '#50C878', lat: 34.3705, lon: -119.1391 },
    { name: 'Santa Barbara County', value: 28000, color: '#9D84B7', lat: 34.4208, lon: -119.6982 },
    { name: 'Kern County', value: 25000, color: '#FF6B9D', lat: 35.3733, lon: -119.0187 },
    { name: 'Tulare County', value: 22000, color: '#4ECDC4', lat: 36.2077, lon: -118.7932 },
    { name: 'Kings County', value: 18000, color: '#FFB347', lat: 36.0830, lon: -119.8195 },
    { name: 'Madera County', value: 15000, color: '#95E1D3', lat: 37.0583, lon: -119.6493 },
    { name: 'Santa Cruz County', value: 12000, color: '#F38181', lat: 36.9741, lon: -122.0308 },
    { name: 'San Benito County', value: 8000, color: '#AA96DA', lat: 36.6077, lon: -121.0680 }
  ]
};

// Current view state
let currentView = 'language';

// Initialize the visualizations
function init() {
  createChart(communityData.language);
  createLegend(communityData.language);
  createStatsBar(communityData.language);
  createCaliforniaMap();
  setupEventListeners();
  setupThemeToggle();
}

// Create the main chart (bar chart)
function createChart(data) {
  const container = d3.select('#chart');
  container.selectAll('*').remove();

  const width = container.node().getBoundingClientRect().width;
  const height = 500;
  const margin = { top: 40, right: 40, bottom: 80, left: 180 };

  const svg = container.append('svg')
    .attr('width', width)
    .attr('height', height);

  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const g = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  const x = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)])
    .range([0, chartWidth]);

  const y = d3.scaleBand()
    .domain(data.map(d => d.name))
    .range([0, chartHeight])
    .padding(0.2);

  // Add bars
  g.selectAll('.bar')
    .data(data)
    .join('rect')
    .attr('class', 'bar')
    .attr('x', 0)
    .attr('y', d => y(d.name))
    .attr('width', 0)
    .attr('height', y.bandwidth())
    .attr('fill', d => d.color)
    .attr('rx', 6)
    .transition()
    .duration(800)
    .attr('width', d => x(d.value));

  // Add labels
  g.selectAll('.label')
    .data(data)
    .join('text')
    .attr('class', 'label')
    .attr('x', -10)
    .attr('y', d => y(d.name) + y.bandwidth() / 2)
    .attr('text-anchor', 'end')
    .attr('alignment-baseline', 'middle')
    .style('font-size', '14px')
    .style('font-weight', '500')
    .text(d => d.name);

  // Add value labels
  g.selectAll('.value')
    .data(data)
    .join('text')
    .attr('class', 'value')
    .attr('x', d => x(d.value) + 10)
    .attr('y', d => y(d.name) + y.bandwidth() / 2)
    .attr('alignment-baseline', 'middle')
    .style('font-size', '13px')
    .style('font-weight', '600')
    .style('opacity', 0)
    .text(d => d.value.toLocaleString())
    .transition()
    .delay(800)
    .style('opacity', 1);

  // Add interactions
  g.selectAll('.bar')
    .on('mouseover', function(event, d) {
      d3.select(this)
        .transition()
        .duration(200)
        .attr('opacity', 0.8);
      showTooltip(event, d);
    })
    .on('mouseout', function() {
      d3.select(this)
        .transition()
        .duration(200)
        .attr('opacity', 1);
      hideTooltip();
    });
}

// Create legend
function createLegend(data) {
  const legend = d3.select('#legend');
  legend.selectAll('*').remove();

  const items = legend.selectAll('.legend-item')
    .data(data.slice(0, 8))
    .join('div')
    .attr('class', 'legend-item');

  items.append('div')
    .attr('class', 'legend-color')
    .style('background-color', d => d.color);

  items.append('span')
    .text(d => d.name);
}

// Create stats bar
function createStatsBar(data) {
  const statsBar = d3.select('#statsBar');
  statsBar.selectAll('*').remove();

  const total = d3.sum(data, d => d.value);
  const topThree = data.slice(0, 3);

  statsBar.append('div')
    .attr('class', 'stat')
    .html(`<div class="stat-value">${total.toLocaleString()}</div><div class="stat-label">Total Population</div>`);

  topThree.forEach(d => {
    const percentage = ((d.value / total) * 100).toFixed(1);
    statsBar.append('div')
      .attr('class', 'stat')
      .html(`<div class="stat-value">${percentage}%</div><div class="stat-label">${d.name}</div>`);
  });
}

// Create California map
function createCaliforniaMap() {
  const container = d3.select('#caMap');
  container.selectAll('*').remove();

  const width = container.node().getBoundingClientRect().width;
  const height = 600;

  const svg = container.append('svg')
    .attr('width', width)
    .attr('height', height);

  const projection = d3.geoMercator()
    .center([-119.4, 37])
    .scale(2400)
    .translate([width / 2, height / 2]);

  const path = d3.geoPath().projection(projection);

  // Add circles for each county
  const radiusScale = d3.scaleSqrt()
    .domain([0, d3.max(communityData.california, d => d.value)])
    .range([5, 40]);

  svg.selectAll('.county-circle')
    .data(communityData.california)
    .join('circle')
    .attr('class', 'county-circle')
    .attr('cx', d => projection([d.lon, d.lat])[0])
    .attr('cy', d => projection([d.lon, d.lat])[1])
    .attr('r', 0)
    .attr('fill', d => d.color)
    .attr('opacity', 0.7)
    .attr('stroke', '#fff')
    .attr('stroke-width', 2)
    .transition()
    .duration(1000)
    .attr('r', d => radiusScale(d.value));

  // Add labels
  svg.selectAll('.county-label')
    .data(communityData.california.filter(d => d.value > 20000))
    .join('text')
    .attr('class', 'county-label')
    .attr('x', d => projection([d.lon, d.lat])[0])
    .attr('y', d => projection([d.lon, d.lat])[1] - radiusScale(d.value) - 5)
    .attr('text-anchor', 'middle')
    .style('font-size', '12px')
    .style('font-weight', '600')
    .style('opacity', 0)
    .text(d => d.name.replace(' County', ''))
    .transition()
    .delay(1000)
    .style('opacity', 1);

  // Add interactions
  svg.selectAll('.county-circle')
    .on('mouseover', function(event, d) {
      d3.select(this)
        .transition()
        .duration(200)
        .attr('opacity', 1)
        .attr('stroke-width', 3);
      showMapTooltip(event, d);
    })
    .on('mouseout', function(event, d) {
      d3.select(this)
        .transition()
        .duration(200)
        .attr('opacity', 0.7)
        .attr('stroke-width', 2);
      hideMapTooltip();
    });

  // Create map legend
  createMapLegend(radiusScale);
}

// Create map legend
function createMapLegend(radiusScale) {
  const legend = d3.select('#mapLegend');
  const sizes = [10000, 50000, 80000];

  sizes.forEach(size => {
    const item = legend.append('div')
      .attr('class', 'map-legend-item');

    item.append('div')
      .attr('class', 'map-legend-circle')
      .style('width', `${radiusScale(size) * 2}px`)
      .style('height', `${radiusScale(size) * 2}px`);

    item.append('span')
      .text(size.toLocaleString());
  });
}

// Setup event listeners
function setupEventListeners() {
  d3.selectAll('.view-btn').on('click', function() {
    d3.selectAll('.view-btn').classed('active', false);
    d3.select(this).classed('active', true);

    const view = d3.select(this).attr('data-view');
    currentView = view;

    let data;
    if (view === 'language') {
      data = communityData.language;
    } else if (view === 'region') {
      data = communityData.regions;
    } else if (view === 'california') {
      data = communityData.california;
    }

    createChart(data);
    createLegend(data);
    createStatsBar(data);
  });
}

// Setup theme toggle
function setupThemeToggle() {
  const toggle = d3.select('[data-theme-toggle]');
  toggle.on('click', function() {
    const html = d3.select('html');
    const currentTheme = html.attr('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.attr('data-theme', newTheme);
  });
}

// Tooltip functions
function showTooltip(event, d) {
  const tooltip = d3.select('#tooltip');
  tooltip.style('display', 'block')
    .style('left', event.pageX + 10 + 'px')
    .style('top', event.pageY - 28 + 'px')
    .html(`<strong>${d.name}</strong><br>${d.value.toLocaleString()} personas`);
}

function hideTooltip() {
  d3.select('#tooltip').style('display', 'none');
}

function showMapTooltip(event, d) {
  const tooltip = d3.select('#mapTooltip');
  tooltip.style('display', 'block')
    .style('left', event.pageX + 10 + 'px')
    .style('top', event.pageY - 28 + 'px')
    .html(`<strong>${d.name}</strong><br>${d.value.toLocaleString()} personas`);
}

function hideMapTooltip() {
  d3.select('#mapTooltip').style('display', 'none');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);
