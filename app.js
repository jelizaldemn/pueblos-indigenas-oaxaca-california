// DATA Sources: IFS (Indigenous Farmworker Study), NCFH, Census 2000-2020, MICOP, Fresno Bee, UC Berkeley
// Population estimates reflect best available data from multiple sources.
// Many communities are significantly undercounted in official statistics.

const dataByLanguage = [
    {
        name: "Mixteco",
        nameNative: "(Tu'un Savi)",
        population: 185000,
        percent: 53,
        region: "Mixteca (Alta, Baja, Costa)",
        caRegions: "Central Valley, Ventura, San Diego, Central Coast",
        detail: "La lengua indígena más hablada en California. 150,000+ hablantes estimados. Provienen de la región Mixteca de Oaxaca, Guerrero y Puebla. Trabajan principalmente en agricultura.",
        color: "var(--chart-1)"
    },
    {
        name: "Zapoteco",
        nameNative: "(Diidxazá)",
        population: 91000,
        percent: 26,
        region: "Valles Centrales, Sierra Norte",
        caRegions: "Los Angeles, Central Valley",
        detail: "Segunda comunidad más grande. 50,000-60,000 en Los Angeles. Trabajan en restaurantes, construcción y servicios. Comunidad más urbanizada.",
        color: "var(--chart-2)"
    },
    {
        name: "Triqui",
        nameNative: "(Driki)",
        population: 35000,
        percent: 10,
        region: "Mixteca Alta (Copala, Chicahuaxtla, Itunyoso)",
        caRegions: "Central Coast, Central Valley, Sonoma",
        detail: "Tercera comunidad más grande. Concentrados en Greenfield, Salinas y Santa Rosa. Alta tasa de monolingüismo en lengua indígena.",
        color: "var(--chart-3)"
    },
    {
        name: "Chatino",
        nameNative: "(Chat'ñio)",
        population: 7000,
        percent: 2,
        region: "Sierra Sur / Costa de Oaxaca",
        caRegions: "Central Valley (Madera), Santa Cruz",
        detail: "Comunidad creciente en California. 'Kitse chat'ñio' significa 'Trabajo de las Palabras'. Provienen del suroeste de Oaxaca.",
        color: "var(--chart-4)"
    },
    {
        name: "Náhuatl",
        nameNative: "(Nahuatlahtolli)",
        population: 7000,
        percent: 2,
        region: "Norte de Oaxaca y Guerrero/Puebla",
        caRegions: "Central Valley, Los Angeles",
        detail: "Lengua indígena más hablada de México en general. En California provienen de regiones limítrofes de Oaxaca, Guerrero y Puebla.",
        color: "var(--chart-5)"
    },
    {
        name: "Mixe",
        nameNative: "(Ayüük)",
        population: 5000,
        percent: 1.5,
        region: "Sierra Norte (Tierra alta)",
        caRegions: "Los Angeles",
        detail: "Comunidad concentrada en Los Angeles. Lengua aislada del grupo mixe-zoqueano. Conocidos por alta tasa de monolingüismo en Oaxaca.",
        color: "var(--chart-6)"
    },
    {
        name: "Amuzgo",
        nameNative: "(Tzjön Non)",
        population: 4000,
        percent: 1.2,
        region: "Costa Chica (frontera Oaxaca-Guerrero)",
        caRegions: "San Diego, Ventura, Madera",
        detail: "Tzjön Non significa 'Pueblo de los Textiles'. Presentes en San Diego y Ventura County. Comunidad relativamente pequeña pero establecida.",
        color: "var(--chart-7)"
    },
    {
        name: "Chinanteco",
        nameNative: "(Tsa jujmí)",
        population: 3500,
        percent: 1,
        region: "Sierra Norte (Chinantla)",
        caRegions: "Central Valley, Los Angeles",
        detail: "Provienen de la región Chinantla en el norte de Oaxaca. Lengua con 11 variantes lingüísticas reconocidas por INALI.",
        color: "var(--chart-8)"
    },
    {
        name: "Mazateco",
        nameNative: "(Ha shuta enima)",
        population: 2500,
        percent: 0.7,
        region: "Cañada (Sierra Mazateca)",
        caRegions: "Central Valley",
        detail: "Provienen de la región Cañada de Oaxaca. 16 variantes lingüísticas. Históricamente comunidad agrícola en sus regiones de origen.",
        color: "var(--chart-9)"
    },
    {
        name: "Otras lenguas",
        nameNative: "Cuicateco, Huave, Chontal, Zoque...",
        population: 10000,
        percent: 3,
        region: "Diversas regiones de Oaxaca",
        caRegions: "Diversos destinos en California",
        detail: "Incluye hablantes de Cuicateco, Huave, Chontal de Oaxaca, Zoque, Popoloca, Chocho y otras lenguas menores. Comunidades dispersas por California.",
        color: "var(--chart-10)"
    }
];

const dataByRegion = [
    {
        name: "Mixteca",
        population: 195000,
        languages: "Mixteco, Triqui, Amuzgo",
        subregions: "Mixteca Alta, Mixteca Baja, Mixteca de la Costa",
        caRegions: "Central Valley, Ventura, San Diego, Central Coast",
        detail: "La región que más migrantes envía a California. Incluye partes del noroeste de Oaxaca, sur de Puebla y este de Guerrero. Tierra de los Ñuu Savi (Pueblo de la Lluvia).",
        color: "var(--chart-1)"
    },
    {
        name: "Valles Centrales",
        population: 65000,
        languages: "Zapoteco",
        subregions: "Tlacolula, Zimatlán, Etla, Ocotlán",
        caRegions: "Los Angeles, Central Valley",
        detail: "Corazón de la civilización zapoteca. Monte Albán y Mitla. Principal fuente de migrantes zapotecos a Los Angeles donde trabajan en servicios y restaurantes.",
        color: "var(--chart-2)"
    },
    {
        name: "Sierra Norte",
        population: 32000,
        languages: "Zapoteco, Mixe, Chinanteco",
        subregions: "Sierra de Juárez, Villa Alta, Ixtlán",
        caRegions: "Los Angeles, Central Valley",
        detail: "Región montañosa con gran diversidad lingüística. Hogar de zapotecos serranos, mixes y chinantecos. Rica en biodiversidad y ecoturismo.",
        color: "var(--chart-3)"
    },
    {
        name: "Sierra Sur",
        population: 15000,
        languages: "Chatino, Zapoteco",
        subregions: "Juquila, Sola de Vega, Miahuatlán",
        caRegions: "Central Valley, Santa Cruz",
        detail: "Región remota y montañosa. Hogar de los chatinos y zapotecos del sur. Los chatinos se autodenominan Kitse chat'ñio (Trabajo de las Palabras).",
        color: "var(--chart-4)"
    },
    {
        name: "Cañada",
        population: 8000,
        languages: "Mazateco, Cuicateco, Náhuatl",
        subregions: "Huautla, Teotitlán, Cuicatlán",
        caRegions: "Central Valley",
        detail: "Región estrecha en el noreste de Oaxaca. Predominantemente mazateca. Conocida por medicina herbal y manantiales naturales. Los mazatecos tienen 16 variantes lingüísticas.",
        color: "var(--chart-5)"
    },
    {
        name: "Costa",
        population: 12000,
        languages: "Mixteco de la Costa, Chatino, Amuzgo",
        subregions: "Jamiltepec, Pinotepa Nacional, Tututepec",
        caRegions: "San Diego, Ventura, Central Valley",
        detail: "Costa del Pacífico de Oaxaca. Influencias afromexicanas. Mezcla de mixteco costero, chatino y amuzgo. Región de textiles tradicionales.",
        color: "var(--chart-6)"
    },
    {
        name: "Istmo de Tehuantepec",
        population: 10000,
        languages: "Zapoteco del Istmo, Huave, Zoque",
        subregions: "Juchitán, Tehuantepec, San Mateo del Mar",
        caRegions: "Los Angeles, Central Valley",
        detail: "Región del istmo con fuerte identidad zapoteca. Los huaves viven en la costa del Pacífico. Conocida por la sociedad matrilineal y las muxes.",
        color: "var(--chart-7)"
    },
    {
        name: "Chinantla",
        population: 5000,
        languages: "Chinanteco",
        subregions: "Valle Nacional, Usila, Ojitlán",
        caRegions: "Central Valley, Los Angeles",
        detail: "Región boscosa y húmeda del norte de Oaxaca. Once variantes lingüísticas del chinanteco. Región afectada por construcción de presas que desplazó comunidades.",
        color: "var(--chart-8)"
    },
    {
        name: "Otras regiones",
        population: 8000,
        languages: "Diversas",
        subregions: "Diversas",
        caRegions: "Diversos destinos",
        detail: "Incluye migrantes de la Sierra Mixe alta, Papaloapan, y regiones fronterizas con Veracruz, Guerrero y Puebla.",
        color: "var(--chart-10)"
    }
];

const dataByCaliforniaRegion = [
    {
        name: "Valle Central",
        population: 100000,
        counties: "Fresno, Madera, Tulare, Kern, Merced, San Joaquin, Stanislaus, Kings",
        languages: "Mixteco, Triqui, Zapoteco, Chatino",
        detail: "Mayor concentración de oaxaqueños en California. 45,000-100,000 personas. Centro de agricultura y trabajo agrícola. Fresno, Madera y Tulare son los condados principales.",
        color: "var(--chart-1)"
    },
    {
        name: "Los Angeles Metro",
        population: 120000,
        counties: "Los Angeles, Orange, San Bernardino, Riverside",
        languages: "Zapoteco, Mixe, Mixteco, Triqui",
        detail: "Comunidad más grande y urbanizada. 50,000-250,000 estimados. Zapotecos predominan. Trabajan en restaurantes, construcción y servicios. Mar Vista, Pico Union, Koreatown.",
        color: "var(--chart-2)"
    },
    {
        name: "Condado de San Diego",
        population: 25000,
        counties: "San Diego",
        languages: "Mixteco, Amuzgo, Triqui",
        detail: "25,000 estimados. 10,000-15,000 en campamentos informales en colinas del norte del condado. Comunidad mayoritariamente masculina y joven. Oceanside, Vista, Escondido.",
        color: "var(--chart-3)"
    },
    {
        name: "Costa Central",
        population: 30000,
        counties: "Santa Barbara, Monterey, Santa Cruz, San Mateo, San Benito",
        languages: "Mixteco, Triqui, Zapoteco, Chatino",
        detail: "15,000-30,000 personas. Región más diversa en lenguas. Santa María, Greenfield, Salinas, Watsonville. Trabajo agrícola en fresas, lechuga, y hoteles costeros.",
        color: "var(--chart-4)"
    },
    {
        name: "Condado de Ventura",
        population: 20000,
        counties: "Ventura",
        languages: "Mixteco, Triqui, Zapoteco, Amuzgo, Chatino",
        detail: "20,000 estimados. Oxnard, Port Hueneme, El Rio. Trabajo en cosechas de fresa y frambuesa. 80% habla algo de español. Nuevos migrantes más jóvenes y monolingües.",
        color: "var(--chart-5)"
    },
    {
        name: "Bahía de San Francisco",
        population: 15000,
        counties: "Santa Clara, San Mateo, Alameda, San Francisco, Contra Costa",
        languages: "Mixteco, Zapoteco",
        detail: "Comunidad urbana en crecimiento. San José, Milpitas, Half Moon Bay. Mezcla de trabajo agrícola (Pescadero) y servicios urbanos.",
        color: "var(--chart-6)"
    },
    {
        name: "Norte de San Francisco",
        population: 5000,
        counties: "Sonoma, Napa",
        languages: "Mixteco, Triqui",
        detail: "Comunidad emergente. Santa Rosa, Graton, Sebastopol, St. Helena. Trabajo en viñedos y agricultura. Comunidades en Healdsburg, Windsor, Cloverdale.",
        color: "var(--chart-7)"
    }
];

// --- CHART COLOR GETTERS ---
const chartColors = [
    "--chart-1", "--chart-2", "--chart-3", "--chart-4", "--chart-5", 
    "--chart-6", "--chart-7", "--chart-8", "--chart-9", "--chart-10", 
    "--chart-11", "--chart-12"
];

function getColor(index) {
    const style = getComputedStyle(document.documentElement);
    return style.getPropertyValue(chartColors[index % chartColors.length]).trim();
}

// --- GLOBALS ---
let currentView = "language";
let simulation;
let svgG;
let width, height;
let highlightedGroup = null;

// --- INIT ---
function init() {
    setupThemeToggle();
    setupViewToggle();
    renderChart();
    renderStats();
    
    window.addEventListener("resize", debounce(renderChart, 250));
}

// --- THEME TOGGLE ---
function setupThemeToggle() {
    const t = document.querySelector("[data-theme-toggle]");
    const r = document.documentElement;
    
    let d = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    r.setAttribute("data-theme", d);
    updateThemeIcon(t, d);

    t.addEventListener("click", () => {
        d = d === "dark" ? "light" : "dark";
        r.setAttribute("data-theme", d);
        updateThemeIcon(t, d);
        // Re-render chart with new colors
        renderChart();
    });
}

function updateThemeIcon(btn, theme) {
    if (!btn) return;
    btn.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} mode`);
    btn.innerHTML = theme === "dark" 
        ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
        : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
}

// --- VIEW TOGGLE ---
function setupViewToggle() {
    document.querySelectorAll(".view-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".view-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentView = btn.dataset.view;
            highlightedGroup = null;
            renderChart();
            renderStats();
        });
    });
}

// --- DATA GETTER ---
function getData() {
    switch(currentView) {
        case "language": return dataByLanguage;
        case "region": return dataByRegion;
        case "california": return dataByCaliforniaRegion;
        default: return dataByLanguage;
    }
}

// --- RENDER CHART ---
function renderChart() {
    const container = document.getElementById("chart");
    container.innerHTML = "";
    
    const rect = container.getBoundingClientRect();
    width = rect.width;
    height = rect.height;

    const svg = d3.select(container)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", `0 0 ${width} ${height}`);

    svgG = svg.append("g");

    const data = getData();
    const maxPop = d3.max(data, d => d.population);
    const minPop = d3.min(data, d => d.population);

    // Scale radius (use sqrt for area-proportional bubbles)
    const maxRadius = Math.min(width, height) * 0.18;
    const minRadius = Math.min(width, height) * 0.03;
    const rScale = d3.scaleSqrt()
        .domain([minPop, maxPop])
        .range([minRadius, maxRadius]);

    const nodes = data.map((d, i) => ({
        ...d,
        r: rScale(d.population),
        colorIndex: i,
        x: width / 2 + (Math.random() - 0.5) * width * 0.3,
        y: height / 2 + (Math.random() - 0.5) * height * 0.3
    }));

    // Render legend
    renderLegend(nodes);

    // Force simulation
    if (simulation) simulation.stop();
    
    simulation = d3.forceSimulation(nodes)
        .force("center", d3.forceCenter(width / 2, height / 2).strength(0.8))
        .force("charge", d3.forceManyBody().strength(d => -d.r * 0.3))
        .force("collision", d3.forceCollide().radius(d => d.r + 4).strength(0.95))
        .force("x", d3.forceX(width / 2).strength(0.08))
        .force("y", d3.forceY(height / 2).strength(0.12))
        .alpha(0.8)
        .alphaDecay(0.025);

    // Create bubble groups
    const bubbleGroups = svgG.selectAll(".bubble-group")
        .data(nodes)
        .enter()
        .append("g")
        .attr("class", "bubble-group")
        .style("cursor", "pointer");

    // Circles
    bubbleGroups.append("circle")
        .attr("r", 0)
        .attr("fill", (d, i) => getColor(i))
        .attr("opacity", 0.88)
        .attr("stroke", (d, i) => getColor(i))
        .attr("stroke-width", 1.5)
        .attr("stroke-opacity", 0.3)
        .transition()
        .duration(800)
        .delay((d, i) => i * 80)
        .ease(d3.easeCubicOut)
        .attr("r", d => d.r);

    // Labels
    bubbleGroups.each(function(d) {
        const g = d3.select(this);
        const r = d.r;
        
        if (r < 18) return; // Too small for label
        
        const sizeClass = r < 35 ? "bubble-label-sm" : r < 55 ? "bubble-label-md" : r < 80 ? "bubble-label-lg" : "bubble-label-xl";
        
        // Fit label to bubble (truncate if needed)
        let label = d.name;
        const maxChars = Math.floor(r / (r < 35 ? 4 : r < 55 ? 5 : 6));
        
        if (label.length > maxChars + 2 && r < 65) {
            // Use short abbreviations for known long names
            const abbrevs = {
                "Bahía de San Francisco": "Bahía SF",
                "Condado de San Diego": "C. San Diego",
                "Condado de Ventura": "Ventura",
                "Norte de San Francisco": "Norte SF",
                "Istmo de Tehuantepec": "Istmo",
                "Otras lenguas": "Otras",
                "Otras regiones": "Otras",
                "Los Angeles Metro": "LA Metro",
                "Valles Centrales": "V. Centrales",
                "Chinanteco": "Chinant.",
                "Chinantla": "Chinantla",
                "Costa Central": "C. Central",
                "Mazateco": "Mazat."
            };
            label = abbrevs[d.name] || label;
        }

        g.append("text")
            .attr("class", `bubble-label ${sizeClass}`)
            .attr("dy", r < 40 ? "-0.3em" : "0.35em")
            .text(label)
            .style("opacity", 0)
            .transition()
            .delay(600 + nodes.indexOf(d) * 80)
            .duration(400)
            .style("opacity", 1);
            
        if (r >= 40) {
            const popText = formatNumber(d.population);
            g.append("text")
                .attr("class", "bubble-sublabel")
                .attr("dy", "1em")
                .text(popText)
                .style("opacity", 0)
                .transition()
                .delay(600 + nodes.indexOf(d) * 80)
                .duration(400)
                .style("opacity", 0.85);
        }
    });

    // Interactivity
    const tooltip = document.getElementById("tooltip");
    
    bubbleGroups
        .on("mouseenter", function(event, d) {
            d3.select(this).select("circle")
                .transition().duration(200)
                .attr("opacity", 1)
                .attr("stroke-width", 3)
                .attr("stroke-opacity", 0.6);
            
            showTooltip(event, d, tooltip);
        })
        .on("mousemove", function(event) {
            positionTooltip(event, tooltip);
        })
        .on("mouseleave", function() {
            d3.select(this).select("circle")
                .transition().duration(200)
                .attr("opacity", highlightedGroup !== null && this.__data__.colorIndex !== highlightedGroup ? 0.2 : 0.88)
                .attr("stroke-width", 1.5)
                .attr("stroke-opacity", 0.3);
            
            tooltip.classList.remove("visible");
        });

    // Touch support
    bubbleGroups
        .on("touchstart", function(event, d) {
            event.preventDefault();
            showTooltip(event.touches[0], d, tooltip);
        })
        .on("touchend", () => {
            setTimeout(() => tooltip.classList.remove("visible"), 2000);
        });

    // Drag
    bubbleGroups.call(d3.drag()
        .on("start", (event, d) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        })
        .on("drag", (event, d) => {
            d.fx = event.x;
            d.fy = event.y;
        })
        .on("end", (event, d) => {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }));

    simulation.on("tick", () => {
        bubbleGroups.attr("transform", d => {
            const pad = 6;
            d.x = Math.max(d.r + pad, Math.min(width - d.r - pad, d.x));
            d.y = Math.max(d.r + pad, Math.min(height - d.r - pad, d.y));
            return `translate(${d.x},${d.y})`;
        });
    });
}

// --- TOOLTIP ---
function showTooltip(event, d, tooltip) {
    let html = `<div class="tooltip-title">${d.name}`;
    if (d.nameNative) {
        html += ` <span style="color:var(--color-text-muted);font-weight:400;font-size:var(--text-sm)">${d.nameNative}</span>`;
    }
    html += `</div>`;
    html += `<div class="tooltip-population" style="color:${getColor(d.colorIndex)}">${formatNumber(d.population)}</div>`;
    
    html += `<div class="tooltip-detail">`;
    if (d.percent) html += `<strong>${d.percent}%</strong> de la población indígena oaxaqueña en CA<br>`;
    if (d.region) html += `<strong>Origen:</strong> ${d.region}<br>`;
    if (d.languages) html += `<strong>Lenguas:</strong> ${d.languages}<br>`;
    if (d.counties) html += `<strong>Condados:</strong> ${d.counties}<br>`;
    if (d.subregions) html += `<strong>Subregiones:</strong> ${d.subregions}<br>`;
    if (d.caRegions) html += `<strong>En California:</strong> ${d.caRegions}<br>`;
    if (d.detail) html += `<br>${d.detail}`;
    html += `</div>`;

    tooltip.innerHTML = html;
    tooltip.classList.add("visible");
    positionTooltip(event, tooltip);
}

function positionTooltip(event, tooltip) {
    const pad = 16;
    let x = (event.clientX || event.pageX) + pad;
    let y = (event.clientY || event.pageY) + pad;
    
    const tw = tooltip.offsetWidth;
    const th = tooltip.offsetHeight;
    
    if (x + tw > window.innerWidth - pad) x = (event.clientX || event.pageX) - tw - pad;
    if (y + th > window.innerHeight - pad) y = (event.clientY || event.pageY) - th - pad;
    
    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
}

// --- LEGEND ---
function renderLegend(nodes) {
    const legend = document.getElementById("legend");
    legend.innerHTML = "";
    
    nodes.forEach((d, i) => {
        const item = document.createElement("div");
        item.className = "legend-item";
        item.innerHTML = `<span class="legend-dot" style="background:${getColor(i)}"></span><span>${d.name}</span>`;
        
        item.addEventListener("click", () => {
            if (highlightedGroup === i) {
                highlightedGroup = null;
                resetHighlight();
                document.querySelectorAll(".legend-item").forEach(li => li.classList.remove("dimmed"));
            } else {
                highlightedGroup = i;
                highlightGroup(i);
                document.querySelectorAll(".legend-item").forEach((li, idx) => {
                    li.classList.toggle("dimmed", idx !== i);
                });
            }
        });
        
        legend.appendChild(item);
    });
}

function highlightGroup(index) {
    svgG.selectAll(".bubble-group").each(function(d) {
        const isHighlighted = d.colorIndex === index;
        d3.select(this).select("circle")
            .transition().duration(300)
            .attr("opacity", isHighlighted ? 1 : 0.15);
        d3.select(this).selectAll("text")
            .transition().duration(300)
            .style("opacity", isHighlighted ? 1 : 0.15);
    });
}

function resetHighlight() {
    svgG.selectAll(".bubble-group").each(function() {
        d3.select(this).select("circle")
            .transition().duration(300)
            .attr("opacity", 0.88);
        d3.select(this).selectAll(".bubble-label")
            .transition().duration(300)
            .style("opacity", 1);
        d3.select(this).selectAll(".bubble-sublabel")
            .transition().duration(300)
            .style("opacity", 0.85);
    });
}

// --- STATS ---
function renderStats() {
    const bar = document.getElementById("statsBar");
    const data = getData();
    const total = d3.sum(data, d => d.population);
    const count = data.length;
    const largest = data.reduce((a, b) => a.population > b.population ? a : b);
    
    let statsHTML = `
        <div class="stat-card">
            <div class="stat-value">${formatNumber(total)}</div>
            <div class="stat-label">Población Total Estimada</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">${count}</div>
            <div class="stat-label">${currentView === "language" ? "Lenguas / Grupos" : currentView === "region" ? "Regiones de Origen" : "Regiones en California"}</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">${largest.name}</div>
            <div class="stat-label">${currentView === "california" ? "Mayor Concentración" : "Grupo Más Grande"}</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">${formatNumber(largest.population)}</div>
            <div class="stat-label">Población del Mayor Grupo</div>
        </div>
    `;
    bar.innerHTML = statsHTML;
}

// --- UTILS ---
function formatNumber(n) {
    if (n >= 1000000) return (n / 1000000).toFixed(1) + " M";
    if (n >= 1000) return Math.round(n / 1000).toLocaleString() + " K";
    return n.toLocaleString();
}

function debounce(fn, ms) {
    let t;
    return function(...args) {
        clearTimeout(t);
        t = setTimeout(() => fn.apply(this, args), ms);
    };
}

// --- CALIFORNIA MAP ---
const countyRegionMap = {
    "Fresno": { region: "Valle Central", population: 100000 },
    "Madera": { region: "Valle Central", population: 100000 },
    "Tulare": { region: "Valle Central", population: 100000 },
    "Kern": { region: "Valle Central", population: 100000 },
    "Merced": { region: "Valle Central", population: 100000 },
    "San Joaquin": { region: "Valle Central", population: 100000 },
    "Stanislaus": { region: "Valle Central", population: 100000 },
    "Kings": { region: "Valle Central", population: 100000 },
    "Los Angeles": { region: "Los Angeles Metro", population: 120000 },
    "Orange": { region: "Los Angeles Metro", population: 120000 },
    "San Bernardino": { region: "Los Angeles Metro", population: 120000 },
    "Riverside": { region: "Los Angeles Metro", population: 120000 },
    "San Diego": { region: "Condado de San Diego", population: 25000 },
    "Santa Barbara": { region: "Costa Central", population: 30000 },
    "Monterey": { region: "Costa Central", population: 30000 },
    "Santa Cruz": { region: "Costa Central", population: 30000 },
    "San Mateo": { region: "Costa Central", population: 30000 },
    "San Benito": { region: "Costa Central", population: 30000 },
    "Ventura": { region: "Condado de Ventura", population: 20000 },
    "Santa Clara": { region: "Bahía de San Francisco", population: 15000 },
    "Alameda": { region: "Bahía de San Francisco", population: 15000 },
    "San Francisco": { region: "Bahía de San Francisco", population: 15000 },
    "Contra Costa": { region: "Bahía de San Francisco", population: 15000 },
    "Sonoma": { region: "Norte de San Francisco", population: 5000 },
    "Napa": { region: "Norte de San Francisco", population: 5000 },
};

const regionColorIndex = {
    "Valle Central": 0,
    "Los Angeles Metro": 1,
    "Condado de San Diego": 2,
    "Costa Central": 3,
    "Condado de Ventura": 4,
    "Bahía de San Francisco": 5,
    "Norte de San Francisco": 6
};

function getRegionDetail(regionName) {
    return dataByCaliforniaRegion.find(d => d.name === regionName);
}

async function initMap() {
    const container = document.getElementById("caMap");
    const mapTooltip = document.getElementById("mapTooltip");

    try {
        const resp = await fetch("https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json");
        const topoData = await resp.json();
        drawMap(container, topoData, mapTooltip);
    } catch(e) {
        container.innerHTML = `<p style="padding:2rem;text-align:center;color:var(--color-text-muted)">No se pudo cargar el mapa.</p>`;
    }
}

function drawMap(container, topoData, mapTooltip) {
    container.innerHTML = "";
    const w = container.clientWidth || 720;
    const h = Math.max(460, w * 0.72);

    const svg = d3.select(container)
        .append("svg")
        .attr("viewBox", `0 0 ${w} ${h}`)
        .attr("preserveAspectRatio", "xMidYMid meet")
        .style("width", "100%")
        .style("height", "auto");

    const counties = topojson.feature(topoData, topoData.objects.counties);
    const caCounties = {
        type: "FeatureCollection",
        features: counties.features.filter(f => f.id.toString().startsWith("06"))
    };

    const countyNames = {};
    if (topoData.objects.counties.geometries) {
        topoData.objects.counties.geometries.forEach(g => {
            if (g.id && g.id.toString().startsWith("06")) {
                countyNames[g.id] = g.properties.name;
            }
        });
    }

    const projFit = d3.geoMercator().fitExtent([[10, 10], [w - 10, h - 10]], caCounties);
    const path = d3.geoPath().projection(projFit);

    const baseColors = ["#c74b16", "#2d6a4f", "#6b3fa0", "#c69800", "#1a6e8e", "#a13544", "#4a7c59"];
    const darkColors = ["#e87a4a", "#52b788", "#9b7fd4", "#edb336", "#4fadcf", "#dd6974", "#6daa75"];

    function getMapColor(regionName) {
        const isDark = document.documentElement.getAttribute("data-theme") === "dark";
        const idx = regionColorIndex[regionName];
        if (idx === undefined) return isDark ? "#3d3830" : "#e6ddd0";
        return isDark ? darkColors[idx] : baseColors[idx];
    }

    const countiesGroup = svg.append("g").attr("class", "counties-group");

    countiesGroup.selectAll(".ca-county")
        .data(caCounties.features)
        .enter()
        .append("path")
        .attr("class", "ca-county")
        .attr("d", path)
        .attr("fill", d => {
            const name = countyNames[d.id] || d.properties.name;
            const info = countyRegionMap[name];
            return info ? getMapColor(info.region) : (document.documentElement.getAttribute("data-theme") === "dark" ? "#3d3830" : "#e6ddd0");
        })
        .attr("opacity", 0)
        .transition().duration(600).delay((d, i) => i * 12)
        .attr("opacity", d => {
            const name = countyNames[d.id] || d.properties.name;
            return countyRegionMap[name] ? 0.88 : 0.55;
        });

    const labelCounties = ["Fresno", "Los Angeles", "San Diego", "Ventura", "Monterey", "Santa Barbara", "Sonoma", "Kern", "Tulare", "Madera", "Merced", "San Joaquin", "Stanislaus", "Orange", "Santa Clara", "Alameda", "San Francisco", "San Bernardino", "Riverside", "Napa", "Santa Cruz", "San Mateo"];

    countiesGroup.selectAll(".county-label")
        .data(caCounties.features.filter(d => {
            const name = countyNames[d.id] || d.properties.name;
            return labelCounties.includes(name);
        }))
        .enter()
        .append("text")
        .attr("class", "county-label")
        .attr("transform", d => {
            const c = path.centroid(d);
            return `translate(${c[0]},${c[1]})`;
        })
        .text(d => {
            const name = countyNames[d.id] || d.properties.name;
            const shorts = { "San Francisco": "SF", "San Bernardino": "S. Bernardino", "San Joaquin": "S. Joaquin", "Santa Barbara": "Sta. Bárbara", "Santa Clara": "Sta. Clara", "Santa Cruz": "Sta. Cruz", "San Mateo": "S. Mateo" };
            return shorts[name] || name;
        })
        .style("opacity", 0)
        .transition().delay(800).duration(400)
        .style("opacity", 1);

    svg.selectAll(".ca-county")
        .on("mouseenter", function(event, d) {
            const name = countyNames[d.id] || d.properties.name;
            const info = countyRegionMap[name];
            showMapTooltip(event, name, info, mapTooltip);
            d3.select(this).raise();
        })
        .on("mousemove", event => positionMapTooltipevent, mapTooltip)
        .on("mouseleave", () => mapTooltip.classList.remove("visible"));

    buildMapLegend(baseColors, darkColors);

    const observer = new MutationObserver(() => {
        svg.selectAll(".ca-county").attr("fill", d => {
            const name = countyNames[d.id] || d.properties.name;
            const info = countyRegionMap[name];
            return info ? getMapColor(info.region) : (document.documentElement.getAttribute("data-theme") === "dark" ? "#3d3830" : "#e6ddd0");
        });
        buildMapLegend(baseColors, darkColors);
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
}

function showMapTooltipevent, countyName, info, tooltip {
    let html = `<div class="map-tooltip-title">${countyName}</div>`;
    if (info) {
        const regionDetail = getRegionDetail(info.region);
        html += `<div class="map-tooltip-pop">${formatNumber(info.population)}</div>`;
        html += `<div class="map-tooltip-detail">`;
        html += `<strong>Región:</strong> ${info.region}<br>`;
        if (regionDetail) html += `<strong>Lenguas:</strong> ${regionDetail.languages}<br>`;
        html += `<br>${regionDetail.detail}`;
        html += `</div>`;
    } else {
        html += `<div class="map-tooltip-detail">Sin datos de comunidades indígenas oaxaqueñas significativas registradas.</div>`;
    }
    tooltip.innerHTML = html;
    tooltip.classList.add("visible");
    positionMapTooltipevent, tooltip;
}

function positionMapTooltipevent, tooltip {
    const pad = 16;
    let x = event.clientX + pad;
    let y = event.clientY + pad;
    const tw = tooltip.offsetWidth;
    const th = tooltip.offsetHeight;
    if (x + tw > window.innerWidth - pad) x = event.clientX - tw - pad;
    if (y + th > window.innerHeight - pad) y = event.clientY - th - pad;
    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
}

function buildMapLegend(baseColors, darkColors) {
    const legend = document.getElementById("mapLegend");
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const colors = isDark ? darkColors : baseColors;
    legend.innerHTML = `<div class="map-legend-title">Regiones en California</div>`;
    dataByCaliforniaRegion.forEach((region, i) => {
        const item = document.createElement("div");
        item.className = "map-legend-item";
        item.innerHTML = `<span class="map-legend-swatch" style="background:${colors[i]}"></span><span>${region.name}<br><span style="opacity:0.7;font-size:10px">${formatNumber(region.population)}</span></span>`;
        legend.appendChild(item);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    init();
    initMap();
});
