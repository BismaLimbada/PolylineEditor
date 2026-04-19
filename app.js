const canvas = document.getElementById('polylineCanvas');
const ctx = canvas.getContext('2d');

// Set actual internal canvas resolution to match its display size
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let polylines = []; 
let currentPolyline = null;
let mode = 'idle'; 
let selectedPoint = null;
let mousePos = { x: 0, y: 0 };

// Find distance for 'm' and 'd' logic
const getDist = (x1, y1, x2, y2) => Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);

function findClosest(x, y) {
    let closest = null;
    let min = 15; // Selection sensitivity
    polylines.forEach((line, lIdx) => {
        line.forEach((pt, pIdx) => {
            let d = getDist(x, y, pt.x, pt.y);
            if (d < min) { min = d; closest = { lIdx, pIdx }; }
        });
    });
    return closest;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    polylines.forEach(line => {
        if (line.length < 1) return;
        ctx.beginPath();
        ctx.moveTo(line[0].x, line[0].y);
        line.forEach(pt => ctx.lineTo(pt.x, pt.y));
        ctx.strokeStyle = '#2563eb';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Draw vertices
        line.forEach(pt => {
            ctx.fillStyle = '#0f172a';
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 4, 0, Math.PI * 2);
            ctx.fill();
        });
    });

    // Preview line for drawing mode
    if (mode === 'drawing' && currentPolyline && currentPolyline.length > 0) {
        ctx.beginPath();
        const lastPt = currentPolyline[currentPolyline.length - 1];
        ctx.moveTo(lastPt.x, lastPt.y);
        ctx.lineTo(mousePos.x, mousePos.y);
        ctx.strokeStyle = 'rgba(37, 99, 235, 0.4)';
        ctx.setLineDash([5, 5]);
        ctx.stroke();
        ctx.setLineDash([]);
    }
}

canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mousePos.x = e.clientX - rect.left;
    mousePos.y = e.clientY - rect.top;
    if (mode === 'moving_active' && selectedPoint) {
        polylines[selectedPoint.lIdx][selectedPoint.pIdx] = { ...mousePos };
    }
    draw();
});

canvas.addEventListener('mousedown', () => {
    if (mode === 'drawing' && currentPolyline) {
        currentPolyline.push({ ...mousePos });
    } else if (mode === 'deleting') {
        const target = findClosest(mousePos.x, mousePos.y);
        if (target) {
            polylines[target.lIdx].splice(target.pIdx, 1);
            if (polylines[target.lIdx].length === 0) polylines.splice(target.lIdx, 1);
        }
    } else if (mode === 'moving_start') {
        selectedPoint = findClosest(mousePos.x, mousePos.y);
        if (selectedPoint) mode = 'moving_active';
    } else if (mode === 'moving_active') {
        mode = 'idle';
        selectedPoint = null;
    }
    draw();
});

window.addEventListener('keydown', (e) => {
    const k = e.key.toLowerCase();
    if (k === 'b') {
        mode = 'drawing';
        currentPolyline = [];
        polylines.push(currentPolyline);
    } else if (k === 'm') mode = 'moving_start';
    else if (k === 'd') mode = 'deleting';
    else if (k === 'r') { polylines = []; mode = 'idle'; draw(); }
    else if (k === 'q') alert("Session Ended.");
});
