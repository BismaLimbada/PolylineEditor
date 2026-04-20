# Phase 1 Documentation: Requirements Analysis
**Established by Bisma (B23110006022)**

### 1. What is Wanted (Problem Statement)
The objective is to move beyond the limitations of static "ink-on-paper" digital drawing. In a standard raster environment, once a line is drawn, it is permanent. Our requirement is to establish a **Vector-Based PolyLine Editor**. By storing coordinates as a mathematical 2D array, the system allows for **Non-Destructive Editing**, meaning every line remains a "live" object that can be modified or deleted at any time during the session.

### 2. User Characteristics & Ethnography
**Target Users:** Students performing technical drawing, architectural sketching, or geography coordinate plotting.
**Field Observation:** We identified a high frequency of "Input Slippage" (accidental clicks). Traditional tools force a complete restart when a mistake occurs, increasing cognitive load.
**Key Requirement:** The system must prioritize **Error Recovery** through direct manipulation, allowing users to fix specific vertices rather than clearing the entire canvas.

### 3. User Scenarios (Conceptual Models)
- **The Precise Modification Scenario:** A user tracing a map boundary realizes a vertex is misplaced by a few pixels. Using the **'m' (Move)** requirement, they can interact with the system’s data structure to shift that specific coordinate, satisfying the need for high-accuracy results.
- **The Redundancy Cleanup Scenario:** During rapid drawing, a user may create unnecessary vertices. The **'d' (Delete)** requirement provides a surgical way to remove data artifacts while maintaining the overall continuity of the polyline.

### 4. Functional Requirements Specification
- **Data Persistence:** The system must manage an internal buffer capable of handling up to **100 independent polylines**.
- **Proximity Logic:** To ensure natural interaction, the system must implement the **Euclidean Distance Formula** to identify the vertex closest to the user's cursor for all editing actions.
- **Visual Feedback:** The system must provide a "Preview Line" (dashed line) during the drawing phase so the user sees the path before committing a point.
- **Primary Interaction Triggers (Keyboard):**
    - `b`: **Begin** — Initializes a new vertex sequence in the memory buffer.
    - `m`: **Move** — Changes the state of the nearest vertex to match current mouse coordinates.
    - `d`: **Delete** — Removes a specific vertex from the active coordinate list.
    - `r`: **Refresh** — Resets the canvas and clears the internal data array for a fresh session.
    - `q`: **Quit** — Safely terminates the application and closes the interaction window.

### 5. Technical Constraints
* **Browser Compatibility:** Must run in a standard web environment using the HTML5 Canvas API.
* **Performance:** UI updates and redrawing must happen in real-time without visible lag to maintain the "Direct Manipulation" feel.
