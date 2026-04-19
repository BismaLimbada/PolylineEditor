# Phase 1 Documentation: Requirements Analysis
Established by Bisma (B23110006022)

### 1. What is Wanted (Problem Statement)
Current manual drawing and basic digital tools often treat lines as permanent. The goal is to establish a system where drawing is a dynamic process, allowing users to modify existing work rather than deleting and starting over.

### 2. Ethnography & Observation
Observation of students working on manual geography coordinate plotting reveals that human error is frequent. Therefore, a digital system must prioritize Editability (the ability to fix errors) over Finality.

### 3. User Scenarios
* The Adjustment Scenario: A user draws a boundary but realizes a vertex is misplaced. Using the 'm' (Move) requirement, they can shift that specific point while the connected lines update automatically.
* The Error Cleanup: A user adds a point by mistake. The 'd' (Delete) requirement allows for targeted removal, maintaining the rest of the polyline.

### 4. Functional Requirements
* Data Limit: Must support a list of up to 100 polylines.
* Precision Interaction: Must utilize the Euclidean distance formula to identify the vertex closest to the user's cursor for 'm' and 'd' actions.
* Keyboard Triggers: 
    `b`: Begin new polyline.
    `m`: Move nearest vertex.
    `d`: Delete nearest vertex.
    `r`: Refresh/Redraw screen.
    `q`: Quit application.
