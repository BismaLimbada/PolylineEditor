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
4. **System Response:** The system removes that point from the vertex list and automatically bridges the gap between the two surrounding points.
5. **Outcome:** The line is cleaned up, maintaining a professional and accurate appearance.

### Scenario 3: Task Reset and Environment Clearing
**User Goal:** Transitioning between different drawing projects.
1. **Context:** After completing a set of test drawings, the canvas has reached a high level of clutter.
2. **Requirement Execution:** The user presses **'r'** (Refresh).
3. **System Response:** The internal list of 100 polylines is wiped from the system's memory, and the canvas is cleared.
4. **Outcome:** The user is presented with a fresh workspace, ready for the next task.
5. **Post-Condition:** All internal array data is emptied, and the mode returns to Idle.
6. **Interaction Result:** The canvas becomes blank and the Status Box displays "Idle".

### Scenario 4: Intentional State Termination (Quit)
**User Goal:** Suspending interaction while preserving the visual output.
1. **Action:** The student completes their work and wants to stop the active editing tools.
2. **Execution:** The user presses **'q'** (Quit).
3. **System Response:** The application updates the status box to display "App Quit" and stops tracking mouse movements.
4. **Visual State:** The final drawing remains visible on the canvas for review or screen-capturing.
5. **Constraint:** The mouse clicks no longer add or modify points while in this state.
6. **Outcome:** The user safely ends the active session while keeping their work on display.

### Scenario 5: Dynamic Session Resumption
**User Goal:** Returning to a drawing state after a "Quit" or "Idle" state.
1. **Context:** The application is currently in the "Quit" state with existing drawings on the canvas.
2. **Interaction:** The user decides an additional shape is needed and presses **'b'** (Begin).
3. **Requirement Execution:** The system transitions from "App Quit" immediately back into "Drawing" mode.
4. **Data Handling:** A new empty array is pushed into the 100-polyline buffer.
5. **Visual Feedback:** The cursor changes back to a crosshair, and a dashed preview line appears.
6. **Outcome:** The user seamlessly resumes work without needing to refresh the browser or lose previous progress.
