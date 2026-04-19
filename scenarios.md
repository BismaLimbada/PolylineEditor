# Phase 1: User Scenarios & Interaction Flow
**Established by Bisma (B23110006022)**

### Scenario 1: Correcting a Technical Drawing Error
**User Goal:** High-precision adjustment of a geometric vertex.
1. **Initiation:** The user presses **'b'** and clicks three times to define a triangular gable for an architectural sketch.
2. **Detection:** The user observes that the apex of the triangle is not perfectly vertical.
3. **Requirement Execution:** The user enters the "Move Mode" by pressing **'m'**. 
4. **Interaction:** They click the misplaced vertex and reposition it to the correct alignment.
5. **System Response:** The system updates the 2D array in real-time, redrawing the connected lines to reflect the new coordinate.
6. **Outcome:** The user achieves a precise drawing without redrawing the entire shape.

### Scenario 2: Data Refinement and Error Recovery
**User Goal:** Removing accidental input points (double-clicks).
1. **Initiation:** While tracing a complex boundary, the user accidentally adds an extra point in the middle of a straight line.
2. **Requirement Execution:** The user switches to "Delete Mode" by pressing **'d'**.
3. **Interaction:** They click on the redundant point.
4. **System Response:** The system removes that point from the polyline's vertex list and automatically bridges the gap between the two surrounding points.
5. **Outcome:** The line is cleaned up, maintaining a professional and accurate appearance.

### Scenario 3: Task Reset and Environment Clearing
**User Goal:** Transitioning between different drawing projects.
1. **Context:** After completing a set of test drawings, the canvas has reached a high level of clutter.
2. **Requirement Execution:** The user presses **'r'** (Refresh).
3. **System Response:** The internal list of 100 polylines is wiped from the system's memory, and the canvas is cleared.
4. **Outcome:** The user is presented with a fresh workspace, ready for the next task.

### Scenario 4: Formal Session Termination
**User Goal:** Exiting the software after the lab exercise is complete.
1. **Action:** The student completes their work and wants to close the session.
2. **Execution:** The user presses **'q'** (Quit).
3. **Outcome:** The application acknowledges the request and terminates, satisfying the requirement for a clean exit protocol.
