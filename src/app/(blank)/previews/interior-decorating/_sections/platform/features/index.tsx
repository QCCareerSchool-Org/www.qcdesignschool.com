import type { FC } from 'react';

export const PlatformFeatures: FC = () => (
  <div className="row">
    <div className="col-12 col-lg-4">
      <h3 className="h6 mb-3">Lessons Designed for Busy Lives</h3>
      <p>These interactive lessons automatically adapt to your device—watch crisp video tutorials on your phone or tablet with zero pinching or zooming.</p>
    </div>
    <div className="col-12 col-lg-4">
      <h3 className="h6 mb-3">Real-World Design Scenarios</h3>
      <p>Step into realistic design briefs: choose layouts and palettes, then get expert feedback so you learn by doing.</p>
    </div>
    <div className="col-12 col-lg-4">
      <h3 className="h6 mb-3">Interactive Learning</h3>
      <p>Validate your knowledge with quick drag-and-drop exercises and one-click quizzes, then get immediate insights on where to improve.</p>
    </div>
  </div>
);
